import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GotoChildren from "./GotoChildren";

const GotoService = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
  };
  return (
    <div className="space-y-5">
      <h1 className="text-4xl">Vontélle’s go-to services</h1>
      <Slider {...settings}>
        <GotoChildren
          content={"3D Industrial Design"}
          img={"3D-Industrial-Design"}
        />
        <GotoChildren
          content={`E-commerce `}
          content1={"Website Development"}
          img={"E-commerce-Website-Development"}
        />
        <GotoChildren content={"Email Marketing"} img={"Email-Marketing"} />
        <GotoChildren content={"Press Releases"} img={"Press-Releases"} />
        <GotoChildren content={"Logo Design"} img={"Logo-Design"} />
      </Slider>
    </div>
  );
};

export default GotoService;
