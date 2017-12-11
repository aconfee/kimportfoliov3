'use strict';
const nodemailer = require('nodemailer');
const axios = require('axios');

const smtpClientId = process.env.SMTP_CLIENT_ID;
if(!smtpClientId) {
  console.error("Please set environment variable SMTP_CLIENT_ID for email messenger.");
}

const smtpClientSecret = process.env.SMTP_CLIENT_SECRET;
if(!smtpClientSecret) {
  console.error("Please set environment variable SMTP_CLIENT_SECRET for email messenger.");
}

const smtpRefreshToken = process.env.SMTP_REFRESH_TOKEN;
if(!smtpRefreshToken) {
  console.error("Please set environment variable SMTP_REFRESH_TOKEN for email messenger.");
}

const smtpAccessToken = process.env.SMTP_ACCESS_TOKEN;
if(!smtpAccessToken) {
  console.error("Please set environment variable SMTP_ACCESS_TOKEN for email messenger.");
}

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
if(!INSTAGRAM_ACCESS_TOKEN) {
  console.error("Please set environment variable INSTAGRAM_ACCESS_TOKEN for instagram feed.");
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        type: "OAuth2",
        user: "adamestela@gmail.com",
        clientId: smtpClientId,
        clientSecret: smtpClientSecret,
        refreshToken: smtpRefreshToken,
        accessToken: smtpAccessToken
    }
});

module.exports.sendMessage = function(req, res) {
  console.log('we here!', req.body);
  const { first, last, email, message } = req.body;

  const messageText = `
    Sender:
    ${first} ${last}
    ${email}
    Message:
    ${message}`;

  const messageHtml = `<div>
    <h1>Sender</h1>
    <p>${first} ${last}</p>
    <p>${email}</p>
    <br />
    <h1>Message</h1>
    <p>${message}</p>
  </div>`;

  let mailOptions = {
      from: '"Portfolio Message" <adamestela@gmail.com>',
      to: "kimbyarting@gmail.com",
      subject: "PORTFOLIO MESSAGE!!",
      text: messageText,
      html: messageHtml
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Something went wrong when trying to send email:");
        console.log(error);

        res.status(500);
        res.json({ error });
        return;
      }

      res.status(200);
      res.json({ messageId: info.messageId, response: info.response });
  });
}

module.exports.instagramFeed = function(req, res) {
  console.log("getting instagram feed");

  // TODO: When app is reviewed by instagram and client is in Live Mode instead of Sandbox Mode, I will getting
  // a 'pagination' property returned with this request which I can used (next_url) to get more than 20 images.
  const count = 20;
  const url = `https://api.instagram.com/v1/users/1381993170/media/recent/?access_token=${INSTAGRAM_ACCESS_TOKEN}&count=${count}`;

  axios.get(url).then(response => {
    console.log("got feed");
    console.log(response.data);

    const images = response.data.data.map(feedItem => {
      return feedItem.images.low_resolution.url;
    });

    res.status(200);
    res.json({ response: images });
  })
  .catch(error => {
    console.log("error getting feed");
    console.log(error);

    res.status(500);
    res.json({ error });
    return;
  });
};
