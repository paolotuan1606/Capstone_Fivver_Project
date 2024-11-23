import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import { HomeOutlined } from "@ant-design/icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Button } from "antd";
import "./InfoListJob.scss";

const InfoListJob = ({ typeJobDetail }) => {
  const location = useLocation();
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  return (
    <div className="infoListJob sm:container md:container lg:container xl:container 2xl:container py-7 space-y-7">
      <div className="space-x-4">
        <NavLink to={pathDefault.homePage}>
          <HomeOutlined />
        </NavLink>
        <span>/</span>
        <NavLink to={location.search}>{typeJobDetail}</NavLink>
      </div>
      <h1 className="text-3xl font-bold ">{typeJobDetail}</h1>
      <p className="text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, omnis
        nisi esse voluptatem ex aut!
      </p>
      <h2 className="text-2xl font-bold">Select style</h2>
      <OwlCarousel
        className="carouselInfoListJob"
        autoWidth={true}
        loop={false}
        nav={true}
        margin={20}
        smartSpeed={800}
        mouseDrag={false}
        navText={[prevIcon, nextIcon]}
        responsive={{
          0: { items: 2 }, // Màn hình nhỏ nhất hiển thị 2 items
          768: { items: 4 }, // Màn hình trung bình hiển thị 4 items
          1024: { items: 6 }, // Màn hình lớn hiển thị 6 items
        }}
      >
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/flat_minimalist.78e0303.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Minimalist</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/flat_minimalist.78e0303.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Hand-draw</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/hand_drawn.b4b43fa.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Vintage</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/retro.ce533be.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Cartoon</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/mascot_cartoon.6221c5b.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">3D</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/lettering.de2a2a2.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Lettering</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/geometric.c97827f.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Geometric</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/signature.ebc071b.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Signature</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/watercolor_feminine.4f5d7e8.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">Watercolor</span>
          </Button>
        </div>
        <div className="item h-20 leading-6">
          <Button className="flex w-auto h-full btnLogo">
            <div className="w-14 h-14 p-2 bg-slate-100 rounded-full ">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/view_all.62853c2.svg"
                alt=""
              />
            </div>
            <span className="font-bold text-xl">View All</span>
          </Button>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default InfoListJob;
