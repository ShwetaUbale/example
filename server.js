// server.js
const express = require('express');

// Initialize the Express application instance
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Root route handler for GET requests to "/"
app.get('/', (req, res) => {
  res.send('<h1>Hello from feature-update!</h1>');
});

// Start listening for incoming connections
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});