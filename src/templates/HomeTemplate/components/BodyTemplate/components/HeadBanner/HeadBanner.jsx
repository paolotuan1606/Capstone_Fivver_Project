import React, { useEffect, useMemo, useState } from "react";
import { Dropdown } from "antd";
import { useDebounce } from "use-debounce";
import { CongViecService } from "../../../../../../services/congViec.service";
import Icons from "../../../../../../components/Icons";
import InputSearch from "../../../../../../components/input/inputSearch/InputSearch";
import "./headBanner.scss";

const HeadBanner = () => {
  // const [key, setKey] = useState("");
  // const [value] = useDebounce(key, 1000);
  // const [openDropdown, setOpenDropdown] = useState(false);
  // const [listSearch, setListSearch] = useState([]);
  // const handleChangeKey = (event) => {
  //   setKey(event.target.value);
  // };

  // const handleClick = () => {
  //   setOpenDropdown(true);
  // };
  // useEffect(() => {
  //   if (value) {
  //     CongViecService.getCongViecTheoTen(value)
  //       .then((res) => {
  //         setListSearch(res.data.content);
  //         console.log(res);
  //         setOpenDropdown(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [value]);
  // const itemListSearch = useMemo(() => {
  //   return listSearch.slice(0, 4).map((item, index) => {
  //     return {
  //       key: item.id,
  //       label: (
  //         <div className="flex items-center">
  //           <img
  //             src={item.congViec.hinhAnh}
  //             className="w-16 h-16 me-3"
  //             alt=""
  //           />
  //           <div>
  //             <h4 className="">{item.congViec.tenCongViec}</h4>
  //             <p>{item.congViec.danhGia}</p>
  //           </div>
  //         </div>
  //       ),
  //     };
  //   });
  // }, [listSearch]);
  return (
    <div className="banner">
      <div className="head_banner text-center text-white flex justify-center items-center">
        <div className="space-y-12">
          <h1 className="text-6xl">
            Scale your professional <br /> workforce with
            <span className=""> freelancers</span>
          </h1>
          <Dropdown
            overlayClassName="dropdown-suggest"
            // menu={{
            //   items: itemListSearch,
            //   onMouseLeave: () => {
            //     setOpenDropdown(false);
            //   },
            // }}
            // open={openDropdown}
          >
            <div className="w-full">
              <InputSearch
                // handleClick={handleClick}
                // handleChange={handleChangeKey}
                // value={key}
                placeholder={"Search for any service..."}
              />
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="banner-logo  text-gray-500 flex justify-center gap-5">
        <span>Trusted by:</span>
        <ul className="flex items-center gap-5">
          <li className=" text-gray-500">
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
