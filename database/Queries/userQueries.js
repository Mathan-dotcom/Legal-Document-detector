// database/Queries/userQueries.js
const User = require("../models/User");

// Create new user
async function createUser(username, password) {
  const user = new User({ username, password });
  return await user.save();
}

// Find user by username
async function findUserByUsername(username) {
  return await User.findOne({ username });
}

// Validate login (username + password check)
async function validateUser(username, password) {
  const user = await User.findOne({ username });
  if (!user) return null;

  const bcrypt = require("bcryptjs");
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
}

module.exports = { createUser, findUserByUsername, validateUser };
