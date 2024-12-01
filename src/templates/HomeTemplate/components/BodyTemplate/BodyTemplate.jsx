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
    <div className="container-xl mx-10 mt-10">
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
