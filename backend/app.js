const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload')
const fs = require('fs')
//const logger = require('morgan');
const cors = require('cors');
const debug = require('debug')('picommerce:app');
const app = express();
require('./database')
//app.use(logger('dev'));
app.use(cors());
app.use(fileUpload())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(cookieParser());
if (!fs.existsSync(path.join(__dirname, '/public'))) fs.mkdirSync(path.join(__dirname, '/public'))
if (!fs.existsSync(path.join(__dirname, '/public/images'))) fs.mkdirSync(path.join(__dirname, '/public/images'))
if (!fs.existsSync(path.join(__dirname, '/public/images/products'))) fs.mkdirSync(path.join(__dirname, '/public/images/products'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes'));

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json(err.message);
});//*/

module.exports = app;
