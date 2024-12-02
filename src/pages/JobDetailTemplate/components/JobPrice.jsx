import React, { useState } from "react";
import "./JobPrice.scss";
import { Tabs } from "antd";
import {
  FieldTimeOutlined,
  RetweetOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const JobPrice = ({ giaTien }) => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Basic",
      children: (
        <div className="space-y-5 p-5">
          <div className="flex justify-between text-2xl font-semibold">
            <p>BASIC</p>
            <p>US${giaTien}</p>
          </div>
          <p className="text-lg font-semibold">
            BASIC SUPPORT Starter Package with a single design concept
          </p>
          <div className="flex space-x-5">
            <div className="flex space-x-3">
              <FieldTimeOutlined className="icon" />
              <p className="font-semibold">3-day delivery</p>
            </div>
            <div className="flex space-x-3">
              <RetweetOutlined className="icon" />
              <p className="font-semibold">Revisions</p>
            </div>
          </div>
          <div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">1 concept included</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Logo transparency</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Vector file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Printable file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Include source file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Stationery designs</p>
            </div>
          </div>
          <button className="button">Continue ( US${giaTien} )</button>
          <a href="#" className="compareLink">
            Compare Packages
          </a>
        </div>
      ),
    },
    {
      key: "2",
      label: "Standard",
      children: (
        <div className="space-y-5 p-5">
          <div className="flex justify-between text-2xl font-semibold">
            <p>STANDARD</p>
            <p>US${giaTien}</p>
          </div>
          <p className="text-lg font-semibold">
            STANDARD SUPPORT Starter Package with a single design concept
          </p>
          <div className="flex space-x-5">
            <div className="flex space-x-3">
              <FieldTimeOutlined className="icon" />
              <p className="font-semibold">3-day delivery</p>
            </div>
            <div className="flex space-x-3">
              <RetweetOutlined className="icon" />
              <p className="font-semibold">Revisions</p>
            </div>
          </div>
          <div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">1 concept included</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Logo transparency</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Vector file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Printable file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Include source file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Stationery designs</p>
            </div>
          </div>
          <button className="button">Continue ( US${giaTien} )</button>
          <a href="#" className="compareLink">
            Compare Packages
          </a>
        </div>
      ),
    },
    {
      key: "3",
      label: "Premium",
      children: (
        <div className="space-y-5 p-5">
          <div className="flex justify-between text-2xl font-semibold">
            <p>PREMIUM</p>
            <p>US${giaTien}</p>
          </div>
          <p className="text-lg font-semibold">
            PREMIUM SUPPORT Starter Package with a single design concept
          </p>
          <div className="flex space-x-5">
            <div className="flex space-x-3">
              <FieldTimeOutlined className="icon" />
              <p className="font-semibold">3-day delivery</p>
            </div>
            <div className="flex space-x-3">
              <RetweetOutlined className="icon" />
              <p className="font-semibold">Revisions</p>
            </div>
          </div>
          <div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">1 concept included</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Logo transparency</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Vector file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Printable file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Include source file</p>
            </div>
            <div className="flex space-x-3">
              <CheckOutlined className="icon" />
              <p className="font-semibold">Stationery designs</p>
            </div>
          </div>
          <button className="button">Continue ( US${giaTien} )</button>
          <a href="#" className="compareLink">
            Compare Packages
          </a>
        </div>
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="jobPriceTab "
    />
  );
};

export default JobPrice;
