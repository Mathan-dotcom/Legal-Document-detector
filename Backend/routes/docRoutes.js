import express from "express";
import auth from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import Document from "../models/Document.js";

const router = express.Router();

// Upload a document
router.post("/upload", auth, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded" });
    const doc = await Document.create({
      user: req.user.id,
      filePath: req.file.path,
      fileName: req.file.originalname,
    });
    res.json({
      msg: "Uploaded",
      documentId: doc._id,
      fileName: doc.fileName,
    });
  } catch (e) {
    res.status(500).json({ msg: "Upload failed", error: e.message });
  }
});

// List my documents
router.get("/", auth, async (req, res) => {
  const docs = await Document.find({ user: req.user.id }).sort({
    uploadedAt: -1,
  });
  res.json(docs);
});

export default router;
