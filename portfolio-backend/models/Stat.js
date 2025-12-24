import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  page: { type: String, required: true }, // "home", "projects", "project:slug"
  count: { type: Number, default: 1 },
});

export default mongoose.model("Stat", statSchema);
