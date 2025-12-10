import React, { useState } from "react";
import BackgroundGlows from "./BackgroundGlow";
import BackButton from "./Login/BackButton";
import LoginHeader from "./Login/LoginHeader";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";
import SocialLoginButtons from "./Login/SocialLoginButtons";
import FormDivider from "./Login/FormDivider";
import SwitchAuthLink from "./Login/SwitchAuthLink";

export default function Login({ onLogin, onBackToHome }) {
  const [isSignUp, setIsSignUp] = useState(false);
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleTermsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: e.target.checked,
    }));
    if (errors.agreeToTerms) {
      setErrors((prev) => ({
        ...prev,
        agreeToTerms: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (isSignUp) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      } else if (formData.fullName.trim().length < 2) {
        newErrors.fullName = "Name must be at least 2 characters";
      }
      
      if (formData.phoneNumber && !/^[\d\s\-\+\(\)]+$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = "Invalid phone number format";
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "You must agree to the terms and conditions";
      }
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (isSignUp && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isSignUp) {
        // Handle signup logic here
        console.log("Signup attempt:", formData);
        alert(`Welcome ${formData.fullName}! Your account has been created.`);
        // Reset form and switch to login
        setFormData({
          fullName: "",
          email: formData.email, // Keep email for convenience
          password: "",
          confirmPassword: "",
          phoneNumber: "",
          agreeToTerms: false,
        });
        setIsSignUp(false);
      } else {
        // Handle login logic here
        if (onLogin) {
          onLogin(formData);
        }
      }
    }
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
    setErrors({});
  };

  const switchToLogin = () => {
    setIsSignUp(false);
    setErrors({});
    setFormData((prev) => ({
      ...prev,
      fullName: "",
      confirmPassword: "",
      phoneNumber: "",
      agreeToTerms: false,
    }));
  };

  return (
    <div className="bg-starfield min-h-screen text-white font-['Space_Grotesk'] overflow-hidden">
      <BackgroundGlows />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <BackButton onBackToHome={onBackToHome} />

        {/* Login/Signup Card */}
        <div className="w-full max-w-md animate-fade-in-up">
          <LoginHeader isSignUp={isSignUp} />

          {/* Login/Signup Form */}
          <div className="glass-panel rounded-3xl border border-white/10 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.75)] animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp ? (
                <SignupForm
                  formData={formData}
                  errors={errors}
                  showPassword={showPassword}
                  showConfirmPassword={showConfirmPassword}
                  onInputChange={handleChange}
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  onToggleConfirmPassword={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.45)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] animate-slide-in-left-delay-3"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
            </form>

            <FormDivider />
            <SocialLoginButtons />
            <SwitchAuthLink
              isSignUp={isSignUp}
              onSwitch={isSignUp ? switchToLogin : switchToSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}