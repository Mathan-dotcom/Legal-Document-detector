import express from "express";

const router = express.Router();

// Simplify document (placeholder)
router.post("/simplify", (req, res) => {
  const { text = "" } = req.body || {};
  const simplified = text
    .replace(/\s+/g, " ")
    .replace(/(whereas|hereinafter|thereof|heretofore)/gi, "")
    .trim()
    .slice(0, 1200);
  res.json({ simplified });
});

// Query document (placeholder)
router.post("/query", (req, res) => {
  const { text = "", query = "" } = req.body || {};
  const answer = `Demo answer for "${query}" based on ${Math.min(
    text.length,
    120
  )} characters of provided text.`;
  res.json({ answer });
});

// Risk detection (placeholder scoring + color)
router.post("/detect", (req, res) => {
  const { text = "" } = req.body || {};
  const t = text.toLowerCase();

  const flags = [];
  const patterns = [
    "penalty",
    "termination",
    "arbitration",
    "liability",
    "indemnify",
    "non-compete",
    "exclusive",
    "scam",
    "fraud",
  ];
  patterns.forEach((p) => {
    if (t.includes(p)) flags.push(p);
  });

  const score = Math.max(0, 100 - flags.length * 12);
  const risk = score >= 80 ? "green" : score >= 50 ? "yellow" : "red";

  res.json({ suspicious: flags.length > 0, riskFlags: flags, score, risk });
});

export default router;
