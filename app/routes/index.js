const bodyparser = require('body-parser');

const express = require('express');

const app = express();

const auth = require('./auth');
const api = require('./api');

app.use(bodyparser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${process.env.BASE_URL}:${process.env.CLIENT_PORT}`);
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', api);
app.use('/', auth);

module.exports = app;
