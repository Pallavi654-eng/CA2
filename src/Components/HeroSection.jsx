import React from "react";

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="relative mx-auto mt-12 flex w-full max-w-4xl flex-col items-center px-6 text-center">
      {/* Floating badge */}
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm animate-fade-in-up">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm text-slate-300">AI-Powered Travel Planning</span>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        Your AI Travel Companion for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
          Perfect Trips
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        Discover amazing destinations, get personalized recommendations, and
        plan unforgettable journeys — all powered by intelligent AI assistance.
      </p>

      {/* CTA Button */}
      <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <button
          onClick={() => {
            console.log("Get Started clicked");
            onGetStarted?.();
          }}
          className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-all duration-300 pointer-events-none" />
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </div>
          {/* Glow */}
          <div className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-shadow duration-300 pointer-events-none" />
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>

      {/* Trust indicators */}
      <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Free to start
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          AI-powered
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          No credit card
        </div>
      </div>
    </section>
  );
}
