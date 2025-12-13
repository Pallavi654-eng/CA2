import React from "react";

const Pricing = () => {
  return (
    <section className="relative py-20" id="pricing">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="p-6 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-300 mb-4">Free plan for casual users</p>
            <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal">/month</span></p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔ Access to basic features</li>
              <li>✔ Budget planner</li>
              <li>✔ Basic AI assistance</li>
            </ul>
            <button className="w-full rounded-xl bg-blue-600 py-2 font-medium text-white hover:bg-blue-500 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 bg-gradient-to-br from-purple-300 via-purple-600 to-purple-900 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 border-2 border-blue-500">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-gray-300 mb-4">For frequent travelers</p>
            <p className="text-3xl font-bold mb-6">$9<span className="text-lg font-normal">/month</span></p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔ All Basic features</li>
              <li>✔ Review & Rating system</li>
              <li>✔ Add & manage tourist locations</li>
              <li>✔ Personalized suggestions</li>
            </ul>
            <button className="w-full rounded-xl bg-blue-600 py-2 font-medium text-white hover:bg-blue-500 transition">
              Subscribe Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="p-6 bg-gradient-to-br from-pink-500 via-pink-700 to-pink-900 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-300 mb-4">For power users & businesses</p>
            <p className="text-3xl font-bold mb-6">$19<span className="text-lg font-normal">/month</span></p>
            <ul className="text-left mb-6 space-y-2">
              <li>✔ All Pro features</li>
              <li>✔ AI Travel Assistance</li>
              <li>✔ Interactive Maps</li>
              <li>✔ Priority support</li>
            </ul>
            <button className="w-full rounded-xl bg-blue-600 py-2 font-medium text-white hover:bg-blue-500 transition">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
