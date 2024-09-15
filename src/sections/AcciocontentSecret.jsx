import React from "react";
import { Card } from "../components/Card";

const AcciocontentSecret = () => {
  return (
    <section className="py-10 px-4 sm:px-10 md:px-20 bg-[#b13035]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white py-10 sm:py-14">
          AccioContent's Secret
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <Card
            img="https://acciocontent.com/secret-icon-1.svg"
            title="Magical Expertise"
            description="Our team of skilled personal branding wizards is well-equipped to meet your unique needs and help you enchant your target audience in your industry."
          />

          <Card
            img="https://acciocontent.com/secret-icon-2.svg"
            title="Magical Expertise"
            description="We have a large pool of talented branding wizards ready to help you achieve your personal branding goals with a wave of their wands."
          />

          <Card
            img="https://acciocontent.com/secret-icon-3.svg"
            title="Magical Expertise"
            description="Our personal branding experts have successfully cast their branding spells for numerous clients across various industries, delivering measurable results and satisfied customers."
          />

          <Card
            img="https://acciocontent.com/secret-icon-4.svg"
            title="Magical Expertise"
            description="We are committed to maximizing the return on your personal branding investment, ensuring that your efforts yield a treasure trove of tangible benefits for your career or business."
          />

          <Card
            img="https://acciocontent.com/secret-icon-5.svg"
            title="Magical Expertise"
            description="Our team maintains a professional, transparent, and open line of communication throughout the branding process, keeping you informed and involved like a trusted member of Dumbledore's Army."
          />

          <Card
            img="https://acciocontent.com/secret-icon-6.svg"
            title="Magical Expertise"
            description="We are known for delivering top-quality service and support to our clients, earning us a strong reputation and loyal customer base in the wizarding world of personal branding."
          />
        </div>
      </div>
    </section>
  );
};

export default AcciocontentSecret;
