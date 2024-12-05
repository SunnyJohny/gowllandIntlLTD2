import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module correctly
import "swiper/css";
import "swiper/css/autoplay";
import equipmentData from "../data/equipmentData"; // Import equipment data from the data file

const Hero = () => {
  return (
    <div className="banner cs-style1 relative" id="home">
      {/* Image Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        className="h-96"
      >
        {equipmentData.map((equipment, index) => (
          <SwiperSlide key={index} className="relative group">
            {/* Image */}
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h2
                className={`text-4xl font-extrabold mb-6 leading-tight break-words text-center ${
                  index === 0
                    ? "text-white font-Poppins shadow-lg mt-[-10px]" // Move "Welcome" text up
                    : "text-[#de5c50] font-Moserate, sans-serif"
                } animate-drop`}
              >
                {index === 0 ? "Welcome to " : ""}
                {equipment.name}
              </h2>

              {index === 0 && (
                <div className="relative text-center">
                  <p className="text-[20px] text-white font-extrabold mt-6 px-4 lg:px-32">
                    Supplying Top-Quality Hospital Equipment &{" "}
                    <span className="text-blue-500">Reliable</span> Medical{" "}
                    <span className="text-blue-500">Consumables</span>
                  </p>
                  <div className="absolute inset-x-0 bottom--16 flex justify-center">
                    <a
                      href="https://wa.me/2348034100655?text=Thanks%20for%20contacting%20us!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
              )}

              {index !== 0 && (
                <button className="px-6 py-2 bg-blue-500  text-white rounded-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300 shadow-md animate-slide-up">
                  Buy Now
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Additional Banner Content */}
      <div className="px-4 lg:px-24 mt-8">
        <h1 className="md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug"></h1>
        <div className="text-white text-lg flex flex-col-reverse md:flex-row md:items-center items-start justify-between gap-8">
          <div>
            <a
              className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300"
              href="/contact"
            >
              <span>Get a Quote</span>
              <BsArrowRight />
            </a>
          </div>
          <div className="md:w-1/2">
            <p className="cs-hero_subtitle">
              Redefining healthcare standards with world-class equipment and
              trusted medical consumables.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Arrow to Service Section */}
      <Link
        to="services"
        spy={true}
        smooth={true}
        className="cs-down_btn md:mt-20 mt-8"
      >
        .
      </Link>
    </div>
  );
};

export default Hero;
