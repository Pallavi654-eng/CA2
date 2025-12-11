import React, { useState } from "react";
import BackgroundGlows from "./Components/BackgroundGlow";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import HeroVisual from "./Components/HeroVisual";
import Login from "./Components/Login";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Resources from "./Components/Resources";
import Footer from "./Components/Footer";
import TouristAdmin from "./Components/TouristAdmin";
import AxoraChat from "./Components/Chatbot/AxoraChat";

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'login', 'admin', 'chat'
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  const getZIndex = (cardId) => {
    if (activeCard === null) {
      const defaultOrder = {
        destinations: 10,
        analytics: 20,
        itineraries: 30,
        recommendations: 40,
      };
      return defaultOrder[cardId] || 10;
    }
    return activeCard === cardId ? 50 : 10;
  };

  const handleLogin = (formData) => {
    console.log("Login attempt:", formData);
    alert(`Welcome! Logging in with ${formData.email}`);
  };

  if (currentPage === "login") {
    return (
      <Login
        onLogin={handleLogin}
        onBackToHome={() => setCurrentPage("home")}
      />
    );
  }

  if (currentPage === "admin") {
    return <TouristAdmin onBack={() => setCurrentPage("home")} />;
  }

  if (currentPage === "chat") {
    return <AxoraChat onBackToHome={() => setCurrentPage("home")} />;
  }

  return (
    <div className="bg-starfield min-h-screen text-white font-['Space_Grotesk'] overflow-hidden">
      <BackgroundGlows />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar onLoginClick={() => setCurrentPage("login")} />
        <HeroSection onGetStarted={() => setCurrentPage("chat")} />
        <HeroVisual
          activeCard={activeCard}
          onCardClick={handleCardClick}
          getZIndex={getZIndex}
        />
        <Features 
          onAdminClick={() => setCurrentPage("admin")} 
          onChatbotClick={() => setCurrentPage("chat")}
        />
        <Pricing />
        <Resources />
        <Footer />
        </div>
    </div>
  );
}
