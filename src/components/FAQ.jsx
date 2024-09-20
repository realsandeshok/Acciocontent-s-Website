import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should I invest in content writing with Virtual Snipers?",
      answer:
        "At Virtual Snipers, we believe that high-quality content is the backbone of a powerful personal brand. Our team of expert writers creates tailored content that resonates with your target audience, positioning you as an authority in your field and driving measurable results. This investment enhances visibility, credibility, and engagement, ultimately leading to growth opportunities for your brand.",
    },
    {
      question: "How can Virtual Snipers help with personal branding?",
      answer:
        "Personal branding is about defining and projecting your unique value. At Virtual Snipers, we help you craft a cohesive brand identity that showcases your strengths, values, and expertise. Our proven strategies have helped professionals elevate their influence, build thought leadership, and attract new opportunities by establishing a consistent, memorable presence across platforms.",
    },
    {
      question: "What makes Virtual Snipers' social media content strategy unique?",
      answer:
        "Virtual Snipers combines creativity with data-driven insights to craft social media content that drives engagement and brand visibility. We understand your audience and create targeted content that resonates with them, ensuring that your brand remains top of mind, leading to higher interaction rates and growth in followers, leads, and conversions.",
    },
    {
      question: "How soon can I expect results from Virtual Snipers’ content strategy?",
      answer:
        "While results can vary depending on your industry and goals, most clients begin seeing increased engagement and improved brand visibility within the first three months. Our ongoing analysis and optimization ensure that your strategy continues to evolve and deliver sustainable long-term success.",
    },
    {
      question:
        "What platforms does Virtual Snipers specialize in for personal branding?",
      answer:
        "We specialize in creating compelling personal brands on platforms like LinkedIn, Instagram, and personal blogs. Our expertise in these areas ensures that your online presence is optimized for the right audience, enhancing your credibility and reach.",
    },
    {
      question:
        "How does Virtual Snipers ensure my personal brand stands out?",
      answer:
        "By focusing on your unique voice, values, and industry expertise, we create a brand narrative that highlights your strengths and positions you as a thought leader. Our tailored approach ensures that your brand is distinctive and memorable, setting you apart from competitors.",
    },
    {
      question:
        " What is the best platform for personal branding?",
      answer:
        "LinkedIn is often the most effective platform for professionals looking to build their personal brand. It allows for industry-specific content sharing, networking, and visibility. However, the right platform for you depends on your target audience and industry.",
    },
    {
      question:
        "How does content writing impact SEO and online visibility?",
      answer:
        "Quality content optimized with relevant keywords significantly boosts your search engine rankings. At Virtual Snipers, we ensure that your content not only engages readers but also improves your online visibility, making it easier for potential clients to find you.",
    },
    {
      question:
        "How often should I update my content strategy?",
      answer:
        "Content strategies should be revisited at least every quarter. This allows you to analyze performance, adapt to audience needs, and stay ahead of trends, ensuring your personal brand continues to grow effectively.",
    },
  ];

  return (
    <section className="flex flex-col justify-center max-w-full py-12 bg-[#f6f0ee] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 pt-3">
          FAQ's
        </h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden"
            >
              <div
                className="py-3 px-4 sm:py-4 sm:px-6 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <span
                    className={`transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    } transition-transform mr-3 sm:mr-5`}
                  >
                    <img
                      src="https://acciocontent.com/faq-arrow.svg"
                      alt="Toggle"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
                </div>
              </div>
              <div
                className={`transition-max-height duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="py-3 px-4 sm:py-4 sm:px-6 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
