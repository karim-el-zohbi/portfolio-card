import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import projectsRoutes from "./routes/projects.js";
import messagesRoutes from "./routes/messages.js";
import statsRoutes from "./routes/stats.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// connect database
connectDB(process.env.MONGO_URI);

// security + parsing
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
});
app.use(limiter);

// routes
app.use("/api/projects", projectsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/stats", statsRoutes);

// health check
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
