import React from "react";

const itineraries = [
  { title: "7-Day European Tour", badge: "Recommended" },
  { title: "Beach Paradise Package", badge: "Best Value" },
  { title: "Cultural Heritage Trip", badge: "New" },
];

export default function ItinerariesCard({ isActive, onClick, zIndex }) {
  return (
    <div
      onClick={onClick}
      className="glass-panel absolute left-4 bottom-12 w-64 -translate-x-1/3 rounded-2xl border border-white/10 p-5 text-sm text-slate-200 cursor-pointer transition-all duration-300 hover:scale-105"
      style={{ zIndex }}
    >
      <div className="mb-4 flex items-center gap-2 text-white">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Itineraries
      </div>
      <div className="space-y-2">
        {itineraries.map(({ title, badge }) => (
          <div
            key={title}
            className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2"
          >
            <span className="text-white">{title}</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-300">
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}