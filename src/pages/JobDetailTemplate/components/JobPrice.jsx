import React, { useState } from "react";
import "./JobPrice.scss";
import { Radio, Tabs } from "antd";
const JobPrice = ({ giaTien }) => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Basic",
      children: (
        <>
          <div className="flex justify-between">
            <p>Basic</p>
            <p>${giaTien}</p>
          </div>
          <p>BASIC SUPPORT Starter Package with a single design concept</p>
        </>
      ),
    },
    {
      key: "2",
      label: "Standard",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Premium",
      children: "Content of Tab Pane 3",
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default JobPrice;
