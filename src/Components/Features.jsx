import React, { useState } from "react";
import { 
  FaWallet, 
  FaMapMarkerAlt, 
  FaStar, 
  FaRobot, 
  FaMap, 
  FaLightbulb 
} from "react-icons/fa";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: FaWallet,
      title: "Budget Planner",
      description: "Helps users plan their travel budget efficiently. Track expenses, set limits, and get smart suggestions for cost-saving tips.",
      details: "Set daily budgets, track spending in real-time, receive alerts when approaching limits, and get AI-powered suggestions to maximize your travel value.",
      gradient: "from-purple-600/20 via-purple-700/30 to-purple-800/20",
      iconColor: "text-purple-400"
    },
    {
      id: 2,
      icon: FaMapMarkerAlt,
      title: "Admin: Add Tourist Locations",
      description: "Admins can easily add, edit, or remove tourist locations with details, images, and tags for better user experience.",
      details: "Comprehensive admin dashboard for managing destinations, uploading high-quality images, adding detailed descriptions, and categorizing locations for easy discovery.",
      gradient: "from-indigo-600/20 via-indigo-700/30 to-indigo-800/20",
      iconColor: "text-indigo-400"
    },
    {
      id: 3,
      icon: FaStar,
      title: "Review & Rating System",
      description: "Users can rate and review tourist locations. Helps others make informed choices and builds community trust.",
      details: "Share your experiences with detailed reviews, photos, and ratings. Help fellow travelers discover hidden gems and avoid disappointing experiences.",
      gradient: "from-pink-600/20 via-pink-700/30 to-pink-800/20",
      iconColor: "text-pink-400"
    },
    {
      id: 4,
      icon: FaRobot,
      title: "AI Travel Assistance",
      description: "Chatbot answers queries, gives recommendations, suggests itineraries, and provides real-time travel tips.",
      details: "24/7 AI-powered assistant that understands natural language, provides instant answers, creates custom itineraries, and offers personalized travel advice based on your preferences.",
      gradient: "from-green-600/20 via-green-700/30 to-green-800/20",
      iconColor: "text-green-400"
    },
    {
      id: 5,
      icon: FaMap,
      title: "Interactive Maps",
      description: "Integrated maps show tourist spots, nearby amenities, and attractions with easy navigation and filters.",
      details: "Explore destinations with interactive maps featuring real-time location tracking, custom markers, route planning, and filters for restaurants, hotels, and attractions.",
      gradient: "from-yellow-600/20 via-yellow-700/30 to-yellow-800/20",
      iconColor: "text-yellow-400"
    },
    {
      id: 6,
      icon: FaLightbulb,
      title: "Personalized Suggestions",
      description: "Users get recommendations based on preferences, past activity, and ratings, making travel planning easier and more enjoyable.",
      details: "Machine learning algorithms analyze your travel history, preferences, and ratings to suggest destinations, activities, and experiences tailored specifically to you.",
      gradient: "from-red-600/20 via-red-700/30 to-red-800/20",
      iconColor: "text-red-400"
    }
  ];

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="relative py-20" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Key Features of Our App
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.id;
            const isExpanded = expandedCard === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`group relative glass-panel rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  isHovered ? 'scale-[1.02]' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(feature.id)}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient}`}>
                    <Icon className={`${feature.iconColor} text-xl`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-slate-300 text-sm leading-relaxed transition-all duration-300 ${
                  isExpanded ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-96 opacity-100'
                }`}>
                  {feature.description}
                </p>

                {/* Expanded Details */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.details}
                  </p>
                </div>

                {/* Subtle expand indicator */}
                <div className={`mt-4 flex items-center text-xs ${feature.iconColor} transition-opacity duration-300 ${
                  isHovered ? 'opacity-60' : 'opacity-0'
                }`}>
                  <span className="text-xs">{isExpanded ? 'Click to collapse' : 'Click for details'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
