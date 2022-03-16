// REFERENCE: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

// server/index.js
const path = require('path');
const express = require("express");

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../eminders/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Handle GET requests to /api/stub/login route
app.get("/api/stub/login", (req, res) => {
  var list = ["megan", "gabe", "duane"];
  res.json({ message: list });
  console.log('Sent name list for get request at /api/stub/login')
});

// Handle GET requests to /api/stub/main route
app.get("/api/stub/main", (req, res) => {
  var list = ["monday", "tuesday", "wednesday"];
  res.json({ message: list });
  console.log('Sent day list for get request at /api/stub/main')
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../eminders/build', 'index.html'));
});

const PORT = process.env.PORT || 5050;
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});