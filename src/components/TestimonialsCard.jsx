import React from "react";

const TestimonialsCard = ({image, name, role, testimonial}) => {
  return (
    //     <div className="flex flex-col justify-start items-start rounded-xl text-white bg-[#373b47] shadow-black p-4 h-full w-full">
    //     <img src={img} alt="" className="h-15 w-15" />
    //   <p className="p-1">
    //     {description}
    //   </p>
    //   <h3 className="text-2xl font-bold my-3">
    //     {title}
    //   </h3>
    // </div>

    <div className="bg-white px-6 py-9 rounded-lg shadow-lg flex flex-col items-start max-w-sm">
      <img src={image} alt={name} className="w-10 h-10 rounded-full mb-4" />
      <p className="text-start text-gray-700 mb-8 font-normal">{testimonial}</p>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <h4 className="text-xl font-semibold text-gray-500 mb-4">{role}</h4>
    </div>
  );
};

export default TestimonialsCard;
