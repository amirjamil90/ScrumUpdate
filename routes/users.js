var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var session=require('express-session');

var client=mysql.createConnection({
	host: 'localhost',
	user:  'root',
	password : '1234'
});


/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.post('/',function(req,res,next){
  
  client.query('use amir');

  //console.log(req.body.username);
  var username=req.body.username;
  var password=req.body.password;

session.username=username;
console.log(session.username);
var data="WRONG PASSWORD";
  client.query('select username,password from table1 where username = "'+username+'"',function(err,results,fields,row){
   console.log(fields);
     var length=results.length;
   if(length!=0){
     var t=results[0];
     if (password === t.password)
     {
        res.render('profile');
      }
      else{
        res.redirect('/');
      }
    }
    else
    {
      res.redirect('/');
    }
    });
//  console.log(user.username);

});









module.exports = router;
