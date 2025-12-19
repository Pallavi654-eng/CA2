import React from "react";

export default function LoginHeader({ isSignUp }) {
  return (
    <div className="mb-8 text-center animate-slide-down">
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.8)] animate-pulse-glow">
          <span className="text-2xl">✈️</span>
        </div>
      </div>
      <h1 className="mb-2 text-3xl font-semibold text-white animate-fade-in">
        {isSignUp ? "Create Account" : "Welcome Back"}
      </h1>
      <p className="text-slate-400 animate-fade-in-delay">
        {isSignUp
          ? "Start your travel journey with us"
          : "Sign in to continue your travel journey"}
      </p>
    </div>
  );
}