const path = require('path');
const express = require("express");
const reminderRouter = require('./src/routes/reminderRoutes');

// Set express application
const app = express();
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../eminders/build')));

// Set up routes
app.use('/api/v1/reminder', reminderRouter);

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server (Megan)!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, '../eminders/build', 'index.html'));
});

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