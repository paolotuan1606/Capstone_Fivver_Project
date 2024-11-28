import React from "react";
import "../FivverProBanner/fivverProBanner.scss";
import Icons from "../../../../../../components/Icons";

const LogoBanner = () => {
  return (
    <div className="my-10">
      <div className="my-10">
        <h2 className="text-5xl">Make it all happen with freelancers</h2>
        <div className="grid grid-cols-4 gap-6 mt-10">
          <div className="space-y-3 p-5">
            <img src="./public/logo-banner/categories.svg" alt="" />
            <p>Access a pool of top talent across 700 categories</p>
          </div>
          <div className="space-y-3 p-5">
            <img src="./public/logo-banner/matching.svg" alt="" />
            <p>Enjoy a simple, easy-to-use matching experience</p>
          </div>
          <div className="space-y-3 p-5">
            <img src="./public/logo-banner/quickly.svg" alt="" />
            <p>Get quality work done quickly and within budget</p>
          </div>
          <div className="space-y-3 p-5">
            <img src="./public/logo-banner/happy.svg" alt="" />
            <p>Only pay when you’re happy</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded-lg w-28 bg-black text-white h-12 mt-7 font-medium text-lg">
            Join now
          </button>
        </div>
      </div>
      <div
        className="rounded-2xl p-14 my-28"
        style={{ backgroundColor: "#FFF6F2" }}
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-8">
            <Icons.logoMaker />
            <h2 className="text-5xl">
              Make an incredible <br /> logo<span> in seconds</span>
            </h2>
            <p className="text-2xl text-gray-500">
              Pre-designed by top talent. Just add your touch.
            </p>
            <button className="rounded-lg px-5 py-2 bg-black text-white h-12 mt-7 font-medium text-lg">
              Try Fiverr Logo Maker
            </button>
          </div>
          <img
            src="./public/logo-banner/logo-maker.png"
            alt=""
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
