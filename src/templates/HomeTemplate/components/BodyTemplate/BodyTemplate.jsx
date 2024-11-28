import React from "react";
import "./bodyTemplate.scss";
import InputSearch from "../../../../components/input/inputSearch/InputSearch";
import { Dropdown } from "antd";
import { useDebounce } from "use-debounce";
import { CongViecService } from "../../../../services/congViec.service";
import Icons from "../../../../components/Icons";
import HeadBanner from "./components/headBanner/HeadBanner";
import JobItemCart from "./components/JobItemCart/JobItemCart";
import Guides from "./components/Guides/Guides";
import PopularService from "./components/PopularService/PopularService";
import FivverProBanner from "./components/FivverProBanner/FivverProBanner";
import FivverVideo from "./components/FivverVideo/FivverVideo";
import GotoService from "./components/GotoService/GotoService";
import LogoBanner from "./components/LogoBanner/LogoBanner";
import JobList from "./components/JobList/JobList";

const BodyTemplate = () => {
  return (
    <div className="container-xl mx-10 mt-11">
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
