import React from "react";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";

// Icons
const EmailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

export default function LoginForm({
  formData,
  errors,
  showPassword,
  onInputChange,
  onTogglePassword,
}) {
  return (
    <>
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        value={formData.email}
        onChange={onInputChange}
        placeholder="you@example.com"
        error={errors.email}
        icon={EmailIcon}
        animationClass="animate-slide-in-left"
      />

      <PasswordInput
        id="password"
        name="password"
        label="Password"
        value={formData.password}
        onChange={onInputChange}
        placeholder="Enter your password"
        error={errors.password}
        showPassword={showPassword}
        onTogglePassword={onTogglePassword}
        animationClass="animate-slide-in-left-delay"
      />

      <div className="flex items-center justify-between animate-slide-in-left-delay-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-2 focus:ring-blue-500/50"
          />
          <span className="ml-2 text-sm text-slate-300">Remember me</span>
        </label>
        <a
          href="#"
          className="text-sm text-blue-400 transition hover:text-blue-300 hover:underline"
        >
          Forgot password?
        </a>
      </div>
    </>
  );
}