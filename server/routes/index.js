const bodyparser = require('body-parser');
const session = require('express-session');

const express = require('express');

const app = express();
const passport = require('../service/passport');

const auth = require('./auth');
const api = require('./api');

app.use(bodyparser.json());

// TODO: Needs a memory cache to persist data. Currently persisting data to MemoryStore
//       DEVELOPMENT ONLY
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${process.env.BASE_URL}:${process.env.CLIENT_PORT}`);
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', api);
app.use('/', auth);
app.use('*', (req, res) => res.render('index'));

module.exports = app;
