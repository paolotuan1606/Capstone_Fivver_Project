import React from "react";
import JobListChildren from "./JobListChildren";
import "./jobList.scss";

const JobList = () => {
  return (
    <div className="mb-20">
      <h1 className="text-5xl">Made on Fiverr</h1>

      <div className="grid job-list mt-10 gap-3">
        <JobListChildren img={"KitchenRenders3(1)"} />
        <JobListChildren img={"A730120-Livinganddiningangle2fix"} />
        <JobListChildren img={"2024-10-21VDmarkcook12viewIN-view1"} />
        <JobListChildren img={"2024-10-29QYmwdesign5viewIN_VIEW 1_FIX2"} />
        <JobListChildren img={"7221E14E-C7CC-4796-9A0B-9D83C808A7A9"} />
        <JobListChildren img={"Final_01"} />
        <JobListChildren img={"gillian_v2"} />
        <JobListChildren img={"Greatroom1"} />
        <JobListChildren img={"LIVING2"} />
        <JobListChildren img={"Mockup"} />
        <JobListChildren img={"Mockup_Daughterscaffeeandbooks_logo_1"} />
        <JobListChildren img={"Moongirl1"} />
        <JobListChildren img={"Render1-rev"} />
        <JobListChildren img={"RLD_5528"} />
        <JobListChildren img={"view6_fix5"} />
        <JobListChildren img={"Render-01"} />
      </div>
    </div>
  );
};

export default JobList;
