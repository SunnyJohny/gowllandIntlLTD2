import React from "react";
import { BsArrowRight } from "react-icons/bs";
// images
import service1 from "../assets/service_1.jpeg"; // Replace with relevant medical images
import service2 from "../assets/service_2.jpeg";
import service3 from "../assets/service_3.jpeg";
import service4 from "../assets/service_4.jpeg";

const Services = () => {
  return (
    <div  className="text-white lg:px-24 px-4">
      <div className="h-36"></div>

      {/* Services Section */}
      <div className="lg:flex lg:justify-between items-start" id="services">
        {/* Header Content */}
        <div className="lg:w-1/3 space-y-5">
          <h4 className="text-gray-200 font-semibold text-2xl">
            Our Expertise
          </h4>
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            Specialized Services for Your Medical Needs
          </h2>
          <a
            className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 hover:text-orange transition-all ease-in duration-300"
            href="/"
          >
            <span>See All Services</span>
            <BsArrowRight />
          </a>
        </div>

        {/* Service Cards */}
        <div className="lg:w-2/3 my-8">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 hidden lg:block"></div>
            
            {/* Medical Equipment Supply */}
            <div className="lg:w-1/4 sm:w-5/12 mx-auto my-auto hover:shadow-lg hover:shadow-orange rounded-2xl transition-all duration-300">
              <a className="rounded-2xl block relative" href="/">
                <img src={service1} alt="Medical Equipment Supply" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    Medical Equipment Supply
                  </h2>
                </div>
              </a>
            </div>

            {/* Consumables Delivery */}
            <div className="service-cards">
              <a className="rounded-2xl block relative" href="/">
                <img src={service2} alt="Consumables Delivery" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    Consumables Delivery
                  </h2>
                </div>
              </a>
            </div>

            {/* Distribution Services */}
            <div className="service-cards">
              <a className="rounded-2xl block relative" href="/">
                <img src={service3} alt="Distribution Services" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    Distribution Services
                  </h2>
                </div>
              </a>
            </div>

            {/* Maintenance & Support */}
            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="service-cards">
              <a className="rounded-2xl block relative" href="/">
                <img src={service4} alt="Maintenance & Support" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    Maintenance & Support
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};

export default Services;
