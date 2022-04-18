const express = require('express');
const router = express.Router();
const reminderCtrl = require('../controllers/remindersController');

// Get all reminders
router.get('/', reminderCtrl.getMultiple);

// Get one reminder based on their ID
router.get('/:id', reminderCtrl.get);

// Create a new reminder 
router.post('/', reminderCtrl.create);

// Update an existing reminder
router.patch('/:id', reminderCtrl.update);

// Delete a specific reminder
router.delete('/:id', reminderCtrl.remove);

module.exports = router;