import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Budget Planner",
    description: "Track expenses, set limits, and get smart suggestions for cost-saving tips.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/25",
  },
  {
    title: "Admin Panel",
    description: "Add, edit, or remove tourist places with details, images, and tags.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/25",
  },
  {
    title: "Reviews & Ratings",
    description: "Rate and review locations to help others make informed choices.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/25",
  },
  {
    title: "AI Assistant",
    description: "Get recommendations, itineraries, and real-time travel tips.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/25",
  },
  {
    title: "Interactive Maps",
    description: "Explore tourist spots with easy navigation and smart filters.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/25",
    isLink: true,
    href: "/map.html",
  },
  {
    title: "Smart Suggestions",
    description: "Personalized recommendations based on your preferences and activity.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
    shadowColor: "shadow-rose-500/25",
  },
];

const FeatureCard = ({ feature, index, isVisible, onClick }) => {
  const content = (
    <div
      onClick={onClick}
      className={`group relative h-full p-6 rounded-2xl cursor-pointer
        bg-slate-900/50 backdrop-blur-sm border border-slate-700/50
        hover:border-slate-600 transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Gradient orb background */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      {/* Icon container */}
      <div className={`relative w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg ${feature.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
        {feature.description}
      </p>

      {/* Arrow indicator */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );

  if (feature.isLink) {
    return <a href={feature.href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  }
  return content;
};

const Features = ({ onAdminClick, onChatbotClick, onFeedbackClick }) => {
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

  const handlers = [onChatbotClick, onAdminClick, onFeedbackClick, onChatbotClick, null, null];

  return (
    <section ref={ref} className="relative py-24" id="features">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <p className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Key Features</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} isVisible={isVisible} onClick={handlers[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
