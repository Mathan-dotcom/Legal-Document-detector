// database/Queries/documentQueries.js
const Document = require("../models/Document");

// Upload a document
async function uploadDocument(userId, title, filePath) {
  const doc = new Document({ user: userId, title, filePath });
  return await doc.save();
}

// Fetch all documents by a user
async function getDocumentsByUser(userId) {
  return await Document.find({ user: userId });
}

// Fetch single document by ID
async function getDocumentById(docId) {
  return await Document.findById(docId);
}

// Delete document
async function deleteDocument(docId) {
  return await Document.findByIdAndDelete(docId);
}

module.exports = {
  uploadDocument,
  getDocumentsByUser,
  getDocumentById,
  deleteDocument,
};
