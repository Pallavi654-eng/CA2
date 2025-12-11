import React from "react";

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-300/80">
        Travel & Tourism AI
      </p>
      <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        Your AI travel companion for perfect trips.
      </h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-300">
        Discover amazing destinations, get personalized recommendations, and
        plan unforgettable journeys — all powered by intelligent AI assistance.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={onGetStarted}
          className="rounded-2xl bg-blue-600 px-8 py-3 text-lg font-semibold shadow-[0_20px_60px_rgba(59,130,246,0.45)] transition hover:bg-blue-500"
        >
          Get started
        </button>
        <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-3 text-lg font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
          See It in Action
        </button>
      </div>
    </section>
  );
}