import React from "react";

export default function Navbar({ onLoginClick }) {
  const navItems = ["Features", "Pricing", "Resources", "About"];

  const handleScroll = (item) => {
    if (item === "Features") {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    }

    if (item === "Pricing") {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }

    if (item === "Resources") {
      document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
    }

    // ⭐ NEW: Scroll to Footer / About Section
    if (item === "About") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 text-sm text-slate-300">
      <div className="flex items-center gap-3 text-lg font-semibold text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]">
          <span className="text-base">✈️</span>
        </div>
        WanderAI
      </div>

      <div className="hidden gap-8 md:flex">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleScroll(item)}
            className="transition hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={onLoginClick}
        className="rounded-2xl bg-blue-600 px-6 py-2 font-medium text-white shadow-[0_10px_40px_rgba(37,99,235,0.45)] transition hover:bg-blue-500"
      >
        Login
      </button>
    </nav>
  );
}
