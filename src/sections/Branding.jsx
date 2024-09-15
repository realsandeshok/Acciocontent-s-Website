import React from "react";

function Branding() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 m-4 sm:m-8 lg:m-16">
      <div className="flex-1 lg:w-1/2 p-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Why Branding?
        </h2>
        <p className="text-lg sm:text-xl  text-gray-700 font-semibold">
          Branding is the enchanting essence of your business, the story you
          tell, and the promise you make to customers. Investing in branding is
          crucial because it embraces the power of branding and watches your business soar, leaving
          competitors spellbound.
        </p>
        <div className="flex items-center justify-start pt-6 sm:pt-8 lg:pt-10 text-lg sm:text-xl">
          <button className="bg-[#fd454c] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md hover:bg-red-600 transition-colors duration-300">
            Book Your Consultation Directly
          </button>
        </div>
      </div>
      <div className="flex-1 lg:w-1/2 p-4 mt-8 lg:mt-0">
        <img
          src="https://acciocontent.com/whyBranding.png" 
          alt="Descriptive Alt Text"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Branding;
