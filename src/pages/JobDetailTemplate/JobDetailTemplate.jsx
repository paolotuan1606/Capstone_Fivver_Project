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
import TextArea from "antd/es/input/TextArea";
import { Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

const JobDetailTemplate = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const [listCommnet, setListJobComment] = useState([]);
  const [newComment, setNewComment] = useState(""); // Lưu nội dung bình luận mới
  const { jobid } = useParams();

  const layChiTietCongViec = () => {
    CongViecService.getCongViecTheoID(jobid)
      .then((res) => {
        console.log(res.data.content);
        if (res.data.content.length > 0) {
          setJobDetail(res.data.content[0]);
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

  const handleAddComment = () => {
    if (newComment.trim()) {
      const commentData = {
        maCongViec: jobid,
        maNguoiBinhLuan: 6564, // Giả sử đây là ID của người dùng (thay thế theo logic của bạn)
        ngayBinhLuan: new Date().toISOString(), // Lấy ngày hiện tại
        noiDung: newComment,
        saoBinhLuan: 5, // Mặc định sao bình luận là 5
      };

      BinhLuanService.themBinhLuan(commentData)
        .then((res) => {
          // Thông báo thêm bình luận thành công
          message.success("Bình luận đã được thêm thành công!");

          // Cập nhật lại danh sách bình luận
          layDanhSachBinhLuan();

          // Xóa nội dung trong TextArea và reset lại trạng thái
          setNewComment("");
        })
        .catch((err) => {
          console.error("Lỗi khi thêm bình luận:", err);
          message.error("Lỗi khi thêm bình luận.");
        });
    } else {
      message.warning("Vui lòng nhập nội dung bình luận.");
    }
  };

  useEffect(() => {
    layChiTietCongViec();
    layDanhSachBinhLuan();
  }, [jobid]);

  return (
    <div className="abc sm:container md:container lg:container xl:container 2xl:container px-16 grid grid-cols-5">
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
            key={comment.id} // Thêm key để tránh cảnh báo trong React
            avatar={comment.avatar}
            tenNguoiBinhLuan={comment.tenNguoiBinhLuan}
            saoBinhLuan={comment.saoBinhLuan}
            noiDung={comment.noiDung}
            ngayBinhLuan={comment.ngayBinhLuan}
          />
        ))}
        <div className="flex">
          {jobDetail && (
            <img
              src={jobDetail.avatar}
              className="w-10 h-10 rounded-full border"
              alt=""
            />
          )}
          <div className="ml-10 w-full">
            <TextArea
              rows={6}
              className="mb-5"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Nhập nội dung bình luận"
            />
            <Button onClick={handleAddComment}>Thêm bình luận</Button>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-10 sticky top-10">
        {jobDetail && <JobPrice giaTien={jobDetail.congViec?.giaTien} />}
      </div>
    </div>
  );
};

export default JobDetailTemplate;
