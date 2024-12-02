import React from "react";
import "../FivverProBanner/fivverProBanner.scss";
import Icons from "../../../../../../components/Icons";

const LogoBanner = () => {
  return (
    <div className="my-10">
      <div className="my-10">
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl">
          Make it all happen with freelancers
        </h2>
        <div className="grid md:grid-cols-4 md:gap-6 sm:grid-cols-2 sm:gap-3 mt-10">
          <div className="space-y-3 p-5">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.8badf97.svg"
              alt=""
            />
            <p>Access a pool of top talent across 700 categories</p>
          </div>
          <div className="space-y-3 p-5">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/matching.0eef7cc.svg"
              alt=""
            />
            <p>Enjoy a simple, easy-to-use matching experience</p>
          </div>
          <div className="space-y-3 p-5">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/quickly.6879514.svg"
              alt=""
            />
            <p>Get quality work done quickly and within budget</p>
          </div>
          <div className="space-y-3 p-5">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/happy.42ed7bd.svg"
              alt=""
            />
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
        <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-col-reverse sm:items-center sm:justify-between gap-5">
          <div className="space-y-8">
            <Icons.logoMaker />
            <h2 className="md:text-5xl sm:text-4xl">
              Make an incredible <br /> logo
              <span className="text-orange-500"> in seconds</span>
            </h2>
            <p className="md:text-2xl sm:text-lg text-gray-500">
              Pre-designed by top talent. Just add your touch.
            </p>
            <button className="rounded-lg px-5 py-2 bg-black text-white h-12 mt-7 font-medium md:text-lg sm:text-base">
              Try Fiverr Logo Maker
            </button>
          </div>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png"
            alt=""
            className="md:w-auto sm:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
