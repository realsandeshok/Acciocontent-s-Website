import React from "react";
import MissionCard from "../components/MissionCard";

const OurPurpose = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 pt-3">
            Mission & Vision
          </h2>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MissionCard 
            description="At AccioContent, we guide businesses and professionals into the realm of personal branding, helping them become captivating industry leaders."
            // imageUrl="https://acciocontent.com/mission-1-img.png"
          />
          <MissionCard 
            description="We provide the knowledge and tools to transform our clients' personal brands into beacons of influence, prestige, and prosperity."
            // imageUrl="https://acciocontent.com/mission-2-img.png"
          />
          <MissionCard 
            description="Through our expertise in content creation, social media, and brand strategy, we empower clients to build legendary brands that command admiration and loyalty."
            // imageUrl="https://acciocontent.com/mission-3-img.png"
          />
          <MissionCard 
            description="We forge personal brands into indomitable forces, elevating those who seek greatness to the highest levels of brand success."
            // imageUrl="https://acciocontent.com/mission-4-img.png"
          />
        </div> */}

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
          <div className="flex-1 lg:w-1/2 p-4">
            <div className="flex flex-col justify-center gap-y-4 sm:gap-y-5">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 pt-3">
                Mission
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-700 font-semibold">
                We guide business leaders, top professionals to become
                captivating personal brands. We deliver strategies needed to
                transform you into a symbol of prestige, influence, and success.
                Leveraging our mastery in content creation, social media, and
                brand strategy, we empower clients to build personal brands that
                command authority, respect, and admiration. Our mission is to
                elevate those who aspire to attain greatness, turning their
                personal brands into pillars of influence and prosperity.
              </p>
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 pt-3">
                Vision
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-700 font-semibold">
                Our vision is to unlock the untapped potential of professionals
                and leaders by turning their unique stories into powerful
                narratives of success. We aim to elevate personal branding to a
                prestigious art form, where every brand we shape leaves an
                enduring impact, inspiring loyalty and admiration from all who
                engage with it.
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
