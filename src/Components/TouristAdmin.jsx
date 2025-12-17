import React, { useState } from "react";

export default function TouristAdmin({ onBack }) {
  const [locations, setLocations] = useState([
    { id: 1, name: "Goa Beach", description: "Sunny beaches with vibrant nightlife", tags: "beach, nightlife" },
    { id: 2, name: "Taj Mahal", description: "Iconic marble mausoleum", tags: "monument, heritage" },
  ]);
  const [formData, setFormData] = useState({ name: "", description: "", tags: "" });

  const handleAdd = () => {
    if (!formData.name || !formData.description) return;
    setLocations([...locations, { id: Date.now(), ...formData }]);
    setFormData({ name: "", description: "", tags: "" });
  };

  const handleDelete = (id) => {
    setLocations(locations.filter((loc) => loc.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-['Space_Grotesk'] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <h1 className="text-2xl font-bold">Tourist Locations</h1>
        </div>

        {/* Add Form */}
        <div className="p-5 mb-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
          <h2 className="text-lg font-semibold mb-4">Add New Location</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
            />
            <input
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
            />
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all"
          >
            Add Location
          </button>
        </div>

        {/* Locations List */}
        <div className="space-y-4">
          {locations.map((loc) => (
            <div key={loc.id} className="flex items-center justify-between p-5 rounded-xl bg-slate-900/60 border border-slate-700/50">
              <div>
                <h3 className="text-lg font-semibold text-white">{loc.name}</h3>
                <p className="text-slate-400 text-sm">{loc.description}</p>
                <p className="text-slate-500 text-xs mt-1">Tags: {loc.tags}</p>
              </div>
              <button
                onClick={() => handleDelete(loc.id)}
                className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {locations.length === 0 && (
          <p className="text-center text-slate-500 py-10">No locations added yet</p>
        )}
      </div>
    </div>
  );
}
