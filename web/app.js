const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const createError = require('http-errors');
const logger = require('morgan');
const mongoose = require('mongoose');



const port = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');

const indexRoutes = require('./src/routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

/*

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

*/


const db = mongoose
  .connect(
  'mongodb://db:27017/nodeSalesLeads', // change 'db' to 'localhost' when not running in container 
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(result => {
    app.listen(port, () => {
      debug(`listening on port ${chalk.green(port)}`);
    });
  })
  .catch(err => console.log(err));






