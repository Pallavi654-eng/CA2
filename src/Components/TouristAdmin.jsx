import React, { useState } from "react";

export default function TouristAdmin({ onBack }) {
  const [locations, setLocations] = useState([
    { name: "Goa Beach", description: "Sunny beach in Goa", tags: "beach, sun" },
  ]);

  const [newLocation, setNewLocation] = useState({ name: "", description: "", tags: "" });

  const addLocation = () => {
    if (newLocation.name && newLocation.description) {
      setLocations([...locations, newLocation]);
      setNewLocation({ name: "", description: "", tags: "" });
    }
  };

  const removeLocation = (index) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white text-gray-900 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Panel: Tourist Locations</h2>
        <button
          onClick={onBack}
          className="text-red-500 hover:underline"
        >
          Back
        </button>
      </div>

      {/* Add Location Form */}
      <div className="mb-6 flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Name"
          value={newLocation.name}
          onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
          className="border p-2 rounded-md flex-1"
        />
        <input
          type="text"
          placeholder="Description"
          value={newLocation.description}
          onChange={(e) => setNewLocation({ ...newLocation, description: e.target.value })}
          className="border p-2 rounded-md flex-1"
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={newLocation.tags}
          onChange={(e) => setNewLocation({ ...newLocation, tags: e.target.value })}
          className="border p-2 rounded-md flex-1"
        />
        <button
          onClick={addLocation}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Add Location
        </button>
      </div>

      {/* Locations List */}
      <ul className="space-y-4">
        {locations.map((loc, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm">
            <div>
              <h4 className="font-semibold text-lg">{loc.name}</h4>
              <p className="text-gray-600">{loc.description}</p>
              <p className="text-gray-400 text-sm">Tags: {loc.tags}</p>
            </div>
            <button
              onClick={() => removeLocation(index)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
