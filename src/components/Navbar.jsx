import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-[#2f4858] py-4 px-8 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://acciocontent.com/accio-logo.jpg"
            alt="AccioContent Logo"
            className="h-12"
          />
        </a>
        <div className="hidden lg:flex flex-grow items-center justify-center space-x-6 text-[#2f4858] font-bold">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#mission" className="hover:text-gray-300">Mission</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#branding" className="hover:text-gray-300">Branding</a>
          <a href="#wecater" className="hover:text-gray-300">We Cater</a>
          <a href="#getaquote" className="hover:text-gray-300">Get A Quote</a>
          <a href="#team" className="hover:text-gray-300">Team</a>
          <a href="#faqs" className="hover:text-gray-300">FAQs</a>
        </div>
        <div className="hidden lg:flex">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Book a Call
          </button>
        </div>
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

      {isMenuOpen && (
        <div className="lg:hidden bg-white text-[#2f4858] shadow-md mt-2">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#about" className="block py-2 px-4 hover:bg-gray-100">About</a>
            <a href="#mission" className="block py-2 px-4 hover:bg-gray-100">Mission</a>
            <a href="#services" className="block py-2 px-4 hover:bg-gray-100">Services</a>
            <a href="#branding" className="block py-2 px-4 hover:bg-gray-100">Branding</a>
            <a href="#wecater" className="block py-2 px-4 hover:bg-gray-100">We Cater</a>
            <a href="#getaquote" className="block py-2 px-4 hover:bg-gray-100">Get A Quote</a>
            <a href="#team" className="block py-2 px-4 hover:bg-gray-100">Team</a>
            <a href="#faqs" className="block py-2 px-4 hover:bg-gray-100">FAQs</a>
            <button className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
