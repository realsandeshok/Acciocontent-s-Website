import React from "react";

const Vision = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 m-4 sm:m-8 lg:m-16">
      <div className="flex-1 lg:w-1/2 p-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-10 lg:mb-12">
          Vision
        </h2>
        <div className="flex flex-col justify-center gap-y-4 sm:gap-y-5">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-semibold">
            Our vision is to empower businesses and professionals to harness the
            immense power of their unique brand stories.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-semibold">
            We aim to elevate personal branding to an art form, enabling our
            clients to create enchanting narratives that leave a lasting impact
            in both the magical and non-magical worlds.
          </p>
        </div>
      </div>
      <div className="flex-1 lg:w-1/2 p-4 mt-8 lg:mt-0">
        <img
          src="https://acciocontent.com/vision-right-img.png"
          alt="Descriptive Alt Text"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Vision;
