var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var session=require('express-session');

var client=mysql.createConnection({
	host: 'localhost',
	user:  'root',
	password : '1234'
});

	client.query('use amir');






router.get('/', function(req, res, next) {
	session.username="undefined";
	console.log('adasdasdasdasdasdasdsaddsaaddsadasdasdasdasdasd');
  res.render('index');
});





module.exports=router;
