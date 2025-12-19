
import React from "react";

export default function FormInput({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  animationClass = "animate-slide-in-left",
  optional = false,
}) {
  return (
    <div className={animationClass}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
        {optional && <span className="text-slate-500"> (Optional)</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
            error
              ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
              : "border-white/10"
          }`}
          placeholder={placeholder}
        />
        {Icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Icon className="h-5 w-5 text-slate-400" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-400 animate-shake">{error}</p>
      )}
    </div>
  );
}
