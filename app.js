var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');
var routes = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');
var ViewUpdate=require('./routes/ViewUpdate');
var GiveUpdate=require('./routes/GiveUpdate');
var UpdateStatus=require('./routes/UpdateStatus');
var logout=require('./routes/logout');
var session=require('express-session');
var app = express();
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port=process.env.OPENSHIFT_NODEJS_PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.OPENSHIFT_NODEJS_PORT || 3000);
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use('/', routes);
app.use('/users', users);
app.use('/signup',signup);
app.use('/ViewUpdate',ViewUpdate);
app.use('/GiveUpdate',GiveUpdate);
app.use('/UpdateStatus',UpdateStatus);
app.use('/logout',logout);


http.createServer(app).listen(port,address, function(){
  console.log('Express server listening on port ' + port);
});

module.exports = app;
