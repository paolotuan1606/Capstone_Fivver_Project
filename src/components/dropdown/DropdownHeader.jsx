import { Dropdown, Space } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const DropdownHeader = ({ buttonContent = "Fiverr Pro", items }) => {
  const [open, setOpen] = useState(false);

  // Cấu trúc items mới cho Dropdown
  const dropdownItems = items.map((item) => ({
    label: item.label,
    key: item.key,
  }));

  return (
    <Dropdown menu={{ items: dropdownItems }} trigger={["click"]} open={open}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="font-semibold capitalize py-2 px-4 hover:bg-gray-100 duration-200 rounded-md"
      >
        {buttonContent}
        <span className="ml-2">
          <DownOutlined
            className={`${open ? "rotate-180" : "rotate-0"} duration-300`}
          />
        </span>
      </button>
    </Dropdown>
  );
};

export default DropdownHeader;
