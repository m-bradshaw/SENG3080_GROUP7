const passport = require('passport');

async function login(req, res, next) {
    try {
        passport.authenticate('google', { scope: ['profile'] })
    } catch (err) {
        next(err);
    }
}

async function callback(req, res, next) {
    try {
        passport.authenticate('google', {failureRedirect: '/login'})
        res.redirect('http://localhost:3000');
    } catch (err) {
        next(err);
    }
}

module.exports = {
  login,
  callback
};