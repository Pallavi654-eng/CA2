const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

/* ================= ADD FEEDBACK ================= */
router.post("/", async (req, res) => {
  try {
    const { name, message, rating } = req.body;

    if (!name || !message || !rating) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const feedback = await Feedback.create({
      name,
      message,
      rating,
    });

    res.status(201).json({
      success: true,
      message: "Feedback stored successfully",
      feedback,
    });
  } catch (error) {
    console.error("❌ Feedback error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* ================= GET ALL FEEDBACK ================= */
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
