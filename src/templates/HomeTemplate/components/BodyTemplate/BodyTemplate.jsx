import React from "react";
import HeadBanner from "./components/HeadBanner/HeadBanner";
import JobItemCart from "./components/JobItemCart/JobItemCart";
import Guides from "./components/Guides/Guides";
import PopularService from "./components/PopularService/PopularService";
import FivverProBanner from "./components/FivverProBanner/FivverProBanner";
import FivverVideo from "./components/FivverVideo/FivverVideo";
import GotoService from "./components/GotoService/GotoService";
import LogoBanner from "./components/LogoBanner/LogoBanner";
import JobList from "./components/JobList/JobList";
import "./bodyTemplate.scss";

const BodyTemplate = () => {
  return (
    <div className="sm:container md:container lg:container xl:container 2xl:container mx-5 mt-10">
      <HeadBanner />
      <JobItemCart />
      <PopularService />
      <FivverProBanner />
      <FivverVideo />
      <GotoService />
      <LogoBanner />
      <JobList />
      <Guides />
    </div>
  );
};

export default BodyTemplate;
