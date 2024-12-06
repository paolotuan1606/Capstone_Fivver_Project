import { DownOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import "./ListJobFilter.scss";
import { Switch } from "antd";

const ListJobFilter = ({ result = `170,000` }) => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false); // Trạng thái dính

  const toggleDropdown = (dropdown) => {
    setVisibleDropdown(visibleDropdown === dropdown ? null : dropdown); // Tạo hiệu ứng toggle
  };

  // Hàm xử lý khi cuộn chuột
  useEffect(() => {
    const handleScroll = () => {
      const filterElement = document.querySelector(".ListJobFilterContent");
      if (filterElement) {
        const offsetTop = filterElement.offsetTop; // Vị trí của phần tử trên trang
        if (window.scrollY > offsetTop) {
          setIsSticky(true); // Khi cuộn xuống vượt qua vị trí, bật trạng thái sticky
        } else {
          setIsSticky(false); // Khi quay lại phía trên, tắt trạng thái sticky
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Dọn dẹp khi component bị hủy
    };
  }, []);

  return (
    <div className="ListJobFilter sm:container md:container lg:container xl:container 2xl:container mx-5">
      <div className={`ListJobFilterContent  ${isSticky ? "sticky" : ""}`}>
        <div className="ListJobFilterContent2 sm:container md:container lg:container xl:container 2xl:container py-7 space-y-7 sm:space-y-3 md:space-y-3 lg:space-y-3 xl:flex items-center mx-5">
          <div className="menuContentLeft flex items-center space-x-4">
            <div className="relative">
              <button
                className="btnDropdown font-bold"
                onClick={() => toggleDropdown("logoOptions")}
              >
                <span>Logo options</span> <DownOutlined />
              </button>
            </div>
            <div className="relative">
              <button
                className="btnDropdown font-bold"
                onClick={() => toggleDropdown("sellerDetails")}
              >
                <span>Seller details</span> <DownOutlined />
              </button>
            </div>
            <div className="relative">
              <button
                className="btnDropdown font-bold"
                onClick={() => toggleDropdown("budget")}
              >
                <span>Budget</span> <DownOutlined />
              </button>
            </div>
            <div className="relative">
              <button
                className="btnDropdown font-bold"
                onClick={() => toggleDropdown("deliveryTime")}
              >
                <span>Delivery time</span> <DownOutlined />
              </button>
            </div>
          </div>
          <div className="serviceRight flex items-center space-x-3">
            <Switch />
            <span className="font-bold">Pro services</span>
          </div>
        </div>
      </div>
      <div className="resultSelling flex items-center">
        <p>{result}+ result</p>
        <div className="dropdownSelling flex items-center">
          <span className="mr-3">Sort by: </span>
          <div className="relative">
            <button
              className="btnDropdown font-bold"
              onClick={() => toggleDropdown("bestSelling")}
            >
              <span>Best selling</span> <DownOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListJobFilter;
