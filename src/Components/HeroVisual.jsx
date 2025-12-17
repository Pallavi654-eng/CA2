import React from "react";
import DestinationsCard from "./Cards/DestinationsCard";
import AnalyticsCard from "./Cards/AnalyticsCard";
import ItinerariesCard from "./Cards/ItinerariesCard";
import RecommendationsCard from "./Cards/RecommendationsCard";

export default function HeroVisual({ activeCard, onCardClick, getZIndex }) {
  return (
    <section className="relative mx-auto mt-16 flex w-full max-w-6xl flex-1 items-center justify-center px-6 pb-24">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" style={{ animation: "float-1 6s ease-in-out infinite" }} />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-violet-500/10 rounded-full blur-[60px]" style={{ animation: "float-2 8s ease-in-out infinite" }} />
      </div>

      {/* Horizontal linking lines */}
      <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <span className="block h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <span className="block h-px w-1/2 mx-auto mt-8 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      {/* Orb container */}
      <div className="relative">
        {/* Outer glow rings */}
        <div className="absolute inset-0 -m-16">
          <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-ping" style={{ animationDuration: "3s" }} />
        </div>
        
        {/* Main orb */}
        <div className="orb-core relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
          {/* Spinning rings */}
          <div className="spin-ring absolute inset-4 rounded-full border border-cyan-400/20" />
          <div className="spin-ring absolute inset-10 rounded-full border border-blue-400/15" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
          <div className="spin-ring absolute inset-16 rounded-full border border-violet-400/10" style={{ animationDuration: "30s" }} />
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-sky-400/30 to-transparent blur-[60px] opacity-50" />
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full blur-sm" style={{ animation: "float-1 4s ease-in-out infinite" }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400/50 rounded-full blur-sm" style={{ animation: "float-2 5s ease-in-out infinite" }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-violet-400/40 rounded-full blur-sm" style={{ animation: "float-3 6s ease-in-out infinite" }} />
          
          {/* Center highlight */}
          <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl" />
        </div>
      </div>

      {/* Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full">
          <DestinationsCard
            isActive={activeCard === "destinations"}
            onClick={() => onCardClick("destinations")}
            zIndex={getZIndex("destinations")}
          />
          <AnalyticsCard
            isActive={activeCard === "analytics"}
            onClick={() => onCardClick("analytics")}
            zIndex={getZIndex("analytics")}
          />
          <ItinerariesCard
            isActive={activeCard === "itineraries"}
            onClick={() => onCardClick("itineraries")}
            zIndex={getZIndex("itineraries")}
          />
          <RecommendationsCard
            isActive={activeCard === "recommendations"}
            onClick={() => onCardClick("recommendations")}
            zIndex={getZIndex("recommendations")}
          />
        </div>
      </div>
    </section>
  );
}
