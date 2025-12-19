// create chat routes

const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");
const { protect } = require("../middleware/authMiddleware");

// Simple travel chatbot logic (you can enhance this later)
const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Greetings
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! I'm WanderAI, your travel assistant. How can I help you plan your next adventure?";
  }
  
  // Trip planning
  if (message.includes("plan") || message.includes("trip") || message.includes("itinerary")) {
    return "I'd love to help you plan a trip! Could you tell me:\n1. Your destination\n2. Duration of stay\n3. Budget range\n4. Travel preferences (adventure, relaxation, culture, etc.)";
  }
  
  // Hotels
  if (message.includes("hotel") || message.includes("accommodation") || message.includes("stay")) {
    return "For hotels, I recommend checking:\n- Booking.com for wide selection\n- Airbnb for unique stays\n- Hostelworld for budget options\n\nWhat's your destination and budget range?";
  }
  
  // Budget
  if (message.includes("budget") || message.includes("cheap") || message.includes("affordable")) {
    return "Here are budget travel tips:\n- Travel during off-peak seasons\n- Book flights 6-8 weeks in advance\n- Consider hostels or guesthouses\n- Use public transportation\n- Eat at local restaurants\n\nWhere are you planning to go?";
  }
  
  // Packing
  if (message.includes("pack") || message.includes("packing") || message.includes("what to bring")) {
    return "Essential packing list:\n✓ Passport and travel documents\n✓ Weather-appropriate clothing\n✓ Comfortable walking shoes\n✓ Universal adapter\n✓ First aid kit\n✓ Portable charger\n✓ Travel insurance\n\nWhat's your destination? I can give more specific advice!";
  }
  
  // Destinations
  if (message.includes("best") && (message.includes("place") || message.includes("destination"))) {
    return "Popular destinations by interest:\n🏖️ Beach: Maldives, Bali, Santorini\n🏔️ Adventure: Nepal, New Zealand, Patagonia\n🏛️ Culture: Japan, Italy, India\n🌴 Nature: Costa Rica, Iceland, Norway\n\nWhat type of experience are you looking for?";
  }
  
  // Food
  if (message.includes("food") || message.includes("restaurant") || message.includes("eat")) {
    return "Food recommendations depend on your destination! Generally:\n- Try local street food (safely)\n- Ask locals for recommendations\n- Research food markets\n- Be mindful of dietary restrictions\n\nWhere are you traveling? I can suggest specific dishes!";
  }
  
  // Default response
  return "That's interesting! I'm here to help with:\n- Trip planning and itineraries\n- Hotel and accommodation suggestions\n- Budget travel tips\n- Packing lists\n- Destination recommendations\n- Travel advice\n\nCould you tell me more about what you need help with?";
};

// Send a message and get bot response
router.post("/message", protect, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user._id;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Get or create chat for user
    let chat = await Chat.findOne({ user: userId });
    
    if (!chat) {
      chat = new Chat({
        user: userId,
        messages: [],
      });
    }

    // Add user message
    chat.messages.push({
      role: "user",
      text: message.trim(),
    });

    // Get bot response
    const botResponse = getBotResponse(message);

    // Add bot response
    chat.messages.push({
      role: "bot",
      text: botResponse,
    });

    await chat.save();

    res.json({
      success: true,
      botResponse,
      chatHistory: chat.messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get chat history
router.get("/history", protect, async (req, res) => {
  try {
    const userId = req.user._id;
    
    const chat = await Chat.findOne({ user: userId });
    
    if (!chat || !chat.messages.length) {
      return res.json({
        success: true,
        messages: [
          { role: "bot", text: "Hi, how can I help you today?", timestamp: new Date() }
        ],
      });
    }

    res.json({
      success: true,
      messages: chat.messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;