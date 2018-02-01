const passport = require('passport');
const TwitterStrategy = require('passport-twitter');

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `${process.env.BASE_URL}:${process.env.PORT}/api/v1/oauth_request/callback`,
  },
  ((accessToken, refreshToken, profile, cb) => cb(null, profile)),
));

module.exports = passport;
