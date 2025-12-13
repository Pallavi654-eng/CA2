import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import BackgroundGlows from "./BackgroundGlow";
import Navbar from "./Navbar";
import BackButton from "./Login/BackButton";

export default function FeedbackPage({ onBackToHome }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    locationName: "",
    review: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.locationName.trim()) {
      newErrors.locationName = "Location name is required";
    }

    if (!formData.review.trim()) {
      newErrors.review = "Review is required";
    } else if (formData.review.trim().length < 10) {
      newErrors.review = "Review must be at least 10 characters";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (rating === 0) {
      newErrors.rating = "Please select a rating";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setFormData({
        locationName: "",
        review: "",
        name: "",
        email: "",
      });
      setRating(0);
      setSubmitSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => setRating(star)}
        onMouseEnter={() => setHoveredRating(star)}
        onMouseLeave={() => setHoveredRating(0)}
        className="transition-transform duration-200 hover:scale-110 focus:outline-none"
      >
        <FaStar
          className={`text-4xl ${
            star <= (hoveredRating || rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-slate-400"
          }`}
        />
      </button>
    ));
  };

  return (
    <div className="bg-starfield min-h-screen text-white font-['Space_Grotesk'] overflow-hidden">
      <BackgroundGlows />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar onLoginClick={() => {}} />
        {onBackToHome && <BackButton onBackToHome={onBackToHome} />}

        <div className="flex-1 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                Review & Rating System
              </h1>
              <p className="text-lg text-slate-300">
                Share your travel experiences and help others discover amazing destinations
              </p>
            </div>

            <div className="flex justify-center">
              {/* Form Section */}
              <div className="w-full max-w-2xl animate-fade-in-up">
                <div className="glass-panel rounded-2xl border border-white/10 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.75)]">
                  <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                    <FaMapMarkerAlt className="text-pink-400" />
                    Submit Your Review
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Star Rating */}
                    <div>
                      <label className="mb-3 block text-sm font-medium text-slate-300">
                        Rating
                      </label>
                      <div className="flex items-center gap-2 justify-center py-4">
                        {renderStars()}
                      </div>
                      {errors.rating && (
                        <p className="mt-2 text-xs text-red-400 animate-shake text-center">
                          {errors.rating}
                        </p>
                      )}
                      {rating > 0 && (
                        <p className="mt-2 text-sm text-slate-300 text-center">
                          {rating} {rating === 1 ? "star" : "stars"} selected
                        </p>
                      )}
                    </div>

                    {/* Location Name */}
                    <div>
                      <label htmlFor="locationName" className="mb-2 block text-sm font-medium text-slate-300">
                        Location Name
                      </label>
                      <input
                        type="text"
                        id="locationName"
                        name="locationName"
                        value={formData.locationName}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                          errors.locationName
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
                            : "border-white/10"
                        }`}
                        placeholder="e.g., Eiffel Tower, Paris"
                      />
                      {errors.locationName && (
                        <p className="mt-1 text-xs text-red-400 animate-shake">
                          {errors.locationName}
                        </p>
                      )}
                    </div>

                    {/* Review */}
                    <div>
                      <label htmlFor="review" className="mb-2 block text-sm font-medium text-slate-300">
                        Your Review
                      </label>
                      <textarea
                        id="review"
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none ${
                          errors.review
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
                            : "border-white/10"
                        }`}
                        placeholder="Share your experience, what you liked, what could be improved..."
                      />
                      {errors.review && (
                        <p className="mt-1 text-xs text-red-400 animate-shake">
                          {errors.review}
                        </p>
                      )}
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
                            : "border-white/10"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 animate-shake">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
                            : "border-white/10"
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 animate-shake">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Success Message */}
                    {submitSuccess && (
                      <div className="rounded-xl bg-green-500/20 border border-green-500/50 p-4 flex items-center gap-3 animate-fade-in">
                        <FaCheckCircle className="text-green-400 text-xl" />
                        <p className="text-green-400 text-sm font-medium">
                          Review submitted successfully!
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.45)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? "Submitting Review..." : "Submit Review"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}