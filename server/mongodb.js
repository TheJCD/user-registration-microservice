//mongodb.js
const mongoose = require('mongoose');
const uri = "mongodb+srv://hi:dWsgli0AMdae2aHQ@cluster0.vnzplfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = { connectToMongoDB };