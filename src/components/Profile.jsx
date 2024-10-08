import React from "react";

const Profile = ({ img, name, designation, role, color }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-2xl px-4 py-8 h-full w-full relative mx-auto">
      {/* Half Colored Background */}
      <div 
        className="absolute top-0 left-0 h-[25%] w-full rounded-t-2xl" 
        style={{ backgroundColor: color }}>
      </div>

      {/* Name */}
      <h2 className="text-xl md:text-2xl font-bold text-white text-center relative z-10">
        {name}
      </h2>

      {/* Profile Image */}
      <img 
        src={img} 
        alt={name} 
        className="h-40 w-40 object-cover rounded-full relative z-10 mt-10" 
      />

      {/* Arrow Image */}
      <img 
        src="https://acciocontent.com/arrow.png" 
        alt="arrow" 
        className="mt-2 md:mt-4 relative z-10" 
      />

      {/* Designation */}
      <h4 className="text-center text-lg md:text-xl font-semibold p-1 relative z-10 my-4">
        {designation}
      </h4>

      {/* Role Description */}
      {/* <p className="text-center text-sm md:text-base p-1 relative z-10 my-4">
        {role}
      </p> */}
    </div>
  );
};

export default Profile;
