import React from "react";

export default function BackButton({ onBackToHome }) {
  return (
    <button
      onClick={onBackToHome}
      className="absolute top-8 left-8 flex items-center gap-2 text-slate-300 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.35)] animate-fade-in-left"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Back to Home
    </button>
  );
}