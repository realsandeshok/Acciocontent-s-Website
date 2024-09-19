import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does the branding process work?",
      answer:
        "Our branding process begins with a thorough understanding of your business, goals, and target audience. We then conduct market research and develop a strategic plan. The next steps include designing your brand identity, creating compelling content, and implementing marketing campaigns. We ensure ongoing support and adjustments based on feedback and performance.",
    },
    {
      question: "Why is branding important for my business?",
      answer:
        "Branding is crucial as it helps create a unique identity for your business, builds trust with your audience, and sets you apart from competitors. A strong brand can drive customer loyalty, enhance market positioning, and support your marketing efforts, ultimately leading to increased sales and business growth.",
    },
    {
      question: "How long does it take to develop a brand?",
      answer:
        "The time required to develop a brand varies depending on the complexity of the project and your specific needs. Typically, a complete branding project can take anywhere from a few weeks to a few months. We ensure to keep you updated throughout the process and work efficiently to meet your deadlines.",
    },
    {
      question: "Can Accio Content help with rebranding an existing business?",
      answer:
        "Yes, we specialise in both branding new businesses and rebranding existing ones. Whether you need a complete brand overhaul or just a refresh, we can help you realign your brand with your current goals and market trends to ensure continued growth and relevance.",
    },
    {
      question:
        "What makes Accio Content different from other branding agencies?",
      answer:
        "Accio Content stands out due to our personalised approach, industry expertise, and commitment to innovation. We provide customised solutions tailored to your specific business needs and work closely with you to ensure your brand truly represents your vision and values.",
    },
    {
      question:
        "Do you offer ongoing support after the initial branding project is completed?",
      answer:
        "Yes, we provide ongoing support to ensure your brand continues to grow and evolve. Our services include regular updates, performance analysis, and adjustments to your branding strategy as needed. We are committed to your long-term success.",
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
