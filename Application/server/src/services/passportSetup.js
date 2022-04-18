const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, doc) => {
    return done(null, doc);
  });
})

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_SECRET}`,
    callbackURL: `${process.env.GOOGLE_REDIRECT}`,
    scope: [ 'profile' ]
  },
  function(accessToken, refreshToken, profile, cb) {
    // Create or get user from the database
    User.findOne({googleID: profile.id}, async (err, doc) => {
    
      if(err) {
        return cb(err, null);
      }
      
      if(!doc) {
        
        // Create new user
        const user = new User({
          googleID: profile.id,
          username: profile.name.givenName
        })
        await user.save((err, newUser) => {
          if(!err) cb(null, newUser)
        });

      }
      cb(null, doc);
    })
  }
));