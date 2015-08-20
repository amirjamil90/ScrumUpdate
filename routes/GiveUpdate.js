var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var session=require('express-session');

var client=mysql.createConnection({
	host: 'localhost',
	user:  'root',
	password : '1234'
});




router.get('/', function(req, res, next) {
  res.render('GiveUpdate')
});




router.post('/',function(req,res,next){

	client.query('use amir');

var username=session.username;
var post=req.body.txtar1;
var status=req.body.txtar2;
console.log(post);
console.log(username);
client.query('Select details from table1 where username = "'+username+'"',function(err,results){
	console.log(results);
	var data={};
	data.details=results[0].details;
	data.username=username;
    data.date=new Date();
	if(data.details === null){
        console.log('hiiii there');
		client.query('Update table1 set details ="'+post+'",time="'+data.date+'",status="'+status+'"where username = "'+username+'"', post, function(err, result) {
                console.log(err);
                console.log(result);
                
                });
		res.render('success');

	}
	else
	{
	  	res.render('Status',data);
	}


});
});



module.exports = router;
