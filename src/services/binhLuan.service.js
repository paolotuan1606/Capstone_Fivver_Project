import { http } from "./config";

export const BinhLuanService = {
  getBinhLuanTheoMaCongViec: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
};
