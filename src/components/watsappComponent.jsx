import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const WhatsAppIcon = ({ messageCount = 0 }) => {
  return (
    <div className="relative">
      {/* WhatsApp Icon */}
      <div className="absolute bottom-4 right-4 flex items-center justify-center">
        <div className="relative">
          <a
            href="https://wa.me/1234567890" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            <FaWhatsapp className="text-2xl" />
          </a>

          {/* Badge for message count */}
          {messageCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold h-6 w-6 rounded-full flex items-center justify-center translate-x-1/2 -translate-y-1/2 shadow-md">
              {messageCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
