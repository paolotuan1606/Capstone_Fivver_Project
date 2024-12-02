import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GotoChildren from "./GotoChildren";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../PopularService/popularService.scss";

const GotoService = () => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   variableWidth: true,
  // };
  return (
    <div className="space-y-5">
      <h1 className="lg:text-4xl sm:text-3xl">Vontélle’s go-to services</h1>
      <OwlCarousel
        className="guideCarousel my-8"
        width={100}
        margin={20}
        nav={true}
        smartSpeed={800}
        mouseDrag={false}
        navText={[prevIcon, nextIcon]}
        responsive={{
          0: { items: 2 }, // Màn hình nhỏ nhất hiển thị 2 items
          768: { items: 2 }, // Màn hình trung bình hiển thị 4 items
          1024: { items: 3 }, // Màn hình lớn hiển thị 6 items
        }}
      >
        <GotoChildren
          content={"3D Industrial Design"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_2.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png"
          }
        />
        <GotoChildren
          content={`E-commerce `}
          content1={"Website Development"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_2.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666565/E-commerce-Website-Development_2x.png"
          }
        />
        <GotoChildren
          content={"Email Marketing"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_2.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666560/Email-Marketing_2x.png"
          }
        />
        <GotoChildren
          content={"Press Releases"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_2.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666567/Press-Releases_2x.png"
          }
        />
        <GotoChildren
          content={"Logo Design"}
          img={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_2.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666561/Logo-Design_2x.png"
          }
        />
      </OwlCarousel>
    </div>
  );
};

export default GotoService;
