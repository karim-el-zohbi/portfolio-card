import mongoose from "mongoose";
// Define the Message schema
const messageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },

  { timestamps: true }
  // Automatically manage createdAt and updatedAt fields
);
// Create and export the Message model
export default mongoose.model("Message", messageSchema);
