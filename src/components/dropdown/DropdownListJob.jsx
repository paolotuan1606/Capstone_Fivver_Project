import { Dropdown } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./DropdownListJob.scss"; // Đảm bảo bạn import đúng file SCSS
import { pathDefault } from "../../common/path";

const DropdownListJob = ({ dropDownId, dropDownContent, menuGroups }) => {
  const items = menuGroups.map((group) => ({
    key: group.id,
    label: (
      <div>
        <h3 className="font-bold text-lg" style={{ marginBottom: "8px" }}>
          {group.tenNhom}
        </h3>
        {group.dsChiTietLoai.map((item) => (
          <div key={item.id} className="text-base">
            <NavLink
              className="hover:text-green-500"
              to={`/list-job/${item.id}?name=${encodeURIComponent(
                item.tenChiTiet
              )}`}
              style={{ display: "block" }}
            >
              {item.tenChiTiet}
            </NavLink>
          </div>
        ))}
      </div>
    ),
  }));

  const menu =
    items.length > 0
      ? { items }
      : { items: [{ key: "empty", label: "Không có dữ liệu" }] };

  return (
    <div className="cursor-pointer dropDownListJob">
      <Dropdown className="dropDown_Job" menu={menu}>
        <NavLink to={`./list-job-on-kind/${dropDownId}`}>
          {dropDownContent}
        </NavLink>
      </Dropdown>
    </div>
  );
};

export default DropdownListJob;
