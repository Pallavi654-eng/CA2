const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
})); // allow frontend connection
app.use(express.json());      // parse JSON body

/* ---------- ROOT ROUTE (FIX FOR Cannot GET /) ---------- */
app.get("/", (req, res) => {
  res.send("WanderAI Backend is running 🚀");
});

/* ---------- API ROUTE ---------- */
app.get("/api", (req, res) => {
  res.json({ message: "WanderAI API running 🚀" });
});

/* ---------- AUTH ROUTES ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/chat", chatRoutes);

/* ---------- SERVER START ---------- */
const PORT = process.env.PORT || 5005;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
