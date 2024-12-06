import React, { useEffect, useState } from "react";
import { CongViecService } from "../../../services/congViec.service";
import { NavLink } from "react-router-dom";
import {
  LikeFilled,
  PlusOutlined,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import ListJobFilter from "../../ListJobTemplate/components/ListJobFilter";

const ListJob = ({ jobName }) => {
  const [listSearch, setListSearch] = useState([]);
  useEffect(() => {
    if (jobName) {
      CongViecService.getCongViecTheoTen(jobName)
        .then((res) => {
          console.log(res.data.content);
          setListSearch(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [jobName]);
  return (
    <>
      <ListJobFilter result={listSearch.length} />
      <div className="sm:container md:container lg:container xl:container 2xl:container mx-5 py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {listSearch.map((job) => (
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
                From US${job.congViec.giaTien}
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
    </>
  );
};

export default ListJob;
