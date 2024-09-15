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
              name="Varun Nagrath"
              role="Partner, Professional Firm"
              testimonial="Working with Priyanka and team for the past 3-4 months has been an absolute pleasure. Team Acciocontent helped us with producing timely and relative content and navigating various struggles that firms usually face with Marketing and such other ancillary services. Considering the fact that we are a 50+ year old firm, we had various and challenging requirements which were dealt with expertly by Accioconent. They go the extra-mile and have posted content even on weekends which amplifies the fact that they have treated our firm like their own firm. Their team is very responsive and professional and we could not be happier. Highly recommended."
            />
          </div>
          <div className="flex justify-center md:col-span-1 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Deepankar Kumar"
              role="Professional"
              testimonial="AccioContent transformed my online presence. It helped me to optimize my online presence. They helped to remove the following issues- limited presence in the market, limited brand recognition, uncertain growth prospects, time constraints, and limited employee benefits. Your contributions have helped me to grow and thrive. I am deeply appreciative of your patronage, and I couldn't have done it without you. Thank you for your support, it means the world to me. Your contributions have been instrumental in my success. I am very grateful to the entire team of AccioContent for their inconsistent support, and dedication. They always stand for people and organizations to produce exceptional results consistently."
            />
          </div>
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <TestimonialsCard
              image="https://acciocontent.com/client-comma.svg"
              name="Anup A."
              role="Professional"
              testimonial="Despite my extensive experience across various fields, enhancing the network has always been a challenge for me. However, discovering AccioContent has completely transformed my perspective. Their expertise in branding and networking is unparalleled. They have not only saved me a significant amount of time but also delivered results that exceeded my highest expectations. The innovative strategies they developed have been instrumental in the success and growth of my network and work. AccioContent has truly been of great assistance in my professional prospects."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
