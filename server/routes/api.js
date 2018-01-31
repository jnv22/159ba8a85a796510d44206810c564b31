const express = require('express');

const app = express.Router();

const fetchTweets = require('../service/tweets');

app.get('/health', (req, res) => {
  res.status(200).send('Health: ok');
});

app.get('/tweets', async (req, res) => {
  try {
    const tweets = await fetchTweets({ userId: req.user.id, count: 100 });
    res.json(tweets);
  } catch (e) {
    console.log(req.user);
    if (!req.user) res.status(401).send();
    else res.status(500).send();
  }
});

module.exports = app;
