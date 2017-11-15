const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/auth');

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));


const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("server is listening on port " + port);
