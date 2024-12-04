import React from "react";
// import aboutUsImage from "../assets/about-us-image.jpg"; // Ensure you have the image in the correct path

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
  <img
    src="https://example.com/your-image.jpg" // Replace this URL with the URL of the web image you want to use
    alt="Medical Equipment"
    className="w-full h-auto rounded-lg shadow-lg object-cover"
  />
</div>


        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Gowlland Ideal Concept</strong> – Your Trusted Medical Equipment Supplier
            <br />
            Located in <strong>Jos Plateau State, Nigeria</strong>, <strong>Gowlland Ideal Concept</strong>, a subsidiary of
            <strong>Gowlland Int'L Ltd</strong>, is a premier supplier of medical equipment and consumables. We are
            committed to providing high-quality medical supplies to healthcare professionals, hospitals, clinics, caregivers,
            and patients. Our dedication to healthcare excellence has made us a trusted name in the medical equipment supply
            industry.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With a focus on improving the quality of healthcare services, <strong>Gowlland Ideal Concept</strong> is proud to
            be a cornerstone in Nigeria's healthcare delivery. Our comprehensive range of medical equipment and consumables is
            designed to meet the needs of healthcare providers across various sectors, including hospitals, clinics, dental
            practices, and medical professionals.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Services and Products</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
            <li>Medical Furniture: Examination tables, hospital beds, and more.</li>
            <li>Diagnostic Equipment: Patient monitors, ECG machines, ultrasound systems, and more.</li>
            <li>Dental Equipment: Dental chairs, surgical instruments, and tools.</li>
            <li>Consumables: Medical gloves, syringes, bandages, and more.</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We cater to a broad market, including healthcare providers in <strong>Jos</strong>, <strong>Plateau State</strong>,
            and across Nigeria. Our services extend to neighboring countries in Africa, ensuring healthcare professionals in
            multiple regions benefit from our top-notch products and services.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment to Quality</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Gowlland Ideal Concept</strong> prides itself on <strong>Quality Assurance</strong>, <strong>Expert Guidance</strong>,
            and a <strong>Customer-Centric Approach</strong>. We partner with reputable global manufacturers to bring world-class
            medical equipment to our customers at competitive prices, ensuring healthcare professionals have access to the best
            tools for improving patient care.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision and Mission</h3>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Vision</h4>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To become Nigeria's leading medical equipment supplier, setting new industry standards for quality, reliability, and
            customer service. We aim to revolutionize healthcare delivery through the provision of cutting-edge medical technology,
            making healthcare services more accessible and efficient across the region.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mb-2">Mission</h4>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to supply top-tier medical equipment and consumables that empower healthcare professionals, enhance
            patient care, and contribute to healthier communities across Nigeria and Africa. We are dedicated to making healthcare
            solutions more accessible, affordable, and impactful, ensuring that every healthcare provider has the tools they need to
            provide excellent care.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Gowlland Ideal Concept</strong>
            <br />
            No. 1 Barracks Road Adjacent Zoo View, Close to St. Theresa's Catholic Church,
            <br />
            Jos Plateau State, Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
