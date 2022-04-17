const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser((user, done) => {
    return done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT,
  },
  function(accessToken, refreshToken, profile, cb) {
    // INSERT INTO DATABASE
    console.log("Profile:" + profile)
    cb(null, profile);
  }
));