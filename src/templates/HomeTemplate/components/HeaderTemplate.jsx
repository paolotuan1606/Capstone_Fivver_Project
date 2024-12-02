import React, { useContext, useEffect, useMemo, useState } from "react";
import Icons from "../../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../../common/path";
import DropdownHeader from "../../../components/dropdown/DropdownHeader";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/button/ButtonCustom";
import {
  DownOutlined,
  GlobalOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import InputSearch from "../../../components/input/inputSearch/InputSearch";
import { CongViecService } from "../../../services/congViec.service";
import { useDebounce } from "use-debounce";
import { Avatar, Dropdown, Space } from "antd";
import "./headerTemplate.scss";
import { useSelector } from "react-redux";
import useViewPort from "../../../hooks/useViewPort";
import ListJobBarTemplate from "../../../pages/ListJobTemplate/components/ListJobBarTemplate";
import { NotificationContext } from "../../../App";

const HeaderTemplate = () => {
  const handleNotification = useContext(NotificationContext);
  const { width } = useViewPort();
  // console.log(width);

  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const navigate = useNavigate();
  // console.log(key);

  const { user } = useSelector((state) => state.userSlice);
  // console.log(user);

  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  const handleClick = () => {
    setOpenDropdown(true);
  };

  // useMemo: cứ mỗi lần setState ==> re-render ==> cập nhật chạy mới với toàn bộ các biến và function  bên trong ==> quản lý các biến giúp kiểm tra khi nào thì nên tạo mới
  // useCallback: ==> quản lý các function

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
    return listSearch.slice(0, 4).map((item, index) => {
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
              <h4 className="">{item.congViec.tenCongViec}</h4>
              <p>{item.congViec.danhGia}</p>
            </div>
          </div>
        ),
      };
    });
  }, [listSearch]);

  return width > 576 ? (
    <header className="container 2xl:container border-b-gray-200 border-b bg-white z-30 w-full py-4">
      <div className="">
        <div className="header_content flex items-center justify-between">
          {/* // logo  */}
          <div className="flex flex-1 space-x-2 items-center">
            <Link to={pathDefault.homePage}>
              <Icons.logo />
            </Link>
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
              <div className="w-full">
                <InputSearch
                  handleClick={handleClick}
                  handleChange={handleChangeKey}
                  value={key}
                  placeholder={"What service are you looking for today?"}
                />
              </div>
            </Dropdown>
          </div>
          {/* search input  */}
          <div className="header_action space-x-1">
            <div className=" hidden lg:inline">
              <DropdownHeader buttonContent="Fiverr Pro" />
              <DropdownHeader buttonContent="Explore" />
              <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
              <ButtonGhost content={"Become a Seller"} />
            </div>
            {!user ? (
              <div className="inline">
                <ButtonGhost content={"Sign In"} />
                <ButtonOutline
                  onClick={() => {
                    navigate(pathDefault.signIn);
                  }}
                  content={"Join"}
                />
              </div>
            ) : (
              <>
                {}
                {/* <p className="inline-block w-max">{user.name}</p> */}
                {/* <Dropdown
                  menu={{
                    items: [
                      {
                        key: 1,
                        label:
                          user.role == "ADMIN" ? (
                            <Link onClick={() => {}}>Trang quản trị</Link>
                          ) : (
                            (handleNotification(
                              "error",
                              "Bạn không đủ quyền truy cập"
                            ),
                            navigate(pathDefault.homePage))
                          ),
                      },
                    ],
                  }}
                >
                  
                </Dropdown> */}
                <Avatar size={50} icon={<UserOutlined />} />
              </>
            )}
          </div>
        </div>
        <ListJobBarTemplate />
      </div>
    </header>
  ) : (
    <div></div>
  );
};

export default HeaderTemplate;
