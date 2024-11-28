import { http } from "./config";

export const CongViecService = {
  getCongViecTheoTen: (key) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${key}`);
  },
  getCongViecTheoID: (id) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
  getChiTietLoaiCongViec: (id) => {
    return http.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },
};
