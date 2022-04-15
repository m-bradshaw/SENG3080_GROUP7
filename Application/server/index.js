require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");

const mongoose = require('mongoose');
const middleware = require('./src/middlewares')
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

app.use('/api/v1', api);
app.use(middleware.notFound);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});