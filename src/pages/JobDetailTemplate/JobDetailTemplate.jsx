import React, { useEffect, useState } from "react";
import { CongViecService } from "../../services/congViec.service";
import { useParams } from "react-router-dom";
import HeaderJobDetailTemplate from "./components/HeaderJobDetailTemplate";
import CarouselJobDetail from "./components/CarouselJobDetail";
import { BinhLuanService } from "../../services/binhLuan.service";
import TopComment from "./components/TopComment";
import JobDescription from "./components/JobDescription";
import Faq from "./components/Faq";
import JobPrice from "./components/JobPrice";

const JobDetailTemplate = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const [listCommnet, setListJobComment] = useState([]);
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

  const layDanhSachBinhLuan = () => {
    BinhLuanService.getBinhLuanTheoMaCongViec(jobid).then((res) => {
      console.log(res.data.content);
      setListJobComment(res.data.content);
    });
  };
  useEffect(() => {
    layChiTietCongViec();
    layDanhSachBinhLuan();
  }, [jobid]);

  return (
    <div className="sm:container md:container lg:container xl:container 2xl:container px-16 grid grid-cols-5">
      <div className="col-span-3">
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
        {jobDetail && (
          <CarouselJobDetail hinhAnh={jobDetail.congViec?.hinhAnh} />
        )}
        {jobDetail && (
          <JobDescription
            moTa={jobDetail.congViec?.moTa}
            moTaNgan={jobDetail.congViec?.moTaNgan}
            avatar={jobDetail.avatar}
            tenNguoiTao={jobDetail.tenNguoiTao}
            saoCongViec={jobDetail.congViec?.saoCongViec}
            danhGia={jobDetail.congViec?.danhGia}
          />
        )}
        <Faq />
        <h3 className="text-2xl font-bold my-10">Comments</h3>
        {listCommnet.map((comment) => (
          <TopComment
            avatar={comment.avatar}
            tenNguoiBinhLuan={comment.tenNguoiBinhLuan}
            saoBinhLuan={comment.saoBinhLuan}
            noiDung={comment.noiDung}
            ngayBinhLuan={comment.ngayBinhLuan}
          />
        ))}
      </div>
      <div className="col-span-2">
        <JobPrice />
      </div>
    </div>
  );
};

export default JobDetailTemplate;
