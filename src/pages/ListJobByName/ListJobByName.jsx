import React, { useEffect, useState } from "react";
import { CongViecService } from "../../services/congViec.service";
import { useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ButtonGhost } from "../../components/button/ButtonCustom";
import { Button } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";
import "./listJobByName.scss";
import Guide from "../ListJobTemplate/components/Guide";
const ListJobByName = () => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;

  const params = useParams();
  const id = params.id;
  // console.log(id);

  const [congViecTheoLoai, setCongViecTheoLoai] = useState({});
  console.log(congViecTheoLoai);
  const { tenLoaiCongViec, dsNhomChiTietLoai } = congViecTheoLoai;
  console.log(dsNhomChiTietLoai);

  useEffect(() => {
    CongViecService.getChiTietLoaiCongViec(id)
      .then((res) => {
        // console.log(res.data.content);
        // console.log(res.data.content[0].tenLoaiCongViec);
        setCongViecTheoLoai(res.data.content[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container px-8 py-16 space-y-20">
      <div className="text-center  space-y-16 bg-blue-400 rounded-lg py-5 bg-[url('/public/job-list-banner.jpg')] bg-no-repeat bg-center bg-cover h-80 flex items-center justify-center flex-col text-white ">
        <h2 className="text-5xl">{tenLoaiCongViec}</h2>
        <button className="border border-solid rounded-md text-2xl hover:bg-white px-5 py-3 hover:text-orange-800 transition-all ">
          <i className="fa-solid fa-circle-play mr-3" />
          How Fiverr Works
        </button>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-10">
          Most popular in {tenLoaiCongViec}
        </h2>
        <OwlCarousel
          className="carouselInfoListJob"
          autoWidth={true}
          loop={false}
          nav={true}
          margin={20}
          smartSpeed={800}
          mouseDrag={false}
          navText={[prevIcon, nextIcon]}
          responsive={{
            0: { items: 2 }, // Màn hình nhỏ nhất hiển thị 2 items
            768: { items: 4 }, // Màn hình trung bình hiển thị 4 items
            1024: { items: 6 }, // Màn hình lớn hiển thị 6 items
          }}
        >
          <div className="item h-20 leading-6 ">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/cb63c6dd487dc1630100243adea2913e-1727009044224/Minimalist%20Logo%20Design.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">
                Minimalist Logo Design
              </span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/8ab683c462bb7021359f813a67f0a210-1727008217023/Illustration.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">Illustration</span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/a4f23e7ad88e3c639e545e7f1ef6c24c-1727084447011/Website%20Design.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">Website Design</span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bdd56de5c8d1b1aadcac9ec4b605f044-1726999157269/Architecture%20_%20Interior%20Design.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">
                Architecture & Interior Design
              </span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/bdd56de5c8d1b1aadcac9ec4b605f044-1726999157270/AI%20Artists.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">AI Artist</span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/8ab683c462bb7021359f813a67f0a210-1727008217021/Image%20Editing.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">Image Editing</span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/148a459235c2efcccf74882dd6790246-1727083583539/T-Shirts%20_%20Merchandise.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">
                T-Shirts & Merchandise
              </span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/8ab683c462bb7021359f813a67f0a210-1727008217020/Industrial%20_%20Product%20Design.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">
                Industrial & Product Design
              </span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/8ab683c462bb7021359f813a67f0a210-1727008217020/Industrial%20_%20Product%20Design.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">
                Industrial & Product Design
              </span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
          <div className="item h-20 leading-6">
            <Button className="flex w-auto h-full border border-solid hover:!text-green-600 hover:!border-inherit rounded-md ">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/148a459235c2efcccf74882dd6790246-1727083583524/Social%20Media%20Design.png"
                alt=""
                className="!w-16"
              />
              <span className="text-base font-medium">Social Media Design</span>
              <SwapRightOutlined className="text-2xl" />
            </Button>
          </div>
        </OwlCarousel>
      </div>
      <div className="flex justify-between items-center border border-solid rounded-lg p-10">
        <div className="left space-y-6">
          <h2 className="text-black text-3xl font-medium">
            Seeking a <span>full suite of services?</span>
          </h2>
          <p className="text-black text-lg">
            Find a comprehensive graphic and design agency to <br /> handle it
            all.
          </p>
          <div className="space-y-2">
            <p>
              <span className="text-rose-800 mr-3 mb-2 bg-rose-200 px-2 py-1 rounded-full">
                Visual Identity & Branding
              </span>
              <span className="text-rose-800 mr-3 bg-rose-200 px-2 py-1 rounded-full">
                Web & App Design
              </span>
            </p>
            <p>
              <span className="text-rose-800 mr-3 bg-rose-200 px-2 py-1 rounded-full">
                Marketing & Advertising
              </span>
              <span className="text-rose-800 font-semibold">& more</span>
            </p>
          </div>
          <button className="!mt-10 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800">
            Browse Agencies
          </button>
        </div>
        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/da1594ab63ac10603bc01158360e0038-1723034424480/Graphic_Design_2x.png"
            width={570}
            alt=""
          />
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold mb-10">
          Explore {tenLoaiCongViec}
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {dsNhomChiTietLoai
            ? dsNhomChiTietLoai.map((job) => {
                return (
                  <div key={job.id}>
                    <div className="space-y-5">
                      <img
                        src={job.hinhAnh}
                        className="w-full max-h-40 object-cover rounded-md"
                        alt=""
                      />
                      <h1 className="text-xl text-black font-bold">
                        {job.tenNhom}
                      </h1>
                      <div className="space-y-2">
                        {job.dsChiTietLoai.map((item) => {
                          return (
                            <div className="job-item flex justify-between items-center p-3 hover:bg-gray-100 rounded-md">
                              <span>{item.tenChiTiet}</span>
                              <SwapRightOutlined className="arrow text-black opacity-0 align-middle" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <Guide />
    </div>
  );
};

export default ListJobByName;
