require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const middleware = require('./src/middlewares')
const api = require('./src/routes');
require('./src/services/cronService');

// Set express application and middlewares
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({origin: "http://localhost:3000", credentials: true}));

// Passport settings
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./src/services/passportSetup");

// Setup routes and middleware handlers
app.use('/api/v1', api);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

// Setup default mongoose connection
mongoose.connect(process.env.DB_SOURCE, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('open', () => console.log('Connected to MongoDB'));


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
