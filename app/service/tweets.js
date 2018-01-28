const fetch = require('node-fetch');

fetchTweets = async url => {
  try {
    const response = await fetch(url);
    const toJSON = response.toJSON();
  }
}



module.exports = fetchTweets;