import express from "express";

const router = express.Router();

// Example: Run AI check (dummy route for now)
router.post("/analyze", (req, res) => {
  const { text } = req.body;
  res.json({ msg: "AI analysis complete", input: text });
});

export default router;
