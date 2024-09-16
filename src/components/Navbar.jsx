import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-white text-[#2f4858] py-4 px-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://acciocontent.com/accio-logo.jpg"
            alt="AccioContent Logo"
            className="h-10"
          />
        </a>
        {/* Full menu for screens larger than 1024px */}
        <div className="hidden lg:flex flex-grow items-center justify-center space-x-4 text-[#2f4858] font-bold">
          <a href="#about" className="hover:text-gray-300 text-sm md:text-base">About</a>
          <a href="#ourpurpose" className="hover:text-gray-300 text-sm md:text-base">Our Purpose</a>
          <a href="#services" className="hover:text-gray-300 text-sm md:text-base">Services</a>
          <a href="#branding" className="hover:text-gray-300 text-sm md:text-base">Branding</a>
          <a href="#wecater" className="hover:text-gray-300 text-sm md:text-base">We Cater</a>
          <a href="#getaquote" className="hover:text-gray-300 text-sm md:text-base">Get A Quote</a>
          <a href="#team" className="hover:text-gray-300 text-sm md:text-base">Team</a>
          <a href="#faqs" className="hover:text-gray-300 text-sm md:text-base">FAQs</a>
        </div>
        {/* "Book a Call" button for larger screens */}
        <div className="hidden lg:flex">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Book a Call
          </button>
        </div>
        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-[#2f4858] hover:text-gray-300 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-[#2f4858] shadow-md mt-2">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#about" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">About</a>
            <a href="#ourpurpose" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">Our Purpose</a>
            <a href="#services" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">Services</a>
            <a href="#branding" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">Branding</a>
            <a href="#wecater" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">We Cater</a>
            <a href="#getaquote" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">Get A Quote</a>
            <a href="#team" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">Team</a>
            <a href="#faqs" onClick={handleLinkClick} className="block py-2 px-4 hover:bg-gray-100">FAQs</a>
            <button className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
