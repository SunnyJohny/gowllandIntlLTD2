import React from "react";
import "./App.css";
import AboutUs from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import SearchBar from "./components/SearchBar";
import Services from "./components/Services";
import equipmentData from "./data/equipmentData"; // Import the equipment data
import Equipment from "./components/EquipmentDisplay";
import WhatsAppIcon from "./components/watsappComponent";

function App() {
  return (
    <>
      {/* Search Bar */}
      <SearchBar products={equipmentData} /> 

      {/* Main Content */}
      <div className="bg-[#181818] mt-[80px]"> {/* Ensure Navbar is below SearchBar */}
        <Navbar />
        <Hero />
        <Equipment />

        <AboutUs />
        {/* <Services /> */}
        {/* <Portfolio /> */}
        {/* <Blogs /> */}
        {/* <Partners /> */}
        <Contact />
        <WhatsAppIcon />

        <Footer />

      </div>
    </>
  );
}

export default App;
