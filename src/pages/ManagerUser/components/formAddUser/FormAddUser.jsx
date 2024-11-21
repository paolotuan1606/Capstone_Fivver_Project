import React, { useContext, useEffect, useState } from "react";
import { skillService } from "../../../../services/skill.service";
import InputCustom from "../../../../components/input/inputCustom/InputCustom";
import SelectCustom from "../../../../components/select/selectCustom/SelectCustom";
import { Button, DatePicker } from "antd";
import { useFormik } from "formik";
import { nguoiDungService } from "../../../../services/nguoiDung.service";
import { NotificationContext } from "../../../../App";

const FormAddUser = ({ handleCloseModal, layDanhSachNguoiDung }) => {
  const [listSkill, setListSkill] = useState([]);
  const handleNotification = useContext(NotificationContext);
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
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [""],
      certification: [""],
    },
    onSubmit: (values) => {
      console.log(values);
      nguoiDungService
        .themNguoiDung(values)
        .then((res) => {
          console.log(res);
          handleCloseModal();
          layDanhSachNguoiDung();
          handleNotification("success", "Thêm người dùng thành công!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  useEffect(() => {
    skillService
      .layDanhSachSkill()
      .then((res) => {
        console.log(res);
        setListSkill(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <form onSubmit={handleSubmit} action="" className="space-y-3">
      <InputCustom
        value={values.name}
        id="name"
        name="name"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.name}
        touched={touched.name}
        labelContent={"Họ và tên"}
        placeholder={"Vui lòng nhập họ tên"}
      />
      <InputCustom
        value={values.email}
        id="email"
        name="email"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
        labelContent={"Email"}
        placeholder={"Vui lòng nhập email"}
      />
      <InputCustom
        value={values.password}
        id="password"
        name="password"
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
        type="password"
        labelContent={"Mật khẩu"}
        placeholder={"Vui lòng nhập mật khẩu"}
      />
      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          value={values.phone}
          id="phone"
          name="phone"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.phone}
          touched={touched.phone}
          labelContent={"Số điện thoại"}
          placeholder={"Vui lòng nhập số điện thoại"}
        />
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue("role", value);
          }}
          options={[
            {
              value: "ADMIN",
              label: "Admin",
            },
            {
              value: "USER",
              label: "User",
            },
          ]}
          labelContent={"Chọn chức vụ"}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="font-medium mb-2 block" htmlFor="">
            Ngày sinh
          </label>
          <DatePicker
            format={"DD-MM-YYYY"}
            onChange={(day, daystring) => {
              console.log(daystring);
              setFieldValue("birthday", daystring);
            }}
            className="w-full"
          />
        </div>
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue("gender", value);
          }}
          options={[
            {
              value: "true",
              label: "Nam",
            },
            {
              value: "false",
              label: "Nữ",
            },
          ]}
          labelContent={"Chọn giới tính"}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue("skill", value);
          }}
          mode="tags"
          options={listSkill.map((item) => {
            return {
              label: item.tenSkill,
              value: item.id.toString(),
            };
          })}
          labelContent={"Kỹ năng"}
        />
        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue("certification", value);
          }}
          mode="tags"
          labelContent={"Chứng chỉ"}
        />
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

export default FormAddUser;
