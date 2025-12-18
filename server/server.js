const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Vite default port
  credentials: true,
}));
app.use(express.json());

// Root API route
app.get("/api", (req, res) => {
  res.json({
    message: "WanderAI API",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      signup: "POST /api/auth/signup",
      login: "POST /api/auth/login",
    },
  });
});

// Routes
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

const PORT = process.env.PORT || 5000;

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API available at http://localhost:${PORT}/api`);
  });
});
