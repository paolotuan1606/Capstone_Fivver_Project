import React, { useContext, useEffect, useMemo, useState } from "react";
import Icons from "../../../components/Icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại

  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false); // Trạng thái cuộn
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userSlice);

  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  const handleClick = () => {
    setOpenDropdown(true);
  };

  useEffect(() => {
    if (value) {
      CongViecService.getCongViecTheoTen(value)
        .then((res) => {
          setListSearch(res.data.content);
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

  // Theo dõi sự kiện cuộn trang
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Khi cuộn xuống 50px, đổi trạng thái
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Kiểm tra nếu đang ở trang Home
  const isHomePage = location.pathname === pathDefault.homePage;

  return width > 576 ? (
    <header
      className={`border-b-gray-200 border-b bg-white z-30 w-full py-4 ${
        isScrolled && isHomePage ? "fixed top-0 left-0 right-0 shadow-md" : ""
      }`}
    >
      <div className="container 2xl:container ">
        <div className="header_content flex items-center justify-between">
          {/* Logo */}
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

          {/* Header actions */}
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
                <Avatar size={50} icon={<UserOutlined />} />
              </>
            )}
          </div>
        </div>
      </div>
      <ListJobBarTemplate />
    </header>
  ) : (
    <div></div>
  );
};

// Luôn hiển thị ListJobBarTemplate trên mọi trang
const ListJobBar = () => {
  return <ListJobBarTemplate />;
};

export default HeaderTemplate;
