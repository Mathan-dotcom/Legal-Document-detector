import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("Legal Docs Backend API is running 🚀");
});

// Example placeholder login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@example.com" && password === "123456") {
    return res.json({ success: true, message: "Login successful" });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
