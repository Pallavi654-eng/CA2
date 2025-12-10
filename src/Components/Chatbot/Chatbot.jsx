import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: "I'm thinking..." };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-4">WanderAI Chatbot</h1>

      <div className="w-full max-w-2xl bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col gap-4">
        <div className="flex flex-col gap-3 h-96 overflow-y-scroll p-3 rounded-lg bg-slate-900">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg w-fit ${
                msg.sender === "user" ? "bg-blue-600 self-end" : "bg-slate-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-700"
            placeholder="Ask something..."
          />
          <button
            onClick={handleSend}
            className="px-6 py-2 bg-blue-600 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
