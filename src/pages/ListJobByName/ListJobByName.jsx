import React, { useEffect, useState } from "react";
import { CongViecService } from "../../services/congViec.service";

const ListJobByName = () => {
  const id = 2;
  const [congViecTheoLoai, setCongViecTheoLoai] = useState();
  console.log(congViecTheoLoai);

  useEffect(() => {
    CongViecService.getChiTietLoaiCongViec(id)
      .then((res) => {
        console.log(res.data.content);
        console.log(res.data.content[0].tenLoaiCongViec);
        setCongViecTheoLoai(res.data.content[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="container px-8 ">
      {/* <div className="text-center space-y-10 bg-blue-400 rounded-lg py-5">
        <h2 className="text-5xl">{congViecTheoLoai.tenLoaiCongViec}</h2>
        <button classname="border border-solid rounded-md ">
          <i className="fa-solid fa-circle-play mr-3" />
          How Fiverr Works
        </button>
      </div> */}
      <div>handleNotification</div>
    </div>
  );
};

export default ListJobByName;
