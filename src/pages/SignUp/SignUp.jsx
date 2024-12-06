import React, { useContext, useEffect, useState } from "react";
import Icons from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { DatePicker, Input, Select } from "antd";
import { ButtonOutline } from "../../components/button/ButtonCustom";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation/login-animation.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import { skillService } from "../../services/skill.service";
import SelectCustom from "../../components/select/selectCustom/SelectCustom";
import InputCustom from "../../components/input/inputCustom/InputCustom";
import useViewPort from "../../hooks/useViewPort";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNotification = useContext(NotificationContext);
  const [listSkill, setListSkill] = useState([]);
  const [listCertifications, setListCertifications] = useState([]); // Nếu có danh sách chứng chỉ
  const { width } = useViewPort();

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
      authService
        .signUp(values)
        .then((res) => {
          console.log(res);
          handleNotification("success", "Đăng ký thành công!");
        })
        .catch((err) => {
          console.log(err.response.data.content);
          handleNotification("error", err.response.data.content);
        });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng không bỏ trống!"),
      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email!")
        .required("Vui lòng không bỏ trống!"),
      password: Yup.string().required("Vui lòng không bỏ trống!"),
      phone: Yup.string()
        .matches(/^(\+84|0)[3|5|7|8|9]\d{8}$/, "Số điện thoại không hợp lệ!")
        .required("Vui lòng không bỏ trống!"),
      birthday: Yup.date().required("Vui lòng chọn ngày sinh!"),
      skill: Yup.array().min(1, "Vui lòng chọn ít nhất một kỹ năng!"),
      certification: Yup.array().min(1, "Vui lòng chọn ít nhất một chứng chỉ!"),
    }),
  });

  useEffect(() => {
    skillService
      .layDanhSachSkill()
      .then((res) => {
        setListSkill(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });

    // Load danh sách chứng chỉ nếu có
    // skillService.layDanhSachCertifications().then((res) => setListCertifications(res.data.content));
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-screen py-10">
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Nếu màn hình rộng > 1024px, hiển thị Lottie */}
        {width > 1024 && (
          <div className="signIn_animation col-span-2 h-full flex items-center justify-center">
            <Lottie options={defaultOptions} height={700} width={700} />
          </div>
        )}

        {/* Form đăng ký, căn giữa trong màn hình nhỏ */}
        <div
          className={`signIn_form h-full px-10 flex flex-col justify-center ${
            width <= 1024 ? "items-center justify-center" : ""
          }`}
        >
          {/* logo và back to homepage */}
          <div className="flex justify-between items-center">
            <Icons.logo />
            <Link to={pathDefault.homePage}>
              <ArrowLeftOutlined className="mr-2" />
              Go Back
            </Link>
          </div>

          {/* form đăng ký */}
          <h1 className="font-semibold text-4xl mb-2">Đăng ký tài khoản</h1>
          <p className="text-gray-400 mb-4">Nhập thông tin để đăng ký</p>

          <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md">
            {/* Các trường input ở đây */}
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

            {/* Submit Button */}
            <ButtonOutline
              type="submit"
              className="w-full !py-4"
              content="Đăng ký"
            />
          </form>

          {/* Chưa có tài khoản */}
          <div className="text-center mt-4">
            <span>
              Đã có tài khoản?{" "}
              <Link
                to={pathDefault.signIn}
                className="font-medium hover:underline duration-200"
              >
                Đăng nhập ngay
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
