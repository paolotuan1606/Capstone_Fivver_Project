import React from "react";
import "./TopComment.scss";
import { DislikeFilled, LikeFilled, StarFilled } from "@ant-design/icons";

const TopComment = ({
  avatar,
  tenNguoiBinhLuan,
  saoBinhLuan,
  noiDung,
  ngayBinhLuan,
}) => {
  return (
    <div className="comments ml-10 my-5">
      <div className=" flex items-center">
        <img className="w-8 h-8 rounded-full mr-5" src={avatar} alt="" />
        <p className="text-lg font-semibold">
          {tenNguoiBinhLuan}{" "}
          <span className="text-yellow-500">
            <StarFilled /> {saoBinhLuan}
          </span>
        </p>
      </div>
      <div className="pl-10 space-y-6">
        <div className=" flex items-center">
          <img
            className="h-7 w-10 mr-5"
            src="../../../public/united-states.png"
            alt=""
          />
          <p>United States</p>
        </div>
        <p>Comment : {noiDung}</p>
        <p className="text-gray-400">Date : {ngayBinhLuan}</p>
        <div className="flex items-center space-x-5">
          <a href="#" className="font-semibold hover:underline">
            <LikeFilled /> Helpful
          </a>
          <a href="#" className="font-semibold hover:underline ">
            <DislikeFilled /> Not Helpful
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopComment;
