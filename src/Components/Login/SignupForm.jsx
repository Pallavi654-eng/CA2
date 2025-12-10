
import React from "react";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";

// Icons
const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

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

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export default function SignupForm({
  formData,
  errors,
  showPassword,
  showConfirmPassword,
  onInputChange,
  onTogglePassword,
  onToggleConfirmPassword,
  onTermsChange,
}) {
  return (
    <>
      <FormInput
        id="fullName"
        name="fullName"
        type="text"
        label="Full Name"
        value={formData.fullName}
        onChange={onInputChange}
        placeholder="John Doe"
        error={errors.fullName}
        icon={UserIcon}
        animationClass="animate-slide-in-left"
      />

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
        animationClass="animate-slide-in-left-delay"
      />

      <FormInput
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={onInputChange}
        placeholder="+1 (555) 123-4567"
        error={errors.phoneNumber}
        icon={PhoneIcon}
        animationClass="animate-slide-in-left-delay-2"
        optional={true}
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
        animationClass="animate-slide-in-left-delay-3"
      />

      <PasswordInput
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={onInputChange}
        placeholder="Confirm your password"
        error={errors.confirmPassword}
        showPassword={showConfirmPassword}
        onTogglePassword={onToggleConfirmPassword}
        animationClass="animate-slide-in-left-delay-4"
      />

      <div className="animate-slide-in-left-delay-5">
        <label className="flex items-start">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={onTermsChange}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-2 focus:ring-blue-500/50"
          />
          <span className="ml-2 text-sm text-slate-300">
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              Privacy Policy
            </a>
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="mt-1 text-xs text-red-400 animate-shake">
            {errors.agreeToTerms}
          </p>
        )}
      </div>
    </>
  );
}
