import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/"; // paste MongoDB Compass connection string here

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create model
const User = mongoose.model("User", userSchema);

// Connect and insert
async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB ✅");

    const user = new User({ name: "John Doe", email: "john@example.com" });
    await user.save();

    console.log("User inserted ✅");
    await mongoose.disconnect();
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
