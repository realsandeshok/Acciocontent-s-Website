import React from 'react';
import MissionCard from '../components/MissionCard';

const Mission = () => {
  return (
    <section className="bg-gray-100 p-8 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Mission
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <MissionCard 
            description="At AccioContent, we guide businesses and professionals into the realm of personal branding, helping them become captivating industry leaders"
            imageUrl="https://acciocontent.com/mission-1-img.png"
          />
          <MissionCard 
            description="We provide the knowledge and tools to transform our clients personal brands into beacons of influence, prestige, and prosperity."
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
      </div>
    </section>
  );
}

export default Mission;
