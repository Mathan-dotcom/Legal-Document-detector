const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  score: { type: Number, required: true },
  color: { type: String, required: true }
});

module.exports = mongoose.model("Document", DocumentSchema);
