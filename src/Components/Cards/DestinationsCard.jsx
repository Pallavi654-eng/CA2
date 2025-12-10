import React from "react";

const destinations = [
  { label: "Santorini, Greece", status: "Trending" },
  { label: "Kyoto, Japan", status: "Popular" },
  { label: "Bali, Indonesia", status: "Hot Deal" },
];

export default function DestinationsCard({ isActive, onClick, zIndex }) {
  return (
    <div
      onClick={onClick}
      className="glass-panel absolute left-0 top-10 w-64 -translate-x-1/2 rounded-2xl border border-white/10 p-5 text-sm text-slate-200 shadow-[0_25px_70px_rgba(15,23,42,0.75)] cursor-pointer transition-all duration-300 hover:scale-105"
      style={{ zIndex }}
    >
      <div className="mb-3 flex items-center justify-between text-white">
        <span className="font-semibold">Destinations</span>
        <span className="rounded-full bg-emerald-500/30 px-2 py-0.5 text-xs text-emerald-300">
          Live
        </span>
      </div>
      <div className="space-y-2">
        {destinations.map(({ label, status }) => (
          <div
            key={label}
            className="rounded-xl border border-white/5 bg-white/5 px-3 py-2"
          >
            <p className="text-sm text-white">{label}</p>
            <p className="text-xs text-slate-400">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}