import React from "react";

function Services() {
  return (
    <>
      <section className="m-2 sm:m-5 md:m-12 lg:m-18 p-6 sm:p-8 md:p-12 rounded-3xl border-[1px] border-red-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Services Portfolio
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { text: "Linkedin Personal Branding", icon: "services-icon-1.svg" },
              { text: "Content Strategy & Writing", icon: "services-icon-2.svg" },
              { text: "Influencer Marketing  (2500 + influencers)", icon: "services-icon-4.svg" },
              { text: "Blogs, Article, Social Content Writing", icon: "services-icon-3.svg" },
              { text: "Digital Brand Strategy", icon: "services-icon-5.svg" },
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
            The Virtual Snipers Impact
            </h2>
          </div>
          <div className="text-center mb-8">
            <p className="text-sm sm:text-base md:text-lg">
            When you collaborate with us, our team of expert strategists and content creators will craft a personal brand that delivers powerful results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
            {[
              { text: "Top search rankings", icon: "content-effect-icon-1.svg" },
              { text: "High-quality Enquiries / Leads", icon: "services-icon-2.svg" },
              { text: "Constant Revenue Growth", icon: "content-effect-icon-1.svg" },
              { text: "Stronger Reputation & Credibility", icon: "content-effect-icon-4.svg" },
              { text: "Boost Prospect / Client engagement", icon: "content-effect-icon-5.svg" },
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
