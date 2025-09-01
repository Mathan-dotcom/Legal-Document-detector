import express from "express";

const router = express.Router();

// Example: Upload document (dummy route for now)
router.post("/upload", (req, res) => {
  res.json({ msg: "Document uploaded successfully" });
});

// Example: Get documents
router.get("/", (req, res) => {
  res.json({ docs: ["Doc1", "Doc2", "Doc3"] });
});

export default router;
