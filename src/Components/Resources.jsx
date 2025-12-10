import React from "react";

export default function Resources() {
  return (
    <section
      id="resources"
      className="w-full bg-[#0d1527] text-white py-24 px-6 flex justify-center"
    >
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Helpful Travel Resources
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-xl mx-auto">
          Everything you need for a smarter, safer, and budget-friendly travel experience.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Resource Card */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition">
            <img
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80"
              alt="Travel Guides"
              className="h-40 w-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300">
                📘 Travel Guides
              </h3>
              <p className="text-slate-400 mt-2 mb-3">
                Explore curated guides for India's most loved destinations.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Delhi Complete Guide</li>
                <li>• Goa Beach & Nightlife</li>
                <li>• Kerala Backwater Guide</li>
                <li>• Rajasthan Royal Tour</li>
              </ul>
            </div>
          </div>

          {/* Budget Planner */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition">
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
              className="h-40 w-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300">
                💰 Budget Planning Templates
              </h3>
              <p className="text-slate-400 mt-2 mb-3">
                Smart templates to track trip expenses & avoid overspending.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Daily Budget Sheet</li>
                <li>• Hotel Cost Planner</li>
                <li>• Activity Expense Tracker</li>
                <li>• Trip Cost Calculator</li>
              </ul>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80"
              className="h-40 w-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300">
                🛡️ Tourist Safety Tips
              </h3>
              <p className="text-slate-400 mt-2 mb-3">
                Stay safe and prepared while exploring new cities.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Secure belongings</li>
                <li>• Emergency contacts</li>
                <li>• Avoid unsafe routes</li>
                <li>• Solo travel precautions</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="h-40 w-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300">
                🛠️ Travel Tools (Coming Soon)
              </h3>
              <p className="text-slate-400 mt-2 mb-3">
                Smart AI-powered utilities to assist your journeys.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Currency Converter</li>
                <li>• Weather Checker</li>
                <li>• Distance Calculator</li>
                <li>• Best Time to Visit Predictor</li>
              </ul>
            </div>
          </div>

          {/* FAQs */}
          <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:scale-[1.03] transition col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
              className="h-40 w-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-300">
                ❓ FAQs
              </h3>
              <p className="text-slate-400 mt-2 mb-3">
                Quick answers to common travel-related queries.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• How accurate is budget planner?</li>
                <li>• Can admin add tourist places?</li>
                <li>• How do ratings work?</li>
                <li>• Is WanderAI free?</li>
                <li>• How to get support?</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
