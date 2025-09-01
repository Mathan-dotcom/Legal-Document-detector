const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send("🚀 Legal Document Detector Database API is running...");
});

// Register User
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "✅ User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
