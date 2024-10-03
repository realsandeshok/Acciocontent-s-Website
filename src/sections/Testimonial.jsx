import React, { useState } from "react";
import TestimonialsCard from "../components/TestimonialsCard";

const testimonials = [
  {
    name: "Neha",
    role: "Business Owner - Exports",
    testimonial: "Virtual Snipers transformed our content strategy with exceptional, targeted copy that truly speaks to our audience. Their attention to detail and ability to capture our brand's voice is unmatched.",
    image: "https://acciocontent.com/client-comma.svg",
  },
  {
    name: "Siddhant",
    role: "Ed-Tech Entrepreneur",
    testimonial: "The content delivered by Virtual Snipers has been consistently outstanding. They not only understood our complex industry but also communicated our message in a way that was both clear and engaging for our clients.",
    image: "https://acciocontent.com/client-comma.svg",
  },
  {
    name: "Emily",
    role: "Leadership Consultant",
    testimonial: "Working with Virtual Snipers has elevated my personal brand in ways I never imagined. Their strategy made my expertise stand out, and I’ve seen a significant increase in professional opportunities.",
    image: "https://acciocontent.com/client-comma.svg",
  },
  {
    name: "Hele Yu",
    role: "Finance Leader",
    testimonial: "Virtual Snipers helped craft a personal branding strategy that not only reflected who I am but positioned me as an industry leader. Their expertise is a game-changer for anyone looking to level up their personal brand.",
    image: "https://acciocontent.com/client-comma.svg",
  },
  {
    name: "Raj",
    role: "TBFC",
    testimonial: "Virtual Snipers' social media content is on another level. They know how to keep our audience engaged and our brand visible. Our social media presence has never been this dynamic!",
    image: "https://acciocontent.com/client-comma.svg",
  },
  {
    name: "Suke",
    role: "Ecommerce Entrepreneur",
    testimonial: "Thanks to Virtual Snipers, our social media content is both consistent and compelling. Their creative approach has helped us build a loyal following and generate meaningful engagement.",
    image: "https://acciocontent.com/client-comma.svg",
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine how many testimonials to show based on screen size
  const isMobile = window.innerWidth < 768;
  const currentTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]];
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

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

        {/* Testimonial cards */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} mb-8`}>
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <TestimonialsCard
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
              />
            </div>
          ))}
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
