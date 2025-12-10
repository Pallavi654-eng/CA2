import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="about"
      className="mt-0 w-full bg-gradient-to-b from-[#0a0f1f] to-[#05070d] py-16 px-8 text-slate-300 border-t border-white/10 backdrop-blur-xl"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 text-xl font-semibold text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]">
              ✈️
            </div>
            WanderAI
          </div>

          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Your intelligent travel companion — plan smarter, budget better,
            explore deeper. Powered by AI to give you real-time insights,
            personalized suggestions, and seamless travel support.
          </p>

          {/* SOCIALS */}
          <div className="mt-5 flex gap-4">
            <FaTwitter className="cursor-pointer text-lg hover:text-white transition" />
            <FaInstagram className="cursor-pointer text-lg hover:text-white transition" />
            <FaGithub className="cursor-pointer text-lg hover:text-white transition" />
            <FaLinkedin className="cursor-pointer text-lg hover:text-white transition" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition cursor-pointer">Features</li>
            <li className="hover:text-white transition cursor-pointer">Pricing</li>
            <li className="hover:text-white transition cursor-pointer">Resources</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition cursor-pointer">AI Trip Planner</li>
            <li className="hover:text-white transition cursor-pointer">Smart Recommendations</li>
            <li className="hover:text-white transition cursor-pointer">Budget Calculator</li>
            <li className="hover:text-white transition cursor-pointer">Insights & Reports</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm text-slate-400 mb-4">
            Join our newsletter to get travel hacks, AI updates, and exclusive offers.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl bg-white/10 px-4 py-2 text-sm text-white placeholder-slate-400 border border-white/20 focus:outline-none focus:border-blue-400"
            />
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500 transition shadow-[0_0_25px_rgba(37,99,235,0.5)]">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} WanderAI — All rights reserved.
      </div>
    </footer>
  );
}
