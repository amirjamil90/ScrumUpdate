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
	console.log('adasdasdasdasdasdasdsaddsaaddsadasdasdasdasdasd');
  res.render('UpdateStatus');
});

router.post('/',function(req,res,next){

 var username=session.username;
 console.log(username);
 var update_details=req.body.txtb;
 console.log(update_details);
 var date=new Date();
 client.query('Update table1 set details ="'+update_details+'",time="'+date+'" where username = "'+username+'"',function(err,results,fields){
     console.log(results);
     console.log(err);
     if(err!==null){
     	res.redirect('/');
     }
     else
     {
     	res.render('success');
     }

});
});


module.exports=router;
























module.exports = router;