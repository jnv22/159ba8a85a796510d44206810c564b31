const passport = require('passport');
const TwitterStrategy = require('passport-twitter');

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((obj, done) => done(null, obj))

passport.use(new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_ID,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK_URL,
  },
  ((accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }),
));

module.exports = passport;
