import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully (Atlas)");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    throw error; // Let server.js handle the error
  }
};

export default connectDB;
