import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="absolute bottom-10 left-10 flex gap-4">
          <button className="btn btn-primary rounded-full text-black">
            Track Your Parcel
          </button>
          <button className="btn">Be A Rider</button>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImg2} />
        <div className="absolute bottom-10 left-10 flex gap-4">
          <button className="btn btn-primary rounded-full text-black">
            Track Your Parcel
          </button>
          <button className="btn">Be A Rider</button>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImg3} />
        <div className="absolute bottom-10 left-10 flex gap-4">
          <button className="btn btn-primary rounded-full text-black">
            Track Your Parcel
          </button>
          <button className="btn">Be A Rider</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
