import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const values = [
    {
      "title": "Express  & Standard Delivery",
      "paragraph":
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      "title": "Nationwide Delivery",
      "paragraph":
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      "title": "Fulfillment Solution",
      "paragraph":
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      "title": "Cash on Home Delivery",
      "paragraph":
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      "title": "Corporate Service / Contract In Logistics",
      "paragraph":
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      "title": "Parcel Return",
      "paragraph":
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-secondary text-white md:p-[100px] p-5 flex flex-col gap-3 items-center rounded-lg">
      <h1 className="font-extrabold text-[40px]">Our Services</h1>
      <p className="text-center max-w-[718px]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {values.map((value, i) => (
          <ServicesCard key={i} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Services;
