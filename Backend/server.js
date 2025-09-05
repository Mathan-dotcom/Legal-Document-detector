import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import docRoutes from "./routes/docRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);
app.use(express.json());

// Connect DB first, then start server
connectDB()
  .then(() => {
    console.log("✅ DB connected");

    // Health
    app.get("/health", (req, res) => res.json({ ok: true }));

    // Mount routes
    app.use("/api/auth", authRoutes);
    app.use("/api/docs", docRoutes);
    app.use("/api/ai", aiRoutes);

    app.listen(PORT, () =>
      console.log(`🚀 Backend running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Failed to connect DB", err);
    process.exit(1);
  });
