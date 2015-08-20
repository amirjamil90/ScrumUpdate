var express = require('express');
var router = express.Router();
var session=require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {

	var username=session.username;
	var data={};
	data.username=username;
	if(data.username!=="undefined"){
		res.render('profile',data)
	}

  res.render('index',data);
});
module.exports = router;
