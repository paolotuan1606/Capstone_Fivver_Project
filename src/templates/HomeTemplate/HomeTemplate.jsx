import React from "react";
import HeaderTemplate from "./components/HeaderTemplate";
import { Outlet } from "react-router-dom";
import FooterTemplate from "./components/FooterTemplate";
import BodyTemplate from "./components/BodyTemplate/BodyTemplate";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
