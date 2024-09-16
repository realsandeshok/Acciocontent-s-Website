import React from "react";
import MissionCard from "../components/MissionCard";

const OurPurpose = () => {
  return (
    <section className="bg-gray-100 p-8 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Mission
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MissionCard 
            description="At AccioContent, we guide businesses and professionals into the realm of personal branding, helping them become captivating industry leaders."
            imageUrl="https://acciocontent.com/mission-1-img.png"
          />
          <MissionCard 
            description="We provide the knowledge and tools to transform our clients' personal brands into beacons of influence, prestige, and prosperity."
            imageUrl="https://acciocontent.com/mission-2-img.png"
          />
          <MissionCard 
            description="Through our expertise in content creation, social media, and brand strategy, we empower clients to build legendary brands that command admiration and loyalty."
            imageUrl="https://acciocontent.com/mission-3-img.png"
          />
          <MissionCard 
            description="We forge personal brands into indomitable forces, elevating those who seek greatness to the highest levels of brand success."
            imageUrl="https://acciocontent.com/mission-4-img.png"
          />
        </div>
        <div className="flex items-center justify-center pt-8 sm:pt-10">
          <button className="bg-[#fd454c] text-white text-lg sm:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md hover:bg-red-600 transition-colors duration-300">
            Book Your Consultation Directly
          </button>
        </div>
        
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
          <div className="flex-1 lg:w-1/2 p-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-10 lg:mb-12">
              Vision
            </h2>
            <div className="flex flex-col justify-center gap-y-4 sm:gap-y-5">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-semibold">
                Our vision is to empower businesses and professionals to harness the immense power of their unique brand stories.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-semibold">
                We aim to elevate personal branding to an art form, enabling our clients to create enchanting narratives that leave a lasting impact in both the magical and non-magical worlds.
              </p>
            </div>
          </div>
          <div className="flex-1 lg:w-1/2 p-4 mt-8 lg:mt-0">
            <img
              src="https://acciocontent.com/vision-right-img.png"
              alt="Vision"
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPurpose;
