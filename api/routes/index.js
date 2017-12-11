var express = require('express');
var router = express.Router();

var contact = require('../controllers/contact.controller.js');

router.post("/contact", contact.sendMessage);
router.get("/feed", contact.instagramFeed);

module.exports = router;
