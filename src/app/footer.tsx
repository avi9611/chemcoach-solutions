import React from "react";
import Socials from "@/components/Socials";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`bg-gray-800 text-gray-300 py-6  mx-auto w-full ${className}`}
    >
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-white">
            Chemcoach Solutions
          </h3>
          <p className="text-sm mt-2">
            Empowering chemists worldwide with expertise and dedication to
            advancing the field of chemistry.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <Socials
            containerStyles="flex gap-4"
            iconStyles="w-8 h-8 border border-gray-500 rounded-full flex justify-center items-center text-gray-300 text-sm hover:bg-blue-500 hover:text-white hover:transition-all duration-300"
          />
        </div>

        {/* Contact Information */}
        <div className="text-sm mt-4 md:mt-0">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:sandeepascube@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sandeepascube@gmail.com
            </a>
          </p>
          <p>
            📱 Phone:{" "}
            <a
              href="tel:+918943230074"
              className="text-blue-400 hover:underline"
            >
              (+91) 8943230074
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Chemcoach Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
