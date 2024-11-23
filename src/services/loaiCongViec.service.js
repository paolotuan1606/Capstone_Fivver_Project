import { http } from "./config";

export const loaiCongViecService = {
  layDanhSachLoaiCongViec: async () => {
    return await http.get("/cong-viec/lay-menu-loai-cong-viec");
  },
  layDanhSachCongViecTheoChiTietLoai: async (id) => {
    return await http.get(`cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },
};
