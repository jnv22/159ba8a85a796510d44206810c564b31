const express = require('express');

const app = express.Router();

const passport = require('../service/passport');

app.get('/oauth_request', passport.authenticate('twitter'));

app.get(
  '/oauth_request/callback', passport.authenticate('twitter', { failureRedirect: `${process.env.BASE_URL}${process.env.CLIENT_PORT}` }),
  (req, res) => {
    res.redirect(`${process.env.BASE_URL}:${process.env.CLIENT_PORT}`);
  },
);

app.post('/connect', (req, res) => {
  res.json(req.user);
});

app.post('/disconnect', (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.sendStatus(200);
});

module.exports = app;
