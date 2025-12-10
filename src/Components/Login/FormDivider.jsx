
import React from "react";

export default function FormDivider() {
  return (
    <div className="my-6 flex items-center animate-fade-in-delay-2">
      <div className="flex-1 border-t border-white/10"></div>
      <span className="px-4 text-sm text-slate-400">or</span>
      <div className="flex-1 border-t border-white/10"></div>
    </div>
  );
}
