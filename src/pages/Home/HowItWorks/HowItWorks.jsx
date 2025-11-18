import React from "react";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  const values = [
    {
      title: "Booking Pick & Drop",
      paragraph:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      paragraph:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      paragraph:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      paragraph:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="my-4">
      <h1 className="text-[32px] font-extrabold text-secondary md:mb-8 mb-3">
        How it Works
      </h1>
      <div className="flex md:flex-row flex-col gap-6 p-3">
        {values.map((value) => (
          <HowItWorksCard value={value}></HowItWorksCard>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
