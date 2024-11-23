import React, { useEffect, useState } from "react";
import { loaiCongViecService } from "../../../services/loaiCongViec.service";
import "./Jobs.scss";
import {
  LikeFilled,
  PlusOutlined,
  ShareAltOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const Jobs = ({ jobID }) => {
  const [listJob, setListJob] = useState([]);

  const layDanhSachCongViecTheoChiTietLoai = () => {
    loaiCongViecService
      .layDanhSachCongViecTheoChiTietLoai(jobID)
      .then((res) => {
        const parsedJobs = res.data.content.map((job) => {
          const { giaTien, moTa } = parseMoTaNgan(job.congViec.moTaNgan);
          return {
            ...job,
            congViec: { ...job.congViec, giaTien, moTaNgan: moTa },
          };
        });
        setListJob(parsedJobs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachCongViecTheoChiTietLoai();
  }, [jobID]);

  const parseMoTaNgan = (moTaNgan) => {
    const lines = moTaNgan.split("\r\n");
    const giaTien = lines.find((line) => line.startsWith("US$")) || "";
    const moTa = lines.filter((line) => line !== giaTien).join("\r\n");
    return { giaTien, moTa };
  };

  return (
    <div className="container py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {listJob.map((job) => (
        <NavLink className="typeJobDetail" to={`/job/${job.id}`} key={job.id}>
          <div className="jobImg mb-5">
            <img
              src={job.congViec.hinhAnh}
              alt={job.congViec.tenCongViec}
              className=" w-full h-56 object-cover rounded-2xl"
            />
          </div>
          <div className="flex items-center mb-2">
            <img
              src={job.avatar}
              alt={job.tenNguoiTao}
              className="w-10 h-10 rounded-full mr-3"
            />
            <p className="font-medium text-gray-600">
              Ad by{" "}
              <span className="font-bold text-black">{job.tenNguoiTao}</span>
            </p>
          </div>
          <h2 className="jobName h-12 max-h-12 text-xl mb-2">
            {job.congViec.tenCongViec}
          </h2>
          <p className="text-xl  mb-2">
            <StarFilled className="text-yellow-300" />{" "}
            <span className="font-bold">{job.congViec.saoCongViec}</span>{" "}
            <span className="text-gray-500">
              ( {job.congViec.danhGia} reviews )
            </span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-green-600 ">
              From {job.congViec.giaTien}
            </p>
            <div className="typeJobDetail_icon  space-x-5 text-right mr-5">
              <Button className="icon iconLike text-xl" href="#">
                <LikeFilled />
              </Button>
              <Button className="icon iconShare text-xl" href="#">
                <ShareAltOutlined />
              </Button>
              <Button className="icon iconPlus text-xl" href="#">
                <PlusOutlined />
              </Button>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Jobs;
