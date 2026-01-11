// portfolio-card/portfolio-backend/config/db.js
import mongoose from "mongoose";
// Database connection function
const connectDB = async (uri) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    // Handle connection errors
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
