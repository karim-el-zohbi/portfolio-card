import mongoose from "mongoose";
// Define the Project schema
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    fullDesc: { type: String }, // detailed page text
    tech: [{ type: String }], // React, JS, Tailwind...
    githubLink: { type: String }, // GitHub repository link
    featured: { type: Boolean, default: false },
  },
  // Automatically manage createdAt and updatedAt fields
  { timestamps: true }
);
// Create and export the Project model
export default mongoose.model("Project", projectSchema);
