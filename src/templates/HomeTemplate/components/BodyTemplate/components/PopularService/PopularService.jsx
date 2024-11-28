import React, { useRef } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popularService.scss";

const PopularService = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    variableWidth: true,
  };

  return (
    <div className="container">
      <h1 className="text-5xl">Popular Services</h1>

      <Slider {...settings} className="w-full h-auto ">
        <ServiceCard
          color={"#00732E"}
          title={"Website Development"}
          img={"./public/popular-service-img/website-development.png"}
        />
        <ServiceCard
          color="#FF7640"
          title={"Logo Design"}
          img={"./public/popular-service-img/logo-design.png"}
        />
        <ServiceCard
          color="#003912"
          title={"SEO"}
          img={"./public/popular-service-img/seo.png"}
        />
        <ServiceCard
          color="#4D1727"
          title={"Architecture & Interior Design"}
          img={"./public/popular-service-img/architecture-design.png"}
        />
        <ServiceCard
          color="#7A831F"
          title={"Social Media Marketing"}
          img={"./public/popular-service-img/Social-media-marketing.png"}
        />
        <ServiceCard
          color="#59301F"
          title={"Voice Over"}
          img={"./public/popular-service-img/voice-over.png"}
        />
        <ServiceCard
          color="#C66783"
          title={"UGC Video"}
          img={"./public/popular-service-img/UGC Video img.png"}
        />
        <ServiceCard
          color="#40591F"
          title={"Software Development"}
          img={"./public/popular-service-img/software-development.png"}
        />
        <ServiceCard
          color="#9D431F"
          title={"Data Science & ML"}
          img={"./public/popular-service-img/data-science.png"}
        />
        <ServiceCard
          color="#7A831F"
          title={"Product Photography"}
          img={"./public/popular-service-img/product-photography.png"}
        />
        <ServiceCard
          color="#00732E"
          title={"E_Commerce Marketing"}
          img={"./public/popular-service-img/e-commerce.png"}
        />
        <ServiceCard
          color="#BE5272"
          title={"Video Editing"}
          img={"./public/popular-service-img/video-editing.png"}
        />
      </Slider>
    </div>
  );
};

export default PopularService;
