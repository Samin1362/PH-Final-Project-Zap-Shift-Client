import React from "react";
import servicesImg from "../../../assets/service.png";

const ServicesCard = ({ value }) => {
  const { title, paragraph } = value;
  console.log(title)
  return (
    <div className="bg-white hover:bg-primary p-8 flex flex-col gap-4 text-black items-center rounded-2xl">
      <div>
        <img src={servicesImg} alt="" />
      </div>
      <h1 className="font-bold text-2xl text-center">{title}</h1>
      <p className="text-center">{paragraph}</p>
    </div>
  );
};

export default ServicesCard;
