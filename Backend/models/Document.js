import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    filename: {
      type: String,
      required: [true, "Filename is required"],
    },
    fileUrl: {
      type: String, // e.g., AWS S3, local path, or base64
      required: [true, "File URL is required"],
    },
    fileType: {
      type: String,
      enum: ["pdf", "docx", "txt", "image"],
      required: true,
    },
    status: {
      type: String,
      enum: ["uploaded", "processing", "analyzed"],
      default: "uploaded",
    },
    aiAnalysis: {
      summary: { type: String },
      keywords: [{ type: String }],
      confidenceScore: { type: Number },
    },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
