import React, { useEffect, useRef, useState } from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = ["Features", "Pricing", "Resources", "About Us"];
const productLinks = ["AI Trip Planner", "Smart Recommendations", "Budget Calculator", "Insights & Reports"];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      id="about"
      className="relative mt-0 w-full py-20 px-8 text-slate-300 border-t border-slate-700/50 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              WanderAI
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your intelligent travel companion — plan smarter, budget better,
              explore deeper. Powered by AI for real-time insights and personalized support.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="group w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Icon className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCT INFO */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-lg font-semibold text-white mb-5">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-violet-400 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="text-lg font-semibold text-white mb-5">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">
              Get travel hacks, AI updates, and exclusive offers in your inbox.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-500 border border-slate-700/50 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800 transition-all"
              />
              <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-3 text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className={`mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p>© {new Date().getFullYear()} WanderAI — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
