import React from "react";
import "./Guide.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const Guide = ({ typeJobDetail }) => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  return (
    <div className="sm:container md:container lg:container xl:container 2xl:container ">
      <div className="flex items-baseline justify-between">
        <h1 className="text-4xl font-bold">
          Guides related to {typeJobDetail}
        </h1>
        <a href="#" className="hover:underline">
          See more guides
        </a>
      </div>
      <OwlCarousel
        className="guideCarousel my-8"
        width={100}
        margin={20}
        nav={true}
        smartSpeed={800}
        mouseDrag={false}
        navText={[prevIcon, nextIcon]}
        responsive={{
          0: { items: 1 }, // Màn hình nhỏ nhất hiển thị 2 items
          768: { items: 2 }, // Màn hình trung bình hiển thị 4 items
          1024: { items: 3 }, // Màn hình lớn hiển thị 6 items
        }}
      >
        <Link
          href="#"
          className="item hover:opacity-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="rounded-xl"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg"
            alt=""
          />
          <p className="font-semibold text-lg my-4">
            How to design a logo: 12 steps to creating a business logo from
            scratch
          </p>
        </Link>
        <Link
          href="#"
          className="item hover:opacity-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="rounded-xl"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/53ef4b77085b5514fad4be0d356f8807-1597649231931/branding-min.jpg"
            alt=""
          />
          <p className="font-semibold text-lg my-4">What is branding ?</p>
        </Link>
        <Link
          href="#"
          className="item hover:opacity-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="rounded-xl"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/b9495125dbb3432bf13275690d91a4f8-1656002118855/how%20to%20make%20a%20logo.jpg"
            alt=""
          />
          <p className="font-semibold text-lg my-4">
            How to Make a Gaming Logo - Level Up Your Profile
          </p>
        </Link>
        <Link
          href="#"
          className="item hover:opacity-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="rounded-xl"
            src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/4b32946266c012eadd1ea11c6bc83e4b-1686252121432/1685438495271-HowtocreateanEcommercelogothatstandsout.jpg"
            alt=""
          />
          <p className="font-semibold text-lg my-4">
            6 Tips to Craft an E-commerce Logo Design That Attracts Customers
          </p>
        </Link>
        <Link
          href="#"
          className="item hover:opacity-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="rounded-xl"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/7c29013eb2025d2fe0af9c9c5bf7ab0d-1676381875122/importance%20of%20logo.jpg"
            alt=""
          />
          <p className="font-semibold text-lg my-4">
            The Importance of a Logo for Your Small Business
          </p>
        </Link>
        <Link
          href="#"
          className="item hover:opacity-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="rounded-xl"
            src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/74773bd8aab051ef8a227380dc4abfc9-1651413395712/how%20to%20chhose%20a%20logo%20font.jpg"
            alt=""
          />
          <p className="font-semibold text-lg my-4">
            The 4 main types of fonts & how to choose the right font for your
            brand and logo
          </p>
        </Link>
      </OwlCarousel>
    </div>
  );
};

export default Guide;
