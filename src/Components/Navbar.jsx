import React from "react";

export default function Navbar({ onLoginClick }) {
  const navItems = ["Features", "Pricing", "Resources", "About"];

  const handleScroll = (item) => {
    const id = item.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-300">
      {/* Logo */}
      <div className="flex items-center gap-3 text-xl font-bold text-white">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md -z-10" />
        </div>
        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          WanderAI
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden gap-8 md:flex">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleScroll(item)}
            className="relative py-1 text-slate-400 hover:text-white transition-colors group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </button>
        ))}
      </div>

      {/* Login Button */}
      <button
        onClick={onLoginClick}
        className="group flex items-center gap-2 rounded-xl bg-slate-800/60 border border-slate-700/50 px-5 py-2.5 font-medium text-white backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-600 transition-all duration-300"
      >
        <svg className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        Login
      </button>
    </nav>
  );
}
