import React, { useRef } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
// import Slider from "react-slick";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./popularService.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PopularService = () => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  // let settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   arrows: true,
  //   variableWidth: true,
  // };

  return (
    <div className="container">
      <h1 className="text-5xl md:text-4xl sm:text-4xl">Popular Services</h1>

      <OwlCarousel
        width={100}
        margin={10}
        nav={true}
        smartSpeed={100}
        mouseDrag={false}
        navText={[prevIcon, nextIcon]}
        responsive={{
          0: { items: 3 }, // Màn hình nhỏ nhất hiển thị 3 items
          768: { items: 4 }, // Màn hình trung bình hiển thị 4 items
          1024: { items: 5 }, // Màn hình lớn hiển thị 5 items
        }}
        autoWidth={true}
        slideBy={10}
        className="w-full h-auto guideCarousel "
      >
        <ServiceCard
          color={"#00732E"}
          title={"Website Development"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png"
          }
        />
        <ServiceCard
          color="#FF7640"
          title={"Logo Design"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png"
          }
        />
        <ServiceCard
          color="#003912"
          title={"SEO"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png"
          }
        />
        <ServiceCard
          color="#4D1727"
          title={"Architecture & Interior Design"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
          }
        />
        <ServiceCard
          color="#7A831F"
          title={"Social Media Marketing"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png"
          }
        />
        <ServiceCard
          color="#59301F"
          title={"Voice Over"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
          }
        />
        <ServiceCard
          color="#C66783"
          title={"UGC Video"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/ece24f7f595e2dd44b26567705d1c600-1728279781879/UGC%20Video%20img.png"
          }
        />
        <ServiceCard
          color="#40591F"
          title={"Software Development"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png"
          }
        />
        <ServiceCard
          color="#9D431F"
          title={"Data Science & ML"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png"
          }
        />
        <ServiceCard
          color="#7A831F"
          title={"Product Photography"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png"
          }
        />
        <ServiceCard
          color="#00732E"
          title={"E_Commerce Marketing"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png"
          }
        />
        <ServiceCard
          color="#BE5272"
          title={"Video Editing"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_2.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png"
          }
        />
      </OwlCarousel>
    </div>
  );
};

export default PopularService;
