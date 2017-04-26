'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes/');

const app = express();


app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1/', routes);


//catch 404
app.use( function(req, res, next) {
  let err = new Error('Not Found, Yikes!');
  err.status = 404;
  next(err);
})

if(app.get('env') === 'development' || app.get('env') === 'test') {
  app.use( ( err, req, res, next) => {
    console.log("error", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error:err
    })
  })
}

app.use( (err, req,res, next) => {
  res.status(err.status || 500);
  res.json ({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
