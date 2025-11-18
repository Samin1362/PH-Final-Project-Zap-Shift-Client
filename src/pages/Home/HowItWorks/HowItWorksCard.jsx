import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";

const HowItWorksCard = ({ value }) => {
  const { title, paragraph } = value;

  return (
    <div className="bg-white rounded-2xl p-[35px] flex flex-col gap-1">
      <div className="w-[50px] h-[50px]">
        <img className="w-full" src={bookingIcon} alt="" />
      </div>
      <h1 className="font-bold text-secondary text-xl">{title}</h1>
      <p className="text-[#606060] text-justify">{paragraph}</p>
    </div>
  );
};

export default HowItWorksCard;
