import React from "react";
import JobListChildren from "./JobListChildren";
import "./jobList.scss";

const JobList = () => {
  return (
    <div className="mb-20">
      <h1 className="text-5xl">Made on Fiverr</h1>

      <div className="grid job-list mt-10 gap-3">
        <JobListChildren img={"Kitchen Renders 3 (1)"} />
        <JobListChildren img={"_A730120- Living and dining angle 2 fix"} />
        <JobListChildren img={"2024-10-21 VD markcook1 2 view IN-view1"} />
        <JobListChildren
          img={"2024-10-29 QY mwdesign 5 view IN_VIEW 1_FIX 2"}
        />
        <JobListChildren img={"7221E14E-C7CC-4796-9A0B-9D83C808A7A9"} />
        <JobListChildren img={"Final_01"} />
        <JobListChildren img={"gillian_v2"} />
        <JobListChildren img={"Great room 1"} />
        <JobListChildren img={"LIVING 2"} />
        <JobListChildren img={"Mockup"} />
        <JobListChildren img={"Mockup_Daughters caffee and books_logo_1"} />
        <JobListChildren img={"Moon girl1"} />
        <JobListChildren img={"Render 1 - rev"} />
        <JobListChildren img={"RLD_5528"} />
        <JobListChildren img={"view6_fix5"} />
        <JobListChildren img={"Render-01"} />
      </div>
    </div>
  );
};

export default JobList;
