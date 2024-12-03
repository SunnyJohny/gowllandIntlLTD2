import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon
import equipmentData from "../data/equipmentData"; // Import equipment data

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product
  const [isSearchActive, setIsSearchActive] = useState(false); // Track if search is active

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredProducts([]); // Clear results when input is empty
      setIsSearchActive(false); // Deactivate search if input is empty
      return;
    }

    // Filter products based on query, ensuring 'name' is not empty
    const results = equipmentData.filter((product) =>
      product.name && product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(results);
    setIsSearchActive(true); // Activate search if query has text
  };

  const handleItemClick = (product) => {
    setSelectedProduct(product);
    setFilteredProducts([]); // Clear search results when an item is clicked
  };

  const handleClose = () => {
    setSelectedProduct(null); // Close the large image when "Close" button is clicked
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100 rounded-full p-2 w-full max-w-lg mx-auto h-12"
        >
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search products here"
            className="flex-grow bg-transparent border-none outline-none text-gray-700 px-4"
          />
          <button
            type="submit"
            className="bg-transparent border-none outline-none p-2"
          >
            <FaSearch className="text-gray-500 w-5 h-5" /> {/* Search Icon */}
          </button>
        </form>

        {/* Search Results Dropdown */}
        {filteredProducts.length > 0 && !selectedProduct && (
          <div className="absolute mt-2 w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => handleItemClick(product)} // Set product on click
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <span className="text-gray-700 text-sm font-medium">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Display selected product's image, name, and Order Now button */}
        {selectedProduct && (
          <div className="mt-4 text-center relative">
            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2"
              onClick={handleClose}
            >
              X {/* Close button */}
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-w-sm mx-auto rounded-lg shadow-lg"
            />
            {/* Order Now Button */}
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              onClick={() => alert("Order placed!")}
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
