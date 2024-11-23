import React, { useEffect, useState } from "react";
import { CongViecService } from "../../services/congViec.service";
import { useParams } from "react-router-dom";
import HeaderJobDetailTemplate from "./components/HeaderJobDetailTemplate";

const JobDetailTemplate = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const { jobid } = useParams();

  const layChiTietCongViec = () => {
    CongViecService.getCongViecTheoID(jobid)
      .then((res) => {
        console.log(res.data.content);
        // Kiểm tra nếu dữ liệu là mảng và có phần tử
        if (res.data.content.length > 0) {
          setJobDetail(res.data.content[0]); // Lấy phần tử đầu tiên của mảng
        } else {
          console.error("Không tìm thấy dữ liệu công việc!");
        }
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      });
  };

  useEffect(() => {
    layChiTietCongViec();
  }, [jobid]);

  return (
    <div className="sm:container md:container lg:container xl:container 2xl:container px-16">
      {jobDetail && (
        <HeaderJobDetailTemplate
          maChiTietLoaiCongViec={jobDetail.congViec?.maChiTietLoaiCongViec}
          tenLoaiCongViec={jobDetail.tenLoaiCongViec}
          tenNhomChiTietLoai={jobDetail.tenNhomChiTietLoai}
          tenChiTietLoai={jobDetail.tenChiTietLoai}
          tenCongViec={jobDetail.congViec?.tenCongViec}
          avatar={jobDetail.avatar}
          tenNguoiTao={jobDetail.tenNguoiTao}
          saoCongViec={jobDetail.congViec?.saoCongViec}
          danhGia={jobDetail.congViec?.danhGia}
        />
      )}
    </div>
  );
};

export default JobDetailTemplate;
