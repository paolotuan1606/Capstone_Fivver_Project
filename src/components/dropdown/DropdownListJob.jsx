import { Dropdown, Menu } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./DropdownListJob.scss";
import { pathDefault } from "../../common/path";

const DropdownListJob = ({ dropDownId, dropDownContent, menuGroups }) => {
  const navigate = useNavigate();
  const items = menuGroups.map((group) => ({
    key: group.id,
    label: (
      <div className="">
        <h3 className="font-bold text-lg" style={{ marginBottom: "8px" }}>
          {group.tenNhom}
        </h3>
        {group.dsChiTietLoai.map((item) => (
          <div key={item.id} className="text-lg ">
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
      : {
          items: [{ key: "empty", label: "Không có dữ liệu" }],
        };

  return (
    <div className="cursor-pointer dropDownListJob">
      <Dropdown menu={menu}>
        <NavLink
          to={`./list-job-on-kind/${dropDownId}`}
          // onClick={(e) =>
          //   e.preventDefault(navigate(`./list-job-on-kind/${dropDownId}`))
          // }
        >
          {dropDownContent}
        </NavLink>
      </Dropdown>
    </div>
  );
};

export default DropdownListJob;
