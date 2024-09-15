import React from "react";

export const Card = ({ img, title, description}) =>
  {
    return (
      <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-black p-4 h-full w-full">
          <img src={img} alt="" className="h-15 w-15" />
        <h3 className="text-2xl font-bold text-[#b13035] my-2 text-center">
          {title}
        </h3>
        <p className="text-center text-lg p-1">
          {description}
        </p>
      </div>
    );
  };
