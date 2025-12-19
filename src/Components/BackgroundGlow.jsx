
import React from "react";

export default function BackgroundGlows() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[180px]" />
      <div className="absolute top-12 -left-24 h-64 w-64 rounded-full bg-sky-500/20 blur-[140px]" />
      <div className="absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-indigo-500/30 blur-[160px]" />
    </div>
  );
}
