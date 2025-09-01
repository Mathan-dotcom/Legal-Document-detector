const Document = require("../models/Document");
const { calculateScore } = require("../utils/scoreHelper");

exports.uploadDoc = async (req, res) => {
  try {
    const { content } = req.body;

    const scoreData = calculateScore(content);
    const newDoc = new Document({ content, score: scoreData.score, color: scoreData.color });
    await newDoc.save();

    res.json({ message: "Document uploaded", docId: newDoc._id, ...scoreData });
  } catch (error) {
    res.status(500).json({ message: "Error uploading document" });
  }
};

exports.getScore = async (req, res) => {
  try {
    const { docId } = req.params;
    const doc = await Document.findById(docId);
    if (!doc) return res.status(404).json({ message: "Document not found" });

    res.json({ score: doc.score, color: doc.color });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving score" });
  }
};

const Document = require("../models/Document");

const Document = require("../models/Document");
const { calculateScore } = require("../utils/scoreHelper");

exports.uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Calculate score
    const score = calculateScore(req.file);

    const newDoc = new Document({
      user: req.user.id,
      filePath: req.file.path,
      fileName: req.file.originalname,
      score, // store score
    });

    await newDoc.save();

    res.status(201).json({
      message: "File uploaded successfully",
      score,
      doc: newDoc,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

