import React from "react";
import "./JobDescription.scss";
import { StarFilled } from "@ant-design/icons";
import { Button } from "antd";

const JobDescription = ({
  moTaNgan,
  moTa,
  avatar,
  tenNguoiTao,
  saoCongViec,
  danhGia,
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold my-10">About This Gig</h3>
      <h3 className="text-xl font-bold my-5">Short Description</h3>
      <p className="text-lg    ml-5 ">{moTaNgan}</p>
      <h3 className="text-xl font-bold my-5">Job Description</h3>
      <p className="text-lg  ml-5">{moTa}</p>
      <h3 className="text-2xl font-bold my-10">About the Seller</h3>
      <div className="flex items-center">
        <img className="w-32 h-32 rounded-full mr-5" src={avatar} alt="" />
        <div className="space-y-5">
          <h3 className="text-lg font-bold uppercase">{tenNguoiTao}</h3>
          <p>Web Developer</p>
          <p>
            {[...Array(saoCongViec)].map((_, index) => (
              <StarFilled key={index} className="mr-1 text-yellow-500" />
            ))}
            <span className="text-black font-semibold">{saoCongViec}</span> (
            {danhGia} reviews)
          </p>
          <button className=" btnContact rounded-xl px-8 py-4 ">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
