/**
 * Created by Sean on 10/4/2016.
 */
//dependencies:
var express     = require('express');
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var helmet = require('helmet');

//connect to mongooseDB:
var options = { server:{poolSize: 10}};
mongoose.connect('mongodb://playground32:Project385473@ds049436.mlab.com:49436/fralik', options);
//mongoose.connect('mongodb://localhost/hopin', options);

//express:
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

//Routes:
var routes  = require('./routes/index');
app.use('/', routes); // added index to routes from "/" to "index"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: "Error" });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
      res.json({ message: "Prod Error" });

});


module.exports = app;
