var express = require('express');
var router = express.Router();
var mysql=require('mysql');


var client=mysql.createConnection({
	host: 'localhost',
	user:  'root',
	password : '1234'
});


router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post('/',function(req,res,next){
  var username=req.body.username;
  var passwd=req.body.password;
  var cnfpassword=req.body.cnfpassword;
  console.log(username);
  console.log(passwd);
  console.log(cnfpassword);
  if(passwd===cnfpassword){
      client.query('use amir');
      var post  = {username: username ,password:passwd };
      client.query('INSERT INTO table1 SET ?', post, function(err, results) {
                });
     res.redirect('/');
   }
});


module.exports=router;
