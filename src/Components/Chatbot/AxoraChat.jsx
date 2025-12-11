import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  FaSearch,
  FaHome,
  FaThLarge,
  FaCompass,
  FaHistory,
  FaPaperclip,
  FaPaperPlane,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";

/**
 * Standalone chatbot UI inspired by the provided mock.
 * Purely presentational; no changes to existing pages are required.
 */
export default function AxoraChat({ onBackToHome }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  const quickPrompts = useMemo(
    () => [
      "Plan a 3-day trip to Bali",
      "Find budget hotels in Tokyo",
      "Best cafes in Paris",
      "Create a packing list",
    ],
    []
  );

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const handleSend = (text) => {
    const value = (text ?? input).trim();
    if (!value) return;
    const next = { id: Date.now(), sender: "user", text: value };
    setMessages((prev) => [...prev, next, { id: Date.now() + 1, sender: "bot", text: "Got it! I’ll draft something." }]);
    setInput("");
  };

  return (
    <div className="bg-[#0b0f17] min-h-screen text-white font-['Space_Grotesk']">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 lg:w-80 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-lg font-semibold">WanderAI</div>
          </div>

          <div className="relative mb-5">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-10 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              placeholder="Search chats"
            />
          </div>

          <nav className="space-y-3 text-sm text-slate-300">
            {[
              { icon: FaHome, label: "Home" },
              { icon: FaThLarge, label: "Templates" },
              { icon: FaCompass, label: "Explore" },
              { icon: FaHistory, label: "History" },
            ].map((item) => (
              <button
                key={item.label}
                className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                <item.icon className="text-base" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 space-y-4 text-xs text-slate-400">
            <div>
              <p className="text-slate-200 mb-2">Tomorrow</p>
              <p>What’s one lesson life has taught you?</p>
              <p>What’s one goal that excites you?</p>
            </div>
            <div>
              <p className="text-slate-200 mb-2">10 days ago</p>
              <p>If animals could talk, which one would be funniest?</p>
              <p>One habit you want to break?</p>
            </div>
          </div>
        </aside>

        {/* Main panel */}
        <main className="flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {onBackToHome && (
                <button
                  onClick={onBackToHome}
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-300 border border-white/10 hover:border-blue-400/50 hover:text-white transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back
                </button>
              )}
              <button className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200 border border-white/10 hover:border-blue-400/50 transition">
                AI Assistant <FaChevronDown className="text-xs" />
              </button>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
          </div>

          {/* Message area */}
          <div className="rounded-3xl border border-white/10 bg-black/30 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div ref={listRef} className="h-[500px] overflow-y-auto space-y-3 pr-1">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.sender === "user"
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                        : "bg-white/5 border border-white/10 text-slate-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-200">
              <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 hover:border-blue-400/60 hover:text-white transition">
                <FaPaperclip /> Attach
              </button>
              <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 hover:border-blue-400/60 hover:text-white transition">
                <FaGlobe /> Search the web
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="mt-4 flex items-center gap-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message AI Chat..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(59,130,246,0.45)] transition hover:bg-blue-500 active:scale-[0.98]"
              >
                <FaPaperPlane /> Send
              </button>
            </form>
          </div>

          {/* Quick prompts */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-slate-200 hover:border-blue-400/50 hover:text-white transition"
              >
                {prompt}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

