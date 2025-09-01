// Backend/controllers/aiController.js
import { geminiModel } from "../utils/googleClient.js";

// Simplify Document
export const simplifyDoc = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `Rewrite this legal text in plain English:\n\n${text}`;
    const response = await geminiModel.generateContent(prompt);
    res.json({ simplified: response.candidates[0].content.parts[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Q&A on Document
export const queryDoc = async (req, res) => {
  try {
    const { text, question } = req.body;
    const prompt = `Document:\n${text}\n\nQuestion: ${question}\nAnswer in simple terms.`;
    const response = await geminiModel.generateContent(prompt);
    res.json({ answer: response.candidates[0].content.parts[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Suspicious Clause Detection
export const detectSuspicious = async (req, res) => {
  try {
    const { text } = req.body;
    const prompt = `Scan this legal document and flag any suspicious or unfair clauses. 
    Output in JSON format with clause number and reason. Text:\n${text}`;
    const response = await geminiModel.generateContent(prompt);
    res.json({ suspicious: response.candidates[0].content.parts[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
