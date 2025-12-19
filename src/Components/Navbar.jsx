import React, { useState, useRef, useEffect } from "react";

export default function Navbar({ onLoginClick, user, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navItems = ["Features", "Pricing", "Resources", "About"];

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleScroll = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const getInitials = (name) => {
    return name?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "U";
  };

  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-300">
      {/* Logo */}
      <div className="flex items-center gap-3 text-xl font-bold text-white">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
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

      {/* User Profile or Login Button */}
      {user ? (
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 rounded-xl bg-slate-800/60 border border-slate-700/50 px-3 py-2 hover:bg-slate-700/60 transition"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
              {getInitials(user.name)}
            </div>
            <span className="hidden sm:block text-white text-sm">{user.name?.split(" ")[0]}</span>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-slate-700/50 shadow-xl z-50 overflow-hidden">
              <div className="p-3 border-b border-slate-700/50">
                <p className="text-white font-medium text-sm">{user.name}</p>
                <p className="text-slate-400 text-xs">{user.email}</p>
              </div>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  onLogout();
                }}
                className="w-full px-3 py-2 text-left text-red-400 hover:bg-red-500/10 text-sm transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={onLoginClick}
          className="group flex items-center gap-2 rounded-xl bg-slate-800/60 border border-slate-700/50 px-5 py-2.5 font-medium text-white hover:bg-slate-700/60 transition"
        >
          <svg className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          Login
        </button>
      )}
    </nav>
  );
}
