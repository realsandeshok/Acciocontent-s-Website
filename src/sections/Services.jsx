import React from "react";

function Services() {
  return (
    <>
      <section className="m-4 sm:m-10 md:m-20 lg:m-28 p-6 sm:p-8 md:p-12 rounded-3xl border-[1px] border-red-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { text: "Brand Positioning & Messaging", icon: "services-icon-1.svg" },
              { text: "Content Strategy & Creation", icon: "services-icon-2.svg" },
              { text: "Social Media Management", icon: "services-icon-3.svg" },
              { text: "Influencer Marketing", icon: "services-icon-4.svg" },
              { text: "Search Engine Optimization (SEO)", icon: "services-icon-5.svg" },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-full">
                <img
                  src={`https://acciocontent.com/${service.icon}`}
                  alt={service.text}
                  className="h-16 sm:h-20 md:h-24 py-2"
                />
                <p className="text-center text-lg sm:text-xl font-semibold mt-2">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-[1px] border-red-400 my-12 sm:my-16 mx-auto w-3/4 max-w-4xl" />

          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              The AccioContent Effect
            </h2>
          </div>
          <div className="text-center mb-8">
            <p className="text-sm sm:text-base md:text-lg">
              When you partner with AccioContent, our team of skilled wordsmiths
              and branding enchanters will conjure up a powerful personal brand
              that delivers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
            {[
              { text: "More high-quality client inquiries", icon: "content-effect-icon-1.svg" },
              { text: "Enhanced reputation and credibility", icon: "services-icon-2.svg" },
              { text: "Improved client engagement and retention", icon: "content-effect-icon-1.svg" },
              { text: "Greater online visibility and search engine ranking", icon: "content-effect-icon-4.svg" },
              { text: "Increased revenue through strategic lead generation", icon: "content-effect-icon-5.svg" },
            ].map((effect, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-full">
                <img
                  src={`https://acciocontent.com/${effect.icon}`}
                  alt={effect.text}
                  className="h-16 sm:h-20 md:h-24 py-2"
                />
                <p className="text-center text-lg sm:text-xl font-semibold mt-2">
                  {effect.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center mb-5">
        <button className="bg-[#fd454c] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-md hover:bg-red-600 transition-colors duration-300 text-sm sm:text-base md:text-lg">
          Book Your Consultation Directly
        </button>
      </div>
    </>
  );
}

export default Services;
