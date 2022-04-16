const express = require('express');

const reminder = require('./reminderRoutes');
const auth = require('./authRoutes');

const router = express.Router();

router.use("/reminder", reminder);
router.use("/", auth);

module.exports = router;