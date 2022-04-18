const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');
const passport = require('passport');

// Login Google User
router.get('/google', passport.authenticate('google'));

// Callback
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('http://localhost:3000');
});

// Retrieve data from the logged in user
router.get('/getUser', (req, res) => {
    res.send(req.user);
});

module.exports = router;