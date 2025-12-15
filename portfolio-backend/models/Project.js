const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  tech: { type: [String], default: [] }, // e.g. ["React", "Tailwind"]
  image: { type: String, default: "" }, // optional image URL
  url: { type: String, default: "" }, // live link
  repo: { type: String, default: "" }, // repo link
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

projectSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Project", projectSchema);
