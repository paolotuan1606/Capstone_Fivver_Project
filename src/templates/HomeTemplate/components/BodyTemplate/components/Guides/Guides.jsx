import React from "react";
import Slider from "react-slick";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../PopularService/popularService.scss";

const Guides = () => {
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   variableWidth: true,
  // };
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  return (
    <div className="container my-20">
      <div className="space-y-4 my-10">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl my-5">
          Guides to help you grow
        </h1>
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
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Start a side business</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Ecommerce business Ideas</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">
              Start an online business and work from home
            </p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Build a website from scratch</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Grow your business with AI</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg "
              className="rounded-xl w-80  h-60"
              alt=""
            />
            <p className="font-medium">Create a logo for your business</p>
          </div>
        </OwlCarousel>
      </div>
      <div className="bg-red-950 text-white text-center space-y-10 py-10 rounded-lg my-32">
        <h1 className="lg:text-6xl  md:text-5xl sm:text-4xl">
          Freelance services at your
          <span className="text-orange-700"> fingertips</span>
        </h1>
        <button className="text-black bg-gray-50 px-5 py-2 rounded-md font-medium hover:bg-gray-200">
          Join Fivver
        </button>
      </div>
    </div>
  );
};

export default Guides;
