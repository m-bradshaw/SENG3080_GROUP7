const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');

// Login existing User
router.get('/login', userCtrl.login);

// Create / Register a new User
router.post("/register", userCtrl.register);

module.exports = router;