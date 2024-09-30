import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 pt-3">
            About Us
          </h2>
        </div>
        <p className="text-center px-4 sm:px-10 lg:px-40 text-base sm:text-lg lg:text-xl my-3">
          We are the architects behind powerful personal brands, crafting
          stories and strategies that captivate and resonate with your target
          audiences. Our journey began with a vision—to help individuals and
          businesses carve out their unique space in a crowded world. We create
          content that shape identities who leave lasting impressions.
          <br />
        </p>
        <p className="text-center px-4 sm:px-10 lg:px-40 text-base sm:text-lg lg:text-xl my-3">
          With years of experience, we have fine-tuned the art of building
          personal brands to connect and inspire. Every word we write, every
          idea we develop, is designed to elevate your brand, turning it into a
          beacon of influence and trust. With Virtual Snipers, your brand
          evolves from a name to an iconic presence that commands attention and
          respect across media.
        </p>
      </div>
      <div className="flex items-center justify-center py-8 sm:py-10">
        <a href="#getaquote">
          <button className="bg-[#fd454c] text-white text-lg sm:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md hover:bg-red-600 transition-colors duration-300">
            Book Your Consultation Directly
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
