import React, { useRef } from "react";
import "./CarouselJobDetail.scss";
import { QuestionCircleFilled } from "@ant-design/icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const CarouselJobDetail = ({ hinhAnh }) => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;

  return (
    <div className="">
      <div className="myClient my-4 pt-4">
        <div className="myClientContent flex items-center">
          <div className="w-1/4 flex items-center">
            <p className="text-gray-950 font-bold mr-2">Among my clients</p>
            <QuestionCircleFilled />
          </div>
          <OwlCarousel
            autoWidth={true}
            dots={false}
            margin={30}
            nav={true}
            loop={false}
            mouseDrag={false}
            navText={[prevIcon, nextIcon]}
            className="carouselJobDetail flex items-center relative"
          >
            <div className="item flex items-center space-x-3">
              <div className="w-7 h-7 flex items-center border border-slate-400 ">
                <img
                  className="w-full"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/dde6d7a1a650e660ac3522dd8c693f0b-1643199866/61a87d9284d88e25cd784b35.png"
                  alt=""
                />
              </div>
              <p>Legacy Films</p>
            </div>
            <div className="item flex items-center space-x-3">
              <div className="w-7 h-7 flex items-center border border-slate-400 ">
                <img
                  className="w-full"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/f1d8228b3f1c15f05bc133c4d6f9c975-1651041345693/Dallas-Glaucoma-Specialists-397x100-150.png"
                  alt=""
                />
              </div>
              <p>DALLAS EYE MD</p>
            </div>
            <div className="item flex items-center space-x-3">
              <div className="w-7 h-7 flex items-center border border-slate-400 ">
                <img
                  className="w-full"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/74130637001575a499b74ee43acb8a0d-1643199951/61a87e7bf3085f4291c4adda.png"
                  alt=""
                />
              </div>
              <p>Foundry Academics</p>
            </div>
            <div className="item flex items-center space-x-3">
              <div className="w-7 h-7 flex items-center border border-slate-400 ">
                <img
                  className="w-full"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/b2c731b153aca6306877f471c00dd503-1654150043/628607862ec8f1481a844684.png"
                  alt=""
                />
              </div>
              <p>Eric Burns Insurance</p>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="">
        <div className="w-full overflow-hidden">
          <OwlCarousel
            className="carouselJobImg"
            dots={false}
            nav={true}
            items={1}
            mouseDrag={false}
            navText={[prevIcon, nextIcon]}
          >
            <div className="gallery_item px-10">
              <a href={hinhAnh} data-fancybox>
                <img src={hinhAnh} alt />
              </a>
            </div>
            <div className="gallery_item px-10">
              <a
                href="https://dynamic.design.com/asset/logo/f0af4087-ffa7-453c-86f9-c192e14eb165/logo-search-grid-2x?logoTemplateVersion=1&v=638565286469030000"
                data-fancybox
              >
                <img
                  src="https://dynamic.design.com/asset/logo/f0af4087-ffa7-453c-86f9-c192e14eb165/logo-search-grid-2x?logoTemplateVersion=1&v=638565286469030000"
                  alt
                />
              </a>
            </div>
            <div className="gallery_item px-10">
              <a
                href="https://marketplace.canva.com/EAF7cca_2pA/1/0/1600w/canva-black-and-blue-initials-creative-logo-U-z4x7ZUjjs.jpg"
                data-fancybox
              >
                <img
                  src="https://marketplace.canva.com/EAF7cca_2pA/1/0/1600w/canva-black-and-blue-initials-creative-logo-U-z4x7ZUjjs.jpg"
                  alt
                />
              </a>
            </div>
            <div className="gallery_item px-10">
              <a
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimrMUId692F8ytceMnSgzuxqc2GUIAmLxVw&s"
                data-fancybox
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimrMUId692F8ytceMnSgzuxqc2GUIAmLxVw&s"
                  alt
                />
              </a>
            </div>
            <div className="gallery_item px-10">
              <a
                href="https://grehasoft.com/wp-content/uploads/2021/02/logo-designing-kerala.jpg"
                data-fancybox
              >
                <img
                  src="https://grehasoft.com/wp-content/uploads/2021/02/logo-designing-kerala.jpg"
                  alt
                />
              </a>
            </div>
          </OwlCarousel>
        </div>
        <div className="">
          {/* <OwlCarousel
            className="carouselFullJobImg"
            dots={false}
            mouseDrag={false}
            nav={true}
            navText={[prevIcon, nextIcon]}
          >
            <div className="item">
              <a href="">
                <img src={hinhAnh} alt />
              </a>
            </div>
            <div className="item">
              <a href="">
                <img
                  src="https://marketplace.canva.com/EAF7cca_2pA/1/0/1600w/canva-black-and-blue-initials-creative-logo-U-z4x7ZUjjs.jpg"
                  alt
                />
              </a>
            </div>
            <div className="item">
              <a href="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimrMUId692F8ytceMnSgzuxqc2GUIAmLxVw&s"
                  alt
                />
              </a>
            </div>
            <div className="item">
              <a href="">
                <img
                  src="https://grehasoft.com/wp-content/uploads/2021/02/logo-designing-kerala.jpg"
                  alt
                />
              </a>
            </div>
          </OwlCarousel> */}
        </div>
      </div>
    </div>
  );
};

export default CarouselJobDetail;
