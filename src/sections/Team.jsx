import React from "react";
import Profile from "../components/Profile";

const Team = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[#373b47] py-8 md:py-12 lg:py-14">
          Our Team
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          <Profile
            name="Priyanka Karwa"
            img="https://acciocontent.com/priyanka.jpg"
            designation="Co-Founder Headmaster of Branding (CEO)"
            role="Leading the charge with a vision for magical branding strategies."
            color="#fd454c"
          />
          <Profile
            name="Divya"
            img="https://acciocontent.com/Divya.jpg"
            designation="Chief Alchemist (Chief Strategist)"
            role="Crafting transformative branding potions to turn ideas into gold."
            color="#373b47"
          />
          <Profile
            name="Dr. Siddhartha Priya"
            img="https://acciocontent.com/siddharthapriya.jpg"
            designation="Keeper of Secrets (Chief Marketing Officer)"
            role="Guarding and revealing the secrets to successful marketing campaigns."
            color="#fd454c"
          />
          <Profile
            name="Mili"
            img="https://acciocontent.com/mili.jpg"
            designation="Spell Weaver & Potion Master (Creative Director)"
            role="Enchanting audiences with spellbinding content, designs and visuals."
            color="#373b47"
          />

          {/* Centering Remaining Cards on Larger Screens */}
          {/* <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center gap-6 flex-wrap"> */}
            <Profile
              name="Namrata"
              img="https://acciocontent.com/namrata.jpg"
              designation="Muggle Liaison (Business Development Manager)"
              role="Bridging the gap between the magical and non-magical worlds of business."
              color="#fd454c"
            />
            <Profile
              name="Devyanshi"
              img="https://acciocontent.com/devyanshi.jpg"
              designation="Charms Professor (Social Media Manager)"
              role="Casting the perfect charm spells to enchant and grow our social media presence."
              color="#373b47"
            />
            {/* <Profile
              name="Siddharth Sodhi"
              img="https://acciocontent.com/siddhartsodi.jpg"
              designation="Seer (Legal and Compliance Officer)"
              role="Protecting our clients and our business from dark forces of non-compliance."
              color="#fd454c"
            /> */}
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Team;
