require("dotenv").config()
const express = require("express");
const mongoose = require('mongoose');
const reminderRouter = require('./src/routes/reminderRoutes');

// Set express application
const app = express();
const PORT = process.env.PORT || 3001;

//Set up default mongoose connection
mongoose.connect(process.env.DB_SOURCE, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('open', () => console.log('Connected to MongoDB'));

// Set up routes
app.use('/api/v1/reminder', reminderRouter);

/* Set up middlewares */
// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});