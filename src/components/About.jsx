import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16 scroll-mt-24">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
            About Us
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Home &gt; <span className="text-indigo-600 font-bold">About Us</span>
          </p>

        </div>

        {/* Spacer */}

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="/images/microscope.jpg"
            alt="Medical Equipment"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="h-12"></div> {/* Adjust the height as needed for more or less spacing */}

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-blue-500">Gowlland Ideal Concept Ltd</strong> – Your Trusted Medical Equipment Supplier
              <br />
              Located in <strong>Jos Plateau State, Nigeria</strong>, <strong>Gowlland Ideal Concept</strong>, a subsidiary
              of <strong className="text-blue-500">Gowlland Int'L Company </strong>, is a premier supplier of medical equipment and consumables. We are
              committed to providing high-quality medical supplies to healthcare professionals, hospitals, clinics, caregivers,
              and patients. Our dedication to healthcare excellence has made us a trusted name in the medical equipment supply
              industry.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With a focus on improving the quality of healthcare services, <strong className="text-blue-500">Gowlland Ideal Concept Ltd</strong> is proud to
              be a cornerstone in Nigeria's healthcare delivery. Our comprehensive range of medical equipment and consumables is
              designed to meet the needs of healthcare providers across various sectors, including hospitals, clinics, dental
              practices, and medical professionals.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center uppercase tracking-wide">
              Our Core Services
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <strong>Gowlland Ideal Concept</strong>, we specialize in providing comprehensive solutions for medical equipment and consumables. Our major services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Sales</h4>
                <p className="text-gray-700">
                  We offer an extensive range of high-quality medical equipment and consumables tailored to meet the needs of healthcare professionals and institutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Supply</h4>
                <p className="text-gray-700">
                  Partnering with global manufacturers, we ensure reliable and efficient supply of medical tools to clinics, hospitals, and individual practitioners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Distribution</h4>
                <p className="text-gray-700">
                  With a robust distribution network, we guarantee prompt and seamless delivery of essential medical equipment and supplies across Nigeria and beyond.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Delivery</h4>
                <p className="text-gray-700">
                  Our delivery service ensures that medical products reach healthcare providers and facilities swiftly, maintaining their quality and integrity.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our dedication to these core services ensures healthcare professionals and facilities have the tools they need to provide exceptional patient care.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-6 text-center">
              Our Commitment to Quality
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              At <strong>Gowlland Ideal Concept</strong>, we hold ourselves to the highest standards in the medical equipment industry. Our commitment to excellence is built on:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h4>
                <p className="text-gray-700">
                  We ensure that all our medical equipment and consumables undergo strict quality control processes. Only the best products meet our rigorous standards before reaching our customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Expert Guidance</h4>
                <p className="text-gray-700">
                  Our team of industry professionals provides expert guidance to help healthcare providers make informed decisions on the right equipment and supplies for their needs.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Customer-Centric Approach</h4>
              <p className="text-gray-700">
                We take a personalized approach with each of our clients, understanding their unique requirements and tailoring our services to meet those needs, ensuring satisfaction at every step.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              By partnering with reputable global manufacturers, we bring world-class medical equipment to our customers at competitive prices, ensuring healthcare professionals have access to the best tools for improving patient care.
            </p>


            <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Our Vision & Mission
            </h3>

            <h4 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-indigo-400 decoration-2">
              Vision
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 p-4 border-l-4 border-gray-800 rounded-lg shadow-md">
              To become Nigeria's leading medical equipment supplier, setting new industry standards for quality, reliability, and
              customer service. We aim to revolutionize healthcare delivery through the provision of cutting-edge medical technology,
              making healthcare services more accessible and efficient across the region.
            </p>

            <h4 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-indigo-400 decoration-2">
            Mission
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 p-4 border-l-4 border-gray-800 rounded-lg shadow-md">
              Our mission is to supply top-tier medical equipment and consumables that empower healthcare professionals, enhance
              patient care, and contribute to healthier communities across Nigeria and Africa. We are dedicated to making healthcare
              solutions more accessible, affordable, and impactful, ensuring that every healthcare provider has the tools they need to
              provide excellent care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
