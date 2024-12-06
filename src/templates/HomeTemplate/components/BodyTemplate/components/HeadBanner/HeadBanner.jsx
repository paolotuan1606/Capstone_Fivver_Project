import React, { useEffect, useMemo, useState } from "react";
import { Dropdown } from "antd";
import { useDebounce } from "use-debounce";
import { CongViecService } from "../../../../../../services/congViec.service";
import Icons from "../../../../../../components/Icons";
import InputSearch from "../../../../../../components/input/inputSearch/InputSearch";
import "./headBanner.scss";
import { useNavigate } from "react-router-dom";

const HeadBanner = () => {
  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const navigate = useNavigate(); // Use navigate, not Navigate

  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định của form
    if (key.trim()) {
      navigate(`/list-job-search/search?name=${key}`); // Fix usage of Navigate
      setOpenDropdown(false); // Đóng dropdown nếu đang mở
    }
  };

  useEffect(() => {
    if (value) {
      CongViecService.getCongViecTheoTen(value)
        .then((res) => {
          setListSearch(res.data.content);
          console.log(res);
          setOpenDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value]);

  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item) => {
      return {
        key: item.id,
        label: (
          <div className="flex items-center">
            <img
              src={item.congViec.hinhAnh}
              className="w-16 h-16 me-3"
              alt=""
            />
            <div>
              <h4>{item.congViec.tenCongViec}</h4>
              <p>{item.congViec.danhGia}</p>
            </div>
          </div>
        ),
        onClick: () => {
          navigate(`/list-job-search/search?name=${item.congViec.tenCongViec}`);
          setOpenDropdown(false); // Đóng dropdown khi chọn item
        },
      };
    });
  }, [listSearch]);

  return (
    <div className="banner rounded-2xl">
      <div className="head_banner text-center h-3/4 text-white flex justify-center items-center">
        <div className="md:space-y-12 sm:space-y-3">
          <h1 className="lg:text-6xl md:text-5xl sm:text-2xl">
            Scale your professional <br /> workforce with
            <span className=""> freelancers</span>
          </h1>
          <Dropdown
            overlayClassName="dropdown-suggest"
            menu={{
              items: itemListSearch,
              onMouseLeave: () => {
                setOpenDropdown(false);
              },
            }}
            open={openDropdown}
          >
            <form onSubmit={handleSearchSubmit} className="w-full">
              <InputSearch
                handleClick={() => setOpenDropdown(true)}
                handleChange={handleChangeKey}
                value={key}
                placeholder="What service are you looking for today?"
              />
            </form>
          </Dropdown>
        </div>
      </div>
      <div className="banner-logo h-1/4 text-gray-500 flex justify-center lg:gap-5 sm:gap-2">
        <span className="flex items-center sm:text-sm">Trusted by:</span>
        <ul className="flex items-center lg:gap-5 md:gap-4">
          <li className="text-gray-500">
            <Icons.meta />
          </li>
          <li>
            <Icons.google />
          </li>
          <li>
            <Icons.netflix />
          </li>
          <li>
            <Icons.pg />
          </li>
          <li>
            <Icons.paypal />
          </li>
          <li>
            <Icons.payoneer />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadBanner;
