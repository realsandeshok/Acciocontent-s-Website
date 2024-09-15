import React from "react";

export const Card1 = ({ img, title, description}) =>
  {
    return (
      <div className="flex flex-col justify-start items-start rounded-xl text-white bg-[#373b47] shadow-black p-4 h-full w-full">
          <img src={img} alt="" className="h-15 w-15" />
        <h3 className="text-2xl font-bold my-3">
          {title}
        </h3>
        <p className="p-1">
          {description}
        </p>
      </div>
    );
  };