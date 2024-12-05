import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import {
  DownOutlined,
  GlobalOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Drawer, Space } from "antd";
import InputSearch from "../../../components/input/inputSearch/InputSearch";
import { CongViecService } from "../../../services/congViec.service";
import { useDebounce } from "use-debounce";
import { NotificationContext } from "../../../App";
import { useSelector } from "react-redux";
import useViewPort from "../../../hooks/useViewPort";
import ListJobBarTemplate from "../../../pages/ListJobTemplate/components/ListJobBarTemplate";
import Icons from "../../../components/Icons";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/button/ButtonCustom";
import DropdownHeader from "../../../components/dropdown/DropdownHeader";
import { pathDefault } from "../../../common/path";
import "./headerTemplate.scss";

const HeaderTemplate = () => {
  const handleNotification = useContext(NotificationContext);
  const { width } = useViewPort();
  const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại

  const [key, setKey] = useState("");
  const [value] = useDebounce(key, 1000);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false); // Trạng thái cuộn
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Trạng thái sidebar
  const navigate = useNavigate();

  const items = [
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Answers</h1>
          <p>Powered by AI, answered by Fiverr freelancers</p>
        </div>
      ),
      key: "profile",
      icon: UserOutlined,
    },
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Community</h1>
          <p>Connect with Fiverr's team and community</p>
        </div>
      ),
      key: "contact",
      icon: PhoneOutlined,
    },
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Guides</h1>
          <p>In-depth guides covering business topics</p>
        </div>
      ),
      key: "help",
      icon: SmileOutlined,
    },
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Podcast</h1>
          <p>Inside tips from top business minds</p>
        </div>
      ),
      key: "Podcast",
      icon: SmileOutlined,
    },
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Learn</h1>
          <p>Professional online courses, led by experts</p>
        </div>
      ),
      key: "Learn",
      icon: SmileOutlined,
    },
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Blog</h1>
          <p>News, information and community stories</p>
        </div>
      ),
      key: "Blog",
      icon: SmileOutlined,
    },
    {
      label: (
        <div className="py-1 cursor-pointer ">
          <h1 className="font-semibold text-base">Logo Maker</h1>
          <p>Create your logo instantly</p>
        </div>
      ),
      key: "Logo",
      icon: SmileOutlined,
    },
  ];

  const { user } = useSelector((state) => state.userSlice);

  const handleChangeKey = (event) => {
    setKey(event.target.value);
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
          <NavLink
            to={`/job/${item.congViec.id}`}
            className="flex items-center"
          >
            <img
              src={item.congViec.hinhAnh}
              className="w-16 h-16 me-3"
              alt=""
            />
            <div>
              <h4 className="">{item.congViec.tenCongViec}</h4>
              <p>{item.congViec.danhGia}</p>
            </div>
          </NavLink>
        ),
      };
    });
  }, [listSearch]);

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

  // Handle toggle sidebar
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return width > 1024 ? (
    <>
      <header
        className={`border-b-gray-200 border-b bg-white z-30 w-full py-4 ${
          isScrolled && isHomePage ? "fixed top-0 left-0 right-0 shadow-md" : ""
        }`}
      >
        <div className="container 2xl:container">
          <div className="header_content flex items-center justify-between">
            {/* Logo and Search Bar */}
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
                    handleClick={() => setOpenDropdown(true)}
                    handleChange={handleChangeKey}
                    value={key}
                    placeholder={"What service are you looking for today?"}
                  />
                </div>
              </Dropdown>
            </div>

            {/* Header actions */}
            <div className="header_action space-x-1 hidden lg:flex">
              <DropdownHeader buttonContent="Fiverr Pro" items={items} />
              <DropdownHeader buttonContent="Explore" items={items} />
              <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
              <ButtonGhost content={"Become a Seller"} />
            </div>

            {/* Authentication */}
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
              <Avatar size={50} icon={<UserOutlined />} />
            )}
          </div>
        </div>
      </header>
      <ListJobBarTemplate />
    </>
  ) : (
    <>
      {/* Sidebar Drawer on smaller screens */}
      <Drawer
        title="Menu"
        placement="left"
        visible={isSidebarOpen}
        onClose={handleToggleSidebar}
        width={250}
      >
        <div className="space-y-4">
          <ButtonGhost content={"English"} icon={<GlobalOutlined />} />
          <ButtonGhost content={"Become a Seller"} />
          <DropdownHeader buttonContent="Fiverr Pro" items={items} />
          <DropdownHeader buttonContent="Explore" items={items} />
          <ListJobBarTemplate />
        </div>
      </Drawer>
      <header
        className={`border-b-gray-200 border-b bg-white z-30 w-full py-4 ${
          isScrolled && isHomePage ? "fixed top-0 left-0 right-0 shadow-md" : ""
        }`}
      >
        <div className="container 2xl:container">
          <div className="header_content flex items-center justify-between">
            {/* Logo and Sidebar Toggle Button */}
            <div className="flex items-center">
              <Button
                type="primary"
                icon={<MenuUnfoldOutlined />}
                onClick={handleToggleSidebar}
                className="me-3"
              />
              <Link to={pathDefault.homePage}>
                <Icons.logo />
              </Link>
            </div>

            {/* Authentication on the right */}
            <div className="ml-auto flex items-center">
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
                <Avatar size={50} icon={<UserOutlined />} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTemplate;
