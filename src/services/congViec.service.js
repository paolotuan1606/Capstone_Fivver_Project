import { http } from "./config";

const dataLocal = localStorage.getItem("userInfo");
const dataUser = JSON.parse(dataLocal);

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
  getCongViec: async () => {
    return await http.get("/cong-viec");
  },
  xoaCongViec: (id) => {
    return http.delete(`/cong-viec/${id}`, {
      headers: { token: dataUser.token },
    });
  },
  themCongViec: (data) => {
    return http.post(`/cong-viec`, data, {
      headers: { token: dataUser.token },
    });
  },
};
