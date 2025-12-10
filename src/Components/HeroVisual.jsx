
import React from "react";
import DestinationsCard from "./Cards/DestinationsCard";
import AnalyticsCard from "./Cards/AnalyticsCard";
import ItinerariesCard from "./Cards/ItinerariesCard";
import RecommendationsCard from "./Cards/RecommendationsCard";

export default function HeroVisual({ activeCard, onCardClick, getZIndex }) {
  return (
    <section className="relative mx-auto mt-16 flex w-full max-w-6xl flex-1 items-center justify-center px-6 pb-24">
      {/* horizontal linking lines */}
      <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <span className="block h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* orb */}
      <div className="orb-core relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
        <div className="spin-ring absolute inset-6 rounded-full border border-white/15" />
        <div className="spin-ring absolute inset-12 rounded-full border border-white/10 delay-200" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-sky-400/40 to-transparent blur-[60px] opacity-40" />
      </div>

      {/* cards */}
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
