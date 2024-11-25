import { HomeOutlined, StarFilled } from "@ant-design/icons";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import "./HeaderJobDetailTemplate.scss";

const HeaderJobDetailTemplate = ({
  tenLoaiCongViec,
  tenNhomChiTietLoai,
  tenChiTietLoai,
  maChiTietLoaiCongViec,
  tenCongViec,
  avatar,
  tenNguoiTao,
  saoCongViec,
  danhGia,
}) => {
  const location = useLocation();
  return (
    <div className="HeaderJobDetailContent py-7 space-y-7">
      <div className="space-x-4">
        <NavLink to={pathDefault.homePage}>
          <HomeOutlined />
        </NavLink>
        <span>/</span>
        <NavLink to={location.search}>{tenLoaiCongViec}</NavLink>
        <span>/</span>
        <NavLink to={location.search}>{tenNhomChiTietLoai}</NavLink>
        <span>/</span>
        <NavLink
          to={`/list-job/${maChiTietLoaiCongViec}?name=${encodeURIComponent(
            tenChiTietLoai
          )}`}
        >
          {tenChiTietLoai}
        </NavLink>
      </div>
      <h1 className="text-2xl font-bold text-black">{tenCongViec}</h1>
      <div className="flex">
        <img src={avatar} alt="" className="w-16 h-16 rounded-full mr-5" />
        <div className="">
          <p>
            <span className="font-semibold text-slate-500 uppercase">
              {tenNguoiTao}{" "}
            </span>
            | 4 orders in queue
          </p>
          <p>
            {[...Array(saoCongViec)].map((_, index) => (
              <StarFilled key={index} className="mr-1 text-black" />
            ))}
            <span className="text-black font-semibold">{saoCongViec}</span> (
            {danhGia} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderJobDetailTemplate;
