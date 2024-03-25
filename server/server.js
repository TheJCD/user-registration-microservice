//server.js

// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToMongoDB } = require('./mongodb');
const authRoutes = require('./routes/register');

// Create Express application
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

app.use(cors()); // Enable CORS for all routes

// Mount auth routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

async function startServer() {
  try {
    // Connect to MongoDB
    await connectToMongoDB();

    // Start Express server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
