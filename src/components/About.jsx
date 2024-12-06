import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
            About Us
          </h2>
          <p className="text-sm text-gray-500">
            Home &gt; <span className="text-indigo-600 font-bold">About Us</span>
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Image Section */}
          <div>
            <img
              src="/images/microscope.jpg"
              alt="Medical Equipment"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-blue-500">Gowlland Ideal Concept Ltd</strong> – Your Trusted Medical Equipment Supplier
              <br />
              Located in <strong>Jos Plateau State, Nigeria</strong>, <strong>Gowlland Ideal Concept</strong>, a subsidiary
              of <strong className="text-blue-500">Gowlland Int'L Company</strong>, is a premier supplier of medical equipment and consumables.
              We are committed to providing high-quality medical supplies to healthcare professionals, hospitals, clinics, caregivers, and patients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a focus on improving the quality of healthcare services, <strong className="text-blue-500">Gowlland Ideal Concept Ltd</strong> is proud to
              be a cornerstone in Nigeria's healthcare delivery. Our comprehensive range of medical equipment and consumables is designed to meet
              the needs of healthcare providers across various sectors.
            </p>
          </div>
        </div>

        {/* Core Services Section */}
        <h3 id="services" className="text-2xl font-bold text-gray-800 text-center uppercase tracking-wide mb-8">
          Our Core Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { title: "Sales", description: "We offer an extensive range of high-quality medical equipment and consumables tailored to meet the needs of healthcare professionals and institutions." },
            { title: "Supply", description: "Partnering with global manufacturers, we ensure reliable and efficient supply of medical tools to clinics, hospitals, and individual practitioners." },
            { title: "Distribution", description: "With a robust distribution network, we guarantee prompt and seamless delivery of essential medical equipment and supplies across Nigeria and beyond." },
            { title: "Delivery", description: "Our delivery service ensures that medical products reach healthcare providers and facilities swiftly, maintaining their quality and integrity." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h4>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <h3 className="text-2xl font-bold text-gray-800 text-center uppercase mb-8">
          Our Commitment to Quality
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h4>
            <p className="text-gray-700">
              We ensure that all our medical equipment and consumables undergo strict quality control processes. Only the best products meet our rigorous standards before reaching our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Expert Guidance</h4>
            <p className="text-gray-700">
              Our team of industry professionals provides expert guidance to help healthcare providers make informed decisions on the right equipment and supplies for their needs.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <h3 className="text-3xl font-bold text-gray-900 text-center uppercase tracking-wide mb-8">
          Our Vision & Mission
        </h3>
        <div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h4>
          <p className="text-lg text-gray-700 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 p-4 border-l-4 border-gray-800 rounded-lg shadow-md mb-8">
            To become Nigeria's leading medical equipment supplier, setting new industry standards for quality, reliability, and customer service. We aim to revolutionize healthcare delivery through cutting-edge medical technology.
          </p>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h4>
          <p className="text-lg text-gray-700 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 p-4 border-l-4 border-gray-800 rounded-lg shadow-md">
            Our mission is to supply top-tier medical equipment and consumables that empower healthcare professionals, enhance patient care, and contribute to healthier communities across Nigeria and Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
