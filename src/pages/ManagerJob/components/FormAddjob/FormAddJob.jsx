import React, { useContext, useEffect, useState } from "react";
import { Button, DatePicker } from "antd";
import { useFormik } from "formik";
import { NotificationContext } from "../../../../App";
import InputCustom from "../../../../components/input/inputCustom/InputCustom";
import { CongViecService } from "../../../../services/congViec.service";
import * as Yup from "yup";

const FormAddJob = ({ handleCloseModal, layDanhSachCongViec }) => {
  const handleNotification = useContext(NotificationContext);
  const notEmpty = "Vui lòng không bỏ trống!";
  const isNum = "Vui lòng điền đúng định dạng số!";
  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      id: 0,
      tenCongViec: "",
      danhGia: "",
      giaTien: "",
      nguoiTao: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: "",
      moTaNgan: "",
      saoCongViec: "",
    },
    onSubmit: (values) => {
      console.log(values);
      CongViecService.themCongViec(values)
        .then((res) => {
          console.log(res);
          handleCloseModal();
          handleNotification("success", "Thêm công việc thành công!");
          layDanhSachCongViec();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // ValidationSchema
    validationSchema: Yup.object({
      tenCongViec: Yup.string().required(notEmpty),
      danhGia: Yup.number(isNum).required(notEmpty),
      giaTien: Yup.number(isNum).required(notEmpty),
      maChiTietLoaiCongViec: Yup.number(isNum).required(notEmpty),
      saoCongViec: Yup.number(isNum).required(notEmpty),
      moTa: Yup.string().required(notEmpty),
      moTaNgan: Yup.string().required(notEmpty),
      hinhAnh: Yup.string().required(notEmpty),
    }),
  });

  return (
    <form onSubmit={handleSubmit} action="" className="space-y-3">
      <InputCustom
        value={values.tenCongViec}
        id="tenCongViec"
        name="tenCongViec"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.tenCongViec}
        touched={touched.tenCongViec}
        labelContent={"Tên công việc"}
        placeholder={"Vui lòng nhập tên công việc"}
      />
      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          value={values.maChiTietLoaiCongViec}
          id="maChiTietLoaiCongViec"
          name="maChiTietLoaiCongViec"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.maChiTietLoaiCongViec}
          touched={touched.maChiTietLoaiCongViec}
          labelContent={"Mã chi tiết loại công việc"}
          type="number"
          placeholder={"Vui lòng nhập mã chi tiết loại công việc"}
        />
        <InputCustom
          type="number"
          value={values.danhGia}
          id="danhGia"
          name="danhGia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.danhGia}
          touched={touched.danhGia}
          labelContent={"Đánh giá"}
          placeholder={"Vui lòng nhập đánh giá"}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          value={values.giaTien}
          id="giaTien"
          name="giaTien"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.giaTien}
          touched={touched.giaTien}
          type="number"
          labelContent={"Giá tiền"}
          placeholder={"Vui lòng nhập giá tiền"}
        />
        <InputCustom
          value={values.saoCongViec}
          id="saoCongViec"
          type="number"
          name="saoCongViec"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.saoCongViec}
          touched={touched.saoCongViec}
          labelContent={"Sao công việc"}
          placeholder={"Vui lòng nhập sao công việc"}
        />
      </div>
      <InputCustom
        value={values.hinhAnh}
        id="hinhAnh"
        name="hinhAnh"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.hinhAnh}
        touched={touched.hinhAnh}
        labelContent={"Hình ảnh"}
        placeholder={"Vui lòng nhập hình ảnh"}
      />
      <div className="font-medium mb-2 inline-block w-full">
        <label htmlFor="">Mô tả ngắn</label>
        <textarea
          className="block border-solid border rounded-md w-full font-light py-1 px-2"
          value={values.moTaNgan}
          id="moTaNgan"
          name="moTaNgan"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={"Vui lòng nhập mô tả ngắn"}
        />
        {touched.moTaNgan && errors.moTaNgan ? (
          <p className="text-red-500 mt-2 font-normal">{errors.moTaNgan}</p>
        ) : null}
      </div>
      <div className="font-medium mb-2 inline-block w-full">
        <label htmlFor="">Mô tả</label>
        <textarea
          className="block border-solid border rounded-md w-full font-light py-1 px-2"
          value={values.moTa}
          id="moTa"
          name="moTa"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.moTa}
          touched={touched.moTa}
          placeholder={"Vui lòng nhập mô tả"}
        />
        {touched.moTa && errors.moTa ? (
          <p className="text-red-500 mt-2 font-normal">{errors.moTa}</p>
        ) : null}
      </div>
      <div className="text-right">
        <Button
          htmlType="submit"
          variant="solid"
          className="bg-black text-white mt-3"
        >
          Xác nhận
        </Button>
      </div>
    </form>
  );
};

export default FormAddJob;
