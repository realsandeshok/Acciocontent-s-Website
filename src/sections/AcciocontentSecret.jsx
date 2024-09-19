import React from "react";
import { Card } from "../components/Card";

const AcciocontentSecret = () => {
  return (
    <section className="py-10 px-4 sm:px-10 md:px-20 bg-[#b13035]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white py-10 sm:py-14">
          The Secret Sauce
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <Card
            img="https://acciocontent.com/secret-icon-1.svg"
            title="Expertise You Can Trust"
            description="Seasoned professionals with years of experience in personal branding and content strategy deeply understand the power of words that drive action."
          />

          <Card
            img="https://acciocontent.com/secret-icon-2.svg"
            title="Tailored Solutions for Impact"
            description="Our Content experts carefully analyze your unique strengths, audience, and goals to create bespoke content strategies that amplify your brand’s voice."
          />

          <Card
            img="https://acciocontent.com/secret-icon-3.svg"
            title="Proven Success Across Industries"
            description="Our track record speaks for itself; we have been successfully delivering measurable outcomes that has elevated out clients reputation and reach."
          />

          <Card
            img="https://acciocontent.com/secret-icon-4.svg"
            title="Maximizing Your ROI"
            description="We ensure your brand generates substantial value for your investment — whether it’s new opportunities, enhanced visibility, or increased credibility."
          />

          <Card
            img="https://acciocontent.com/secret-icon-5.svg"
            title="Seamless Communication"
            description="Transparency is at the heart of everything we do. Our team keeps you informed at every step of the process & providing regular updates."
          />

          <Card
            img="https://acciocontent.com/secret-icon-6.svg"
            title="Unmatched Service Excellence"
            description="Personalized support with high-quality execution has helped us build long-lasting partnerships and a reputation for delivering results."
          />
        </div>
      </div>
    </section>
  );
};

export default AcciocontentSecret;
