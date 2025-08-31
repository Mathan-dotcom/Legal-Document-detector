// Backend/utils/googleClient.js
import { VertexAI } from "@google-cloud/vertexai";

const vertexAI = new VertexAI({
  project: "your-gcp-project-id",   // <-- Replace with your Google Cloud Project ID
  location: "us-central1"
});

export const geminiModel = vertexAI.getGenerativeModel({
  model: "gemini-1.5-pro"
});
