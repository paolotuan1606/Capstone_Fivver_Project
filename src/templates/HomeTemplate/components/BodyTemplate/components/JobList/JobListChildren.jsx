import React from "react";
import { EllipsisOutlined, HeartOutlined } from "@ant-design/icons";
import "./jobListChildren.scss";

const JobListChildren = ({ img }) => {
  return (
    <div className="rounded-lg relative w-full overflow-hidden">
      <img
        src={`./public/job-list-img/${img}.jpg`}
        className="w-full h-auto rounded-lg"
        alt=""
      />
      <div className="absolute top-0 left-0  bottom-0 rounded-lg flex p-4 justify-between flex-col-reverse items-end">
        <div className="content flex justify-between items-center">
          <div className="text-white">
            <p>
              Featured in:{" "}
              <span className="font-medium">
                Architecture & Interior Design
              </span>{" "}
            </p>
            <p>
              by: <span className="by font-medium">bapzozo</span>
            </p>
          </div>
          <div className="dots cursor-pointer text-white text-3xl px-2 py-1  rounded-full transition-all">
            <EllipsisOutlined />
          </div>
        </div>
        <div className="icon px-3 py-2 bg-slate-100 rounded-full">
          <HeartOutlined />
        </div>
      </div>
    </div>
  );
};

export default JobListChildren;
