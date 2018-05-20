require('dotenv').config();
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const normalizePort = require('normalize-port');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
var port = normalizePort(process.env.PORT || 8080);
app.listen(port);
console.log(`Server started on port ${port}`);
