import React from "react";

const WeCater = () => {
  return (
    <>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10 md:my-9">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            We cater to the enchanting world of
          </h2>
        </div>
        <section className="flex flex-col lg:flex-row items-center justify-between sm:m-8">
          <div className="flex-1 lg:w-1/2 p-4">
            <div className="flex flex-col justify-start gap-y-3 sm:gap-2">
              {[
                {
                  src: "https://acciocontent.com/workspace.svg",
                  text: "Startups",
                },
                {
                  src: "https://acciocontent.com/toothbrush.svg",
                  text: "Entrepreneurs",
                },
                {
                  src: "https://acciocontent.com/auction.svg",
                  text: "Sr. Executives & Management ",
                },
                {
                  src: "https://acciocontent.com/monitor.svg",
                  text: "Business Leaders ",
                },
                {
                  src: "https://acciocontent.com/toothbrush.svg",
                  text: "Investors",
                },
                {
                  src: "https://acciocontent.com/user.svg",
                  text: "Aspiring Influencers ",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center text-xl sm:text-[16px]"
                >
                  <img
                    src={item.src}
                    alt={item.text}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-[#2f4858] font-bold ml-2">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="lg:text-[16px] sm:text-sm text-gray-700 pt-4 sm:pt-5 font-semibold">
              ... and just about everyone who wants to be successful and famous.
            </p>
            <div className="flex items-center justify-start pt-6 sm:pt-8">
              <a href="#schedulemeeting">
                <button className="bg-[#fd454c] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md hover:bg-red-600 transition-colors duration-300 text-lg sm:text-[16px]">
                  Book Your Consultation Directly
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 lg:w-1/2 p-4 mt-8 lg:mt-0">
            <img
              src="https://acciocontent.com/carter.png"
              alt="Descriptive Alt Text"
              className="w-full h-full"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default WeCater;
