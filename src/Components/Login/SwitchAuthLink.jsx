
import React from "react";

export default function SwitchAuthLink({ isSignUp, onSwitch }) {
  return (
    <p className="mt-6 text-center text-sm text-slate-400 animate-fade-in-delay-4">
      {isSignUp ? "Already have an account? " : "Don't have an account? "}
      <button
        type="button"
        onClick={onSwitch}
        className="font-medium text-blue-400 transition hover:text-blue-300 hover:underline"
      >
        {isSignUp ? "Sign in" : "Sign up"}
      </button>
    </p>
  );
}
