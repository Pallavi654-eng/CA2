
import React from "react";

const recommendations = [
  { title: "Best time to visit", detail: "Spring & Fall seasons" },
  { title: "Hidden gems nearby", detail: "5 local spots discovered" },
];

export default function RecommendationsCard({ isActive, onClick, zIndex }) {
  return (
    <div
      onClick={onClick}
      className="glass-panel absolute right-4 bottom-16 w-64 translate-x-1/3 rounded-2xl border border-white/10 p-5 text-sm text-slate-200 cursor-pointer transition-all duration-300 hover:scale-105"
      style={{ zIndex }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-white">Recommendations</span>
        <span className="text-xs text-slate-400">Updated 2m ago</span>
      </div>
      <div className="space-y-3">
        {recommendations.map(({ title, detail }) => (
          <div
            key={title}
            className="rounded-xl border border-white/5 bg-white/5 px-3 py-2"
          >
            <p className="text-white">{title}</p>
            <p className="text-xs text-slate-400">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
