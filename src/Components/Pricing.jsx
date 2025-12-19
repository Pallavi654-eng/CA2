import React, { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "0",
    description: "Perfect for casual travelers",
    features: ["Access to basic features", "Budget planner", "Basic AI assistance", "Community support"],
    color: "from-slate-500 to-slate-600",
    buttonColor: "bg-slate-600 hover:bg-slate-500",
  },
  {
    name: "Pro",
    price: "9",
    description: "For frequent travelers",
    features: ["All Basic features", "Review & Rating system", "Manage tourist locations", "Personalized suggestions", "Priority support"],
    color: "from-violet-500 to-indigo-600",
    buttonColor: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500",
    popular: true,
  },
  {
    name: "Premium",
    price: "19",
    description: "For power users & teams",
    features: ["All Pro features", "AI Travel Assistance", "Interactive Maps", "Analytics dashboard", "24/7 Priority support"],
    color: "from-amber-500 to-orange-600",
    buttonColor: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500",
  },
];

const PricingCard = ({ plan, index, isVisible }) => (
  <div
    className={`group relative h-full rounded-2xl transition-all duration-500
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${plan.popular ? "lg:-translate-y-4" : ""}
    `}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Popular badge */}
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <span className="px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-lg shadow-violet-500/30">
          Most Popular
        </span>
      </div>
    )}

    {/* Card */}
    <div className={`relative h-full p-8 rounded-2xl overflow-hidden
      bg-slate-900/60 backdrop-blur-sm border transition-all duration-300
      ${plan.popular ? "border-violet-500/50 shadow-xl shadow-violet-500/10" : "border-slate-700/50 hover:border-slate-600"}
    `}>
      {/* Background glow */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${plan.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

      {/* Header */}
      <div className="relative mb-6">
        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-sm text-slate-400">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="relative mb-8">
        <span className="text-5xl font-bold text-white">${plan.price}</span>
        <span className="text-slate-400 ml-1">/month</span>
      </div>

      {/* Features */}
      <ul className="relative space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
            <svg className={`w-5 h-5 flex-shrink-0 bg-gradient-to-br ${plan.color} bg-clip-text text-transparent`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`relative w-full py-3 rounded-xl font-medium text-white transition-all duration-300 ${plan.buttonColor} group-hover:shadow-lg`}>
        {plan.price === "0" ? "Get Started" : "Subscribe Now"}
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24" id="pricing">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <p className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Simple, transparent pricing that grows with your travel needs</p>
          </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
