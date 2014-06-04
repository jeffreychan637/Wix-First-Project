'use strict';

var express = require('express');
var http = require('http');
var parser = require('body-parser');
var lowercase = require('./lowercase');

var app = express();

app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

app.use(express.static(__dirname + '/public'));    // '/../WixFrontend/dist')); //+ '/public'));
app.use(parser());

app.post('/post', function(req, res) {
    res.send(200, lowercase(req.body.firstname + req.body.lastname)); //JSON.stringify(req.body));
});

app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

module.exports = app;