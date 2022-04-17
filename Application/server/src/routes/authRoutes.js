const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');

// Login Google User
router.get('/google', authCtrl.login);

// Callback
router.get('/google/callback', authCtrl.callback)



module.exports = router;