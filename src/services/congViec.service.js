import { http } from "./config";

export const CongViecService = {
  getCongViecTheoTen: (key) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${key}`);
  },
};
