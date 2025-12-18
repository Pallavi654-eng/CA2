import React, { useState } from "react";
import BackgroundGlows from "./BackgroundGlow";
import BackButton from "./Login/BackButton";
import LoginHeader from "./Login/LoginHeader";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";
import SocialLoginButtons from "./Login/SocialLoginButtons";
import FormDivider from "./Login/FormDivider";
import SwitchAuthLink from "./Login/SwitchAuthLink";
import * as api from "../api/auth";

export default function Login({ onLogin, onBackToHome }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (apiError) setApiError("");
  };

  const handleTermsChange = (e) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }));
    if (errors.agreeToTerms) setErrors((prev) => ({ ...prev, agreeToTerms: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (isSignUp) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      else if (formData.fullName.trim().length < 2) newErrors.fullName = "Name must be at least 2 characters";
      
      if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
      
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    }
    
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setApiError("");

    try {
      let result;
      if (isSignUp) {
        result = await api.signup(formData.fullName, formData.email, formData.password);
      } else {
        result = await api.login(formData.email, formData.password);
      }

      if (result.success) {
        api.saveUser(result.user, result.token);
        onLogin(result.user);
      } else {
        setApiError(result.message || "Something went wrong");
      }
    } catch (err) {
      setApiError(err.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
    setErrors({});
    setApiError("");
  };

  const switchToLogin = () => {
    setIsSignUp(false);
    setErrors({});
    setApiError("");
  };

  return (
    <div className="bg-starfield min-h-screen text-white font-['Space_Grotesk'] overflow-hidden">
      <BackgroundGlows />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <BackButton onBackToHome={onBackToHome} />

        <div className="w-full max-w-md animate-fade-in-up">
          <LoginHeader isSignUp={isSignUp} />

          <div className="glass-panel rounded-3xl border border-white/10 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.75)] animate-scale-in">
            {apiError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp ? (
                <SignupForm
                  formData={formData}
                  errors={errors}
                  showPassword={showPassword}
                  showConfirmPassword={showConfirmPassword}
                  onInputChange={handleChange}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                  onTermsChange={handleTermsChange}
                />
              ) : (
                <LoginForm
                  formData={formData}
                  errors={errors}
                  showPassword={showPassword}
                  onInputChange={handleChange}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                />
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.45)] transition-all duration-300 hover:bg-blue-500 disabled:opacity-50"
              >
                {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            <FormDivider />
            <SocialLoginButtons />
            <SwitchAuthLink isSignUp={isSignUp} onSwitch={isSignUp ? switchToLogin : switchToSignUp} />
          </div>
        </div>
      </div>
    </div>
  );
}
