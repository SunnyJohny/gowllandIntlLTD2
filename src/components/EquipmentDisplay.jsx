import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import equipmentData from "../data/equipmentData"; // Import your equipment data

const Equipment = () => {
  const [query, setQuery] = useState("");
  const [filteredEquipment, setFilteredEquipment] = useState(equipmentData);
  const [visibleCount, setVisibleCount] = useState(6); // Number of items to show initially

  // Handle search query
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter equipment data based on the search query
    if (value.trim() === "") {
      setFilteredEquipment(equipmentData); // Reset to full data when search is empty
    } else {
      const results = equipmentData.filter((equipment) =>
        equipment.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredEquipment(results);
    }

    setVisibleCount(6); // Reset visible items count when performing a new search
  };

  // Handle "Load More" button
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Equipment Gallery
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for equipment..."
            className="w-full p-3 pl-10 pr-4 border rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Equipment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEquipment.slice(0, visibleCount).length === 0 ? (
          <p className="col-span-full text-center text-xl text-gray-500">
            No equipment found.
          </p>
        ) : (
          filteredEquipment.slice(0, visibleCount).map((equipment) => (
            <div
              key={equipment.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 truncate">{equipment.name}</h3>
            </div>
          ))
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredEquipment.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Equipment;
