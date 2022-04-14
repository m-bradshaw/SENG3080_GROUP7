const express = require('express');

const reminder = require('./reminderRoutes');

const router = express.Router();

router.use("/reminder", reminder);

module.exports = router;