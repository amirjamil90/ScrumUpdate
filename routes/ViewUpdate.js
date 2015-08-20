var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var client=mysql.createConnection({
	host: 'localhost',
	user:  'root',
	password : '1234'
});

var session=require('express-session');

router.post('/', function(req, res, next) {

  client.query('use amir');
console.log('eqweqweqe');
var data={};
var username=session.username;
if(username==='amir'){
	client.query('select username,details,time from table1',function(err,results){
		console.log(results);
	   data.result = results;
	   data.username=username;
	   console.log(data.result);
       res.render('LeaderView',data);	
	});
}
else{
 client.query('select username,details,time from table1 where username = "'+username+'"',function(err,results,fields,row){
   data.username=username;
   data.result = results;
   	   
   res.render('view',data);
});
}
});


module.exports=router;