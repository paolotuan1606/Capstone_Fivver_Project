import React, { useEffect, useState } from "react";
import DropdownListJob from "../../../components/dropdown/DropdownListJob";
import { loaiCongViecService } from "../../../services/loaiCongViec.service";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ListJobBarTemplate.scss";

const ListJobBarTemplate = () => {
  const [listLoaiCongViec, setListLoaiCongViec] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;

  // Lấy danh sách loại công việc từ API
  const layDanhSachLoaiCongViec = async () => {
    try {
      setIsLoading(true); // Bắt đầu tải dữ liệu
      const res = await loaiCongViecService.layDanhSachLoaiCongViec();
      setListLoaiCongViec(res.data.content || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách loại công việc:", error);
      setError("Không thể tải danh sách loại công việc. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false); // Kết thúc tải dữ liệu
    }
  };

  useEffect(() => {
    layDanhSachLoaiCongViec();
  }, []);

  return (
    <div className="mt-5 sm:container md:container lg:container xl:container 2xl:container">
      {isLoading ? (
        <p>Đang tải danh sách loại công việc...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : listLoaiCongViec.length === 0 ? (
        <p>Không có loại công việc nào để hiển thị.</p>
      ) : (
        <OwlCarousel
          className="carouselListJobBar"
          autoWidth={true}
          items={7}
          nav={true}
          margin={30}
          dots={false}
          smartSpeed={800}
          loop={false}
          mouseDrag={false}
          navText={[prevIcon, nextIcon]}
        >
          {listLoaiCongViec.map((loaiCongViec) => (
            <div key={loaiCongViec.id} className="item text-lg">
              <DropdownListJob
                dropDownContent={loaiCongViec.tenLoaiCongViec}
                menuGroups={
                  Array.isArray(loaiCongViec.dsNhomChiTietLoai)
                    ? loaiCongViec.dsNhomChiTietLoai
                    : []
                }
              />
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
  );
};

export default ListJobBarTemplate;
