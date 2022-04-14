const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");

require("dotenv").config()
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
// middleware = require
const api = require('./src/routes');

// Set express application
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Set up default mongoose connection
mongoose.connect(process.env.DB_SOURCE, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('open', () => console.log('Connected to MongoDB'));

// Set up routes
app.use('/api/v1', api);

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