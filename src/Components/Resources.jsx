import React, { useEffect, useRef, useState } from "react";

const resources = [
  {
    title: "Travel Guides",
    description: "Explore curated guides for India's most loved destinations.",
    image: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
    items: ["Delhi Complete Guide", "Goa Beach & Nightlife", "Kerala Backwater Guide", "Rajasthan Royal Tour"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Budget Templates",
    description: "Smart templates to track trip expenses & avoid overspending.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
    items: ["Daily Budget Sheet", "Hotel Cost Planner", "Activity Expense Tracker", "Trip Cost Calculator"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Safety Tips",
    description: "Stay safe and prepared while exploring new cities.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    items: ["Secure belongings", "Emergency contacts", "Avoid unsafe routes", "Solo travel precautions"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Travel Tools",
    description: "Smart AI-powered utilities to assist your journeys.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: ["Currency Converter", "Weather Checker", "Distance Calculator", "Best Time Predictor"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    badge: "Coming Soon",
  },
  {
    title: "FAQs",
    description: "Quick answers to common travel-related queries.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    items: ["How accurate is budget planner?", "Can admin add tourist places?", "How do ratings work?", "Is WanderAI free?"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
  },
];

const ResourceCard = ({ resource, index, isVisible }) => (
  <div
    className={`group relative rounded-2xl overflow-hidden transition-all duration-500
      bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600
      hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/50
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    {/* Image */}
    <div className="relative h-44 overflow-hidden">
      <img
        src={resource.image}
        alt={resource.title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      
      {/* Badge */}
      {resource.badge && (
        <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium text-white bg-violet-600/80 backdrop-blur-sm rounded-full">
          {resource.badge}
        </span>
      )}

      {/* Icon */}
      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {resource.icon}
            </div>
          </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        {resource.title}
              </h3>
      <p className="text-slate-400 text-sm mb-4">{resource.description}</p>
      
      <ul className="space-y-2">
        {resource.items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${resource.color}`} />
            {item}
          </li>
        ))}
              </ul>
            </div>

    {/* Hover glow */}
    <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${resource.color} rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
          </div>
);

export default function Resources() {
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
    <section ref={ref} id="resources" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <p className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-3">Resources</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Helpful Travel Resources</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need for a smarter, safer, and budget-friendly travel experience.
          </p>
          </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <ResourceCard key={i} resource={resource} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
