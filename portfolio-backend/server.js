require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

const messagesRoutes = require("./routes/messages");
const projectsRoutes = require("./routes/projects");
const statsRoutes = require("./routes/stats");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI);

// security + parsing
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// rate limiter for public endpoints
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
});
app.use(limiter);

// routes
app.use("/api/messages", messagesRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/stats", statsRoutes);

// health
app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
