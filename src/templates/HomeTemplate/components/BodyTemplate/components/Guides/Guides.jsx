import React from "react";
import Slider from "react-slick";

const Guides = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
  };
  return (
    <div className="container my-20">
      <div className="space-y-4 my-10">
        <h1 className="text-5xl my-5">Guides to help you grow</h1>
        <Slider {...settings}>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="./public/guide-img/side hustle.jpeg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Start a side business</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="./public/guide-img/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Ecommerce business Ideas</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="./public/guide-img/home based online business-fiverr.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">
              Start an online business and work from home
            </p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="./public/guide-img/1682363178357-Howtobuildawebsitefromscratch.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Build a website from scratch</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="./public/guide-img/05 - Article Cover.jpg"
              className="rounded-xl w-96 h-60"
              alt=""
            />
            <p className="font-medium">Grow your business with AI</p>
          </div>
          <div className="space-y-5 mr-4 cursor-pointer">
            <img
              src="./public/guide-img/business logo design-fiverr guide.jpg"
              className="rounded-xl w-80  h-60"
              alt=""
            />
            <p className="font-medium">Create a logo for your business</p>
          </div>
        </Slider>
      </div>
      <div className="bg-red-950 text-white text-center space-y-10 py-10 rounded-lg my-32">
        <h1 className="text-6xl">
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
