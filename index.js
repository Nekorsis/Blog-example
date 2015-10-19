var app = require('express')();
var express = require('express');
var http = require('http').Server(app);


app.get('/', function(req, res){
  res.render('chat');
});
app.get('/article', function (req, res){
	res.render('article');
});
app.get('/test', function (req, res){
	res.render('test');
});
app.use(express.static('static'));
app.set('view engine', 'jade');


http.listen(3000, function(){
  console.log('listening on *:3000');
});

