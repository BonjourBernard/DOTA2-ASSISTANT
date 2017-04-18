var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var glob = require("glob");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

glob.sync("./controllers/**/*.js").forEach(function(file){
  var instance = require(file);
  var urlPath = file.replace('.js', '').replace('./controllers', '');
  // 获取所有 Controller 中的方法
  var methods = Object.keys(instance);
  methods.forEach(function(method){
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
    app[type.toLowerCase()](urlPath, handler);
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
