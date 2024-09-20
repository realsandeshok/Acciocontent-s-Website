import React from "react";
import TestimonialsCard from "../components/TestimonialsCard";

export const Testimonial = () => {
  return (
    <section className="relative py-10 px-4 md:px-8 lg:px-20">
      <div className="absolute inset-0">
        <img
          src="https://acciocontent.com/_next/static/media/client-bg.a64222b8.png"
          alt="package-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold text-white py-10 md:py-14">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div className="flex justify-center md:col-span-1 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Neha"
              role="Bussiness Owner - Exports"
              testimonial="Virtual Snipers transformed our content strategy with exceptional, targeted copy that truly speaks to our audience. Their attention to detail and ability to capture our brand's voice is unmatched"
            />
          </div>
          <div className="flex justify-center md:col-span-1 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Siddhant"
              role="Ed-Tech Entrepreneur"
              testimonial="The content delivered by Virtual Snipers has been consistently outstanding. They not only understood our complex industry but also communicated our message in a way that was both clear and engaging for our clients."
            />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Emily"
              role="Leadership Consultant"
              testimonial="Working with Virtual Snipers has elevated my personal brand in ways I never imagined. Their strategy made my expertise stand out, and I’ve seen a significant increase in professional opportunities"
            />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Hele Yu"
              role="Finance Leader"
              testimonial="Virtual Snipers helped craft a personal branding strategy that not only reflected who I am but positioned me as an industry leader. Their expertise is a game-changer for anyone looking to level up their personal brand."
            />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Raj"
              role="TBFC"
              testimonial="Virtual Snipers' social media content is on another level. They know how to keep our audience engaged and our brand visible. Our social media presence has never been this dynamic!"
            />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Suke"
              role="Ecommerce Entrepreneur"
              testimonial="Thanks to Virtual Snipers, our social media content is both consistent and compelling. Their creative approach has helped us build a loyal following and generate meaningful engagement."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
