import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-16" id="features">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Key Features of Our App
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Budget Planner</h3>
            <p className="text-gray-200">
              Helps users plan their travel budget efficiently. Track expenses,
              set limits, and get smart suggestions for cost-saving tips.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Admin: Add Tourist Locations</h3>
            <p className="text-gray-200">
              Admins can easily add, edit, or remove tourist locations with
              details, images, and tags for better user experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gradient-to-br from-pink-700 via-pink-800 to-pink-900 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Review & Rating System</h3>
            <p className="text-gray-200">
              Users can rate and review tourist locations. Helps others make
              informed choices and builds community trust.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">AI Travel Assistance</h3>
            <p className="text-gray-200">
              Chatbot answers queries, gives recommendations, suggests
              itineraries, and provides real-time travel tips.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Interactive Maps</h3>
            <p className="text-gray-200">
              Integrated maps show tourist spots, nearby amenities, and
              attractions with easy navigation and filters.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Personalized Suggestions</h3>
            <p className="text-gray-200">
              Users get recommendations based on preferences, past activity,
              and ratings, making travel planning easier and more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
