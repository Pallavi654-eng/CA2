import React from "react";

const chartData = [
  { value: 18, month: "Jan" },
  { value: 38, month: "Mar" },
  { value: 64, month: "Jun" },
  { value: 92, month: "Sep" },
];

export default function AnalyticsCard({ isActive, onClick, zIndex }) {
  return (
    <div
      onClick={onClick}
      className="glass-panel absolute right-0 top-14 w-64 translate-x-1/2 rounded-2xl border border-white/10 p-5 text-sm text-slate-200 shadow-[0_25px_70px_rgba(15,23,42,0.75)] cursor-pointer transition-all duration-300 hover:scale-105"
      style={{ zIndex }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Popular Destinations
          </p>
          <p className="text-lg font-semibold text-white">+85% searches</p>
        </div>
        <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-200">
          +24%
        </span>
      </div>
      <div className="flex items-end gap-3">
        {chartData.map(({ value, month }, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div
              className="w-4 rounded-full bg-gradient-to-t from-blue-900 to-blue-400"
              style={{ height: `${value}px` }}
            />
            <span className="text-[10px] text-slate-500">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}