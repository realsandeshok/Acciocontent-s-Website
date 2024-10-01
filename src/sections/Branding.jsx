import React from "react";

function Branding() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between  mx-2 sm:mx-5  md:mx-12 lg:mx-18">
      <div className="flex-1 lg:w-1/2 px-2">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-3">
          Why Personal Branding?
        </h2>
        <p className="text-sm sm:text-lg  text-gray-700 font-semibold">
          Branding is your core identity. Personal branding is about being
          recognized for your expertise, values, and influence. A strong brand
          distinguishes you in a competitive market enhancing your visibility,
          credibility, and authority.
        </p>
        <p className="text-sm sm:text-lg  text-gray-700 font-semibold pt-2">
          Whether you are a startup founder, aspiring senior executive, business
          leader, a politician, or top-level executive, personal branding opens
          doors to new opportunities​
        </p>
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-3">
          Why is Content Strategy Important in Personal Branding?
        </h2>
        <p className="text-sm sm:text-lg  text-gray-700 font-semibold">
          Content showcases your expertise, builds trust, and engages your
          audience. A well-thought-out content strategy ensures that your
          message is consistent, valuable, and aligned with your brand goals. A
          Personal Branding Strategy is about crafting stories that resonate and
          inspire​.
        </p>
        <div className="flex items-center justify-center md:justify-start pt-6 sm:pt-8 lg:pt-10 text-lg sm:text-xl">
          <a href="#getaquote">
            <button className="bg-[#fd454c] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md hover:bg-red-600 transition-colors duration-300">
              Book Your Consultation Directly
            </button>
          </a>
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
