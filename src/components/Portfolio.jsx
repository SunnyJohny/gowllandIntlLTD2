import React from "react";
import CenterMode from "./PortfolioSlider";

const Portfolio = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="text-center pb-14 lg:px-24 px-4" id="portfolio">
        <h4 className="text-gray-200 font-semibold text-2xl">
          Our Work
        </h4>
        <h2 className="text-5xl font-bold leading-snug text-white">
          Recent Deliveries & Installations
        </h2>
        <p className="text-gray-400 mt-4">
          Explore some of the hospitals, clinics, and facilities we&apos;ve partnered with to supply essential medical equipment, consumables, and services.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="lg:px-24 px-4 overflow-hidden">
        <CenterMode />
      </div>

      {/* Sales Section */}
      <div className="text-center lg:px-24 px-4 my-16">
        <h4 className="text-gray-200 font-semibold text-2xl">
          Recent Sales
        </h4>
        <h2 className="text-5xl font-bold leading-snug text-white">
          Supplying Medical Equipment & Consumables
        </h2>
        <p className="text-gray-400 mt-4">
          Here are some of the most recent sales we&apos;ve made to healthcare institutions, ensuring they have access to top-quality medical products.
        </p>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center">
            {/* Sample Sales Items */}
            <div className="w-full sm:w-5/12 md:w-1/4 px-4 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">Patient Monitors</h3>
                <p className="text-gray-400 mt-2">Sold to St. Mary&apos;s Hospital</p>
                <p className="text-gray-500 mt-4">High-quality, accurate patient monitoring systems for critical care units.</p>
              </div>
            </div>

            <div className="w-full sm:w-5/12 md:w-1/4 px-4 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">Surgical Instruments</h3>
                <p className="text-gray-400 mt-2">Sold to City Clinic</p>
                <p className="text-gray-500 mt-4">Precision surgical tools for a wide range of medical procedures.</p>
              </div>
            </div>

            <div className="w-full sm:w-5/12 md:w-1/4 px-4 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">Medical Consumables</h3>
                <p className="text-gray-400 mt-2">Sold to Global Health Clinic</p>
                <p className="text-gray-500 mt-4">A range of high-quality consumables including gloves, syringes, and bandages.</p>
              </div>
            </div>

            <div className="w-full sm:w-5/12 md:w-1/4 px-4 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-white">Ventilators</h3>
                <p className="text-gray-400 mt-2">Sold to Sunshine Medical Center</p>
                <p className="text-gray-500 mt-4">Advanced ventilators for respiratory support in intensive care units.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-24"></div>
    </div>
  );
};

export default Portfolio;
