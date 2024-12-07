import React from "react";
import { FaYoutube, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialMediaLinks = [
  { name: "YouTube", icon: <FaYoutube />, url: "https://youtu.be/jUwiJsCTOlI?si=_j3zxkHA3w_aJZqM" },
  { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/2348034100655" },
  { name: "Facebook", icon: <FaFacebook />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
  { name: "Instagram", icon: <FaInstagram />, url: "#" },
];

const quickLinks = [
  { link: "Home", path: "home" },
  { link: "About", path: "about" },
  { link: "Services", path: "services" },
  { link: "Equipment", path: "Equipment" },
  // { link: "Blog", path: "blogs" },
  { link: "Contact", path: "contact" },
];

const handleScrollAdjust = (e, path) => {
  e.preventDefault();
  const target = document.getElementById(path);

  if (target) {
    const offset = 100; // Adjust this for sticky headers if necessary
    const elementPosition = target.offsetTop - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: ikyesega@yahoo.com</p>
            <p>Phone: 08034100655, 09071171137</p>
            <p>
              Address: No. 1 Barracks Road Adjacent Zoo View, close to St. Theresa&apos;s Cath.
              Church, Jos Plateau State, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map(({ link, path }) => (
                <li key={path}>
                  <a
                    href={`#${path}`}
                    onClick={(e) => handleScrollAdjust(e, path)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GOWLLAND INT&apos;L LTD - RC : RC/JS/1737619. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
