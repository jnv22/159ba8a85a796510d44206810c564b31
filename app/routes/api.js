const express = require('express');
const querystring = require('querystring');

const app = express.Router();

const fetchTweets = '../service/tweets'

app.get('/health', (req, res) => {
  res.status(200).send('Health: ok');
});

app.post('/connect', (req, res) => {
  res.json(req.user)
})

app.get('/tweets', (req, res) => {
  console.log(req.user.id)

})

module.exports = app;
