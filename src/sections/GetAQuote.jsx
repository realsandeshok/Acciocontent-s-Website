import React from "react";

function GetAQuote() {
  return (
    <>
      <section className="relative py-16 bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://acciocontent.com/pricingbg.png"
            alt="package-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10 px-4 md:px-8">
          <h2 className="text-center text-4xl md:text-5xl text-white font-bold mb-12">
            Get A Quote
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <img
                  src="https://acciocontent.com/brand2.svg"
                  alt="package-icon"
                  className="h-12 w-12"
                />
                <span className="ml-4 text-xl font-extrabold text-[#b13035]">
                  Package 1
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Personal Brand Starter Package
              </h3>
              <p className="mb-6">
                Perfect for individuals who need to get a sense of personal
                branding strategy and guidance to get started on their own.
              </p>
              <h5 className="font-semibold mb-2">Includes :</h5>
              <ul className="list-disc list-inside space-y-2">
                {[
                  "15 mins Discovery Call ",
                  "One Weekly 15-minute progress review",
                  "Instagram or Linkedin or Youtube Profile Optimization.",
                  "Customized personal branding Content plan",
                  "Content Support for 2 short videos and Editing.",
                  "8 Posts based on content plan for Insta / Linkedin OR 4 video editing for Youtube,",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="https://acciocontent.com/_next/static/media/dots.c564385b.svg"
                      alt="check"
                      className="h-6 w-6 mr-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center text-sm align-bottom pt-[17.5rem]">
                <button className="bg-[#fd454c] text-white min-w-60 font-semibold py-4 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
                  Speak to an Expert
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl shadow-lg bg-[#b13035] text-white">
              <div className="flex items-center justify-between mb-4">
                <img
                  src="https://acciocontent.com/legacy1.svg"
                  alt="package-icon"
                  className="h-12 w-12"
                />
                <span className="ml-4 text-xl font-extrabold">Package 2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Personal Brand Premium Package
              </h3>
              <p className="mb-6">
                Perfect for Entrepreneurs who know they need to move to the next
                level in their careers / business and want professional guidance
                & support.
              </p>
              <h5 className="font-semibold mb-2">Includes :</h5>
              <ul className="list-disc list-inside space-y-2">
                {[
                  "60 mins Discovery Call.",
                  "30 Min strategy discussion call.",
                  "Two Weekly 15-minute progress reviews.",
                  "Linkedin or Youtube Profile Optimization.",
                  "Customized Personal Branding Strategy and Content plan Monthly Content Calendar.",
                  "4 Thought leadership content / Authority Articles per month.",
                  "Content / Script Support for 4 short videos and Editing (reels / shorts).",
                  "15 Posts as per content strategy and plan. ",
                  "Monthly Online PR Plan",
                  "Speaker Positions / Panelist for Industry Specific Events",
                  "Interviews with Popular channels on youtube etc",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="https://acciocontent.com/_next/static/media/dots.c564385b.svg"
                      alt="check"
                      className="h-6 w-6 mr-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center text-sm align-bottom pt-[40px]">
                <button className="bg-[#fd454c] min-w-60 text-white font-semibold py-4 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
                  Schedule Personal Brand Consultation
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <img
                  src="https://acciocontent.com/brand2.svg"
                  alt="package-icon"
                  className="h-12 w-12"
                />
                <span className="ml-4 text-xl font-extrabold text-[#b13035]">
                  Package 3
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Custom Linkedin Personal Branding
              </h3>
              <p className="mb-6">
                Perfect for Professionals who want to advance career growth​
                foster valuable connections, and generate professional
                opportunities. Helps establish a thought leadership position
                with expert guidance & support.
              </p>
              <h5 className="font-semibold mb-2">Includes :</h5>
              <ul className="list-disc list-inside space-y-2">
                {[
                  "45 mins Discovery Call",
                  "One Weekly 15-minute progress reviews.",
                  "Linkedin Profile Optimization.",
                  "Customized Linkedin Personal Branding Strategy and Content plan.",
                  "Linkedin Content Calendar.",
                  "4 Thought leadership content / Authority Articles per month.",
                  "20 posts per month including Carousels, Statics & Videos (editing only).",
                  "1 online PR article per month.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="https://acciocontent.com/_next/static/media/dots.c564385b.svg"
                      alt="check"
                      className="h-6 w-6 mr-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center text-sm align-bottom pt-[10rem]">
                <button className="bg-[#fd454c] text-white min-w-60 font-semibold py-4 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
                  Consult Linked Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative py-16 bg-gray-50">
        // Background Image
        <div className="absolute inset-0">
          <img
            src="https://acciocontent.com/_next/static/media/location-bg.0102ab51.png"
            alt="package-bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10 px-4 md:px-8">
          <h2 className="text-center text-4xl md:text-5xl text-white font-bold mb-12">
            Where we are based
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card1
              img="https://acciocontent.com/usa.png"
              title="USA"
              description="8, The Green, STE B, Dover, Delaware 19901."
            />
            <Card1
              img="https://acciocontent.com/canada.png"
              title="CANADA"
              description="Addictive Learning Technology Inc. C/O: Incorp Pro, 170-422 Richards St Vancouver BC V6B 2Z4, Canada."
            />
            <Card1
              img="https://acciocontent.com/location_icon_2.svg"
              title="INDIA"
              description="LawSikho, Space Creattors Heights, 3rd floor, Landmark Cyber Park, Golf Course Extension, Sector 67, Gurgaon, Haryana - 122102."
            />
          </div>
        </div>
      </section> */}
    </>
  );
}

export default GetAQuote;
