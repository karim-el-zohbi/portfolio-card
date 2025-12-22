import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true, // "tictactoe", "weather-app"
    },
    title: String,
    shortDesc: String,
    longDesc: String,
    tech: [String],
    coverRoute: String, // "/tictactoe"
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
