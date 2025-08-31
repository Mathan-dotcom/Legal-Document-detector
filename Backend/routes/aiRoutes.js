import express from "express";
import { simplifyDoc, queryDoc, detectSuspicious } from "../controllers/aicontroller.js";

const router = express.Router();

// Route to simplify legal text
router.post("/simplify", simplifyDoc);

// Route to ask AI a question
router.post("/ask", queryDoc);

// Route to detect suspicious clauses
router.post("/detect", detectSuspicious);

export default router;
