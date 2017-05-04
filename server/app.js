var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var glob = require("glob");
var app = express();

// view engine setup
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');

var multer = require('multer');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dota');

app.use(bodyParser.urlencoded({extended:true}));
app.use(multer());
app.use(cookieParser());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
glob.sync("./server/controllers/**/*.js").forEach(function(file){
  var instance = require(file.replace('/server', ''));
  // 获取所有 Controller 中的方法
  var methods = Object.keys(instance);
  methods.forEach(function(method){
    var urlPath = file.replace('.js', '').replace('./server/controllers', '');
    var handler = instance[method];
    var type = "get";
    urlPath += "/" + method;
  // 判断 Controller 中输出的类型
  switch (typeof handler) {
    case 'object':
      urlPath += handler.param?("/"+handler.param):"";
      type = handler.type;
      handler = handler.handler;
      break;
    case 'function':
      // Nothing to do with the pure handler.
      break;
    default:
      return;
  }
  console.log(urlPath);
    app[type.toLowerCase()](urlPath, handler);
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  // next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
