// app/server.js

const express = require('express');
const app = express();

// Use PORT from env or default to 3000
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from DevOps Sandbox (Node.js)!');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
