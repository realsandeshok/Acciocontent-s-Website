import React from "react";

const MissionCard = ({ description, imageUrl }) => {
  return (
    <div className="w-full shadow-md rounded-3xl overflow-hidden bg-[#b13035]">
      <img src={imageUrl} alt="" className="w-full object-cover" />
      <div className="p-6">
        <p className="text-white text-start">{description}</p>
      </div>
    </div>
  );
};

export default MissionCard;
