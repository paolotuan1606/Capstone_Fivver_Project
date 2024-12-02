import { http } from "./config";
const dataLocal = localStorage.getItem("userInfo");
const dataUser = JSON.parse(dataLocal);
export const BinhLuanService = {
  getBinhLuanTheoMaCongViec: (id) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  getBinhLuan: async () => {
    return await http.get("/binh-luan");
  },
  xoaBinhLuan: (id) => {
    return http.delete(`/binh-luan//${id}`, {
      headers: { token: dataUser.token },
    });
  },
  themBinhLuan: (data) => {
    return http.post(`/binh-luan`, data, {
      headers: { token: dataUser.token },
    });
  },
};
