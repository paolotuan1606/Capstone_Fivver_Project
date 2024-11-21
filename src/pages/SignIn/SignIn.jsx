import React, { useContext } from "react";
import Icons from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ButtonOutline } from "../../components/button/ButtonCustom";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation/login-animation.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import { handleUpdateUser } from "../../redux/slice/user.slice";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNotification = useContext(NotificationContext);
  // console.log(handleNotification);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        // xử dụng axios để đăng nhập
        authService
          .signIn(values)
          .then((res) => {
            console.log(res);
            // thực hiện khi đăng nhập thành công sẽ lưu dữ liệu dưới localStorage
            localStorage.setItem("userInfo", JSON.stringify(res.data.content)); // [Object,Object]
            // thay đổi dữ liệu cho redux
            dispatch(handleUpdateUser(res.data.content.user));
            // hiển thị người dùng thành công và chuyển hướng về trang chủ
            handleNotification("success", "Đăng nhập thành công!", 1500);
            setTimeout(() => {
              navigate(pathDefault.homePage);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
            handleNotification("error", err.response.data.content);
          });
      },
      // ValidationSchema
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email!")
          .required("Vui lòng không bỏ trống!"),
        password: Yup.string().required("Vui lòng không bỏ trống!"),
      }),
    });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen grid grid-cols-3 py-10">
      <div className="signIn_animation col-span-2 h-full flex items-center ">
        {/* animation */}
        <Lottie options={defaultOptions} height={700} width={700} />
      </div>
      <div className="signIn_form h-full px-10 flex flex-col justify-between">
        {/* logo and back to homepage  */}
        <div className="flex justify-between items-center">
          <Icons.logo />
          <Link to={pathDefault.homePage}>
            <ArrowLeftOutlined className="mr-2" />
            Go back
          </Link>
        </div>
        {/* form  */}
        <div>
          <h1 className="font-semibold text-4xl mb-2">Trang đăng nhập</h1>
          <p className="text-gray-400 mb-4">Nhập email để bắt đầu truy cập</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="">Email</label>
              <Input
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập email"
              />
              {errors.email && touched.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Mật khẩu</label>
              <Input
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập mật khẩu"
              />
              {errors.password && touched.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div>
              <ButtonOutline
                type="submit"
                className="w-full !py-4"
                content="Đăng nhập"
              />
            </div>
          </form>
        </div>
        {/* đăng ký  */}
        <div className="text-center">
          <span>
            Chưa có tài khoản?{" "}
            <Link
              to={pathDefault.signUp}
              className="font-medium hover:underline duration-200"
            >
              Đăng ký tại đây
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
