const Twitter = require('twitter');

/**
 * fetchTweets
 * Calls and returns promise to fetch user tweets
 * @param  {obj} qsParams
 */
const fetchTweets = async (qsParams = '') => {
  try {
    const client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_TOKEN,
      access_token_secret: process.env.TWITTER_SECRET,
    });

    const response = await client.get('statuses/user_timeline', { ...qsParams });
    return response;
  } catch (e) {
    return e;
  }
};


module.exports = fetchTweets;
