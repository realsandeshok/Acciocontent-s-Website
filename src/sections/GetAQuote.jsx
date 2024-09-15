import React from "react";
import { Card1 } from "../components/Card1";

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
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                Personal Brand Builder
              </h3>
              <p className="mb-6">
                Perfect for individuals who need a foundational personal branding
                strategy and guidance to kick-start their brand-building efforts.
              </p>
              <h5 className="font-semibold mb-2">Includes :</h5>
              <ul className="list-disc list-inside space-y-2">
                {[
                  "Bi-weekly 30-minute progress review and assistance",
                  "Optimization of two social media profiles (your choice)",
                  "Customized personal branding action plan",
                  "Ghostwriting and editing of thought leadership content (4 pieces per month)",
                  "2 short videos based on specialization (Editing)",
                  "1 LinkedIn Live",
                  "1 Video Interview on YouTube",
                  "4 Extra Posts related to other achievements, team, etc.",
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
                Personal Brand Legacy Builder
              </h3>
              <p className="mb-6">
                A comprehensive, high-touch program for individuals who want to
                accelerate their personal brand growth and make a significant
                impact in their industry or niche.
              </p>
              <h5 className="font-semibold mb-2">Includes :</h5>
              <ul className="list-disc list-inside space-y-2">
                {[
                  "Bi-weekly 30-minute progress review and assistance",
                  "Personal brand crisis management and reputation monitoring services",
                  "Optimization of two social media profiles (your choice)",
                  "Customized personal branding action plan",
                  "Ghostwriting and editing of thought leadership content (6 pieces per month)",
                  "Connecting to resources for Media Coverage",
                  "Access to a curated selection of personal branding resources",
                  "2 short videos based on specialization",
                  "2 LinkedIn Live",
                  "1 Video Interview on YT",
                  "8 Extra Posts related to other achievements, team, etc.",
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
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center mb-5 text-2xl">
        <button className="bg-[#fd454c] text-white font-semibold py-4 px-8 rounded-md hover:bg-red-600 transition-colors duration-300">
          Book Your Consultation Directly
        </button>
      </div>

      <section className="relative py-16 bg-gray-50">
        {/* Background Image */}
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
      </section>
    </>
  );
}

export default GetAQuote;
