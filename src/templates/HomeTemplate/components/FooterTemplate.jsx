import React from "react";
import Icons from "../../../components/Icons";
import {
  CopyrightOutlined,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TikTokOutlined,
  XOutlined,
} from "@ant-design/icons";
import "./footerTemplate.scss";

const FooterTemplate = () => {
  return (
    <div className="container my-2  px-10 space-y-5 mt-10">
      <div className="footer-detail grid grid-cols-5">
        <div className="space-y-3">
          <h3 className="font-bold">Categories</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="">Graphics & Design</a>
            </li>
            <li>
              <a href="">Digital Marketing</a>
            </li>
            <li>
              <a href="">Writing & Translation</a>
            </li>
            <li>
              <a href="">Video & Animation</a>
            </li>
            <li>
              <a href="">Music & Audio</a>
            </li>
            <li>
              <a href="">Programming & Tech</a>
            </li>
            <li>
              <a href="">Consulting</a>
            </li>
            <li>
              <a href="">Data</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">Personal Growth & Hobbies</a>
            </li>
            <li>
              <a href="">Photography</a>
            </li>
            <li>
              <a href="">Finance</a>
            </li>
            <li>
              <a href="">End-to-End Projects</a>
            </li>
            <li>
              <a href="">Service Catalog</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">For Clients</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="">How Fiverr Works</a>
            </li>
            <li>
              <a href="">Customer Success Stories</a>
            </li>
            <li>
              <a href="">Trust & Safety</a>
            </li>
            <li>
              <a href="">Quality Guide</a>
            </li>
            <li>
              <a href="">
                Fiverr Learn
                <p>Online Course</p>
              </a>
            </li>
            <li>
              <a href="">Fiverr Guides</a>
            </li>
            <li>
              <a href="">Fiverr Answers</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">For Freelancers</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="">Become a Fiverr Freelancer</a>
            </li>
            <li>
              <a href="">Become an Agency</a>
            </li>
            <li>
              <a href="">Kickstart</a>
            </li>
            <li>
              <a href="">Community Hub</a>
            </li>
            <li>
              <a href="">Forum</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">Business Solutions</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="">Fiverr Pro</a>
            </li>
            <li>
              <a href="">Project Management Service</a>
            </li>
            <li>
              <a href="">
                ClearVoice
                <p>Content Marketing</p>
              </a>
            </li>
            <li>
              <a href="">
                Working Not Working
                <p>Creative Talent</p>
              </a>
            </li>
            <li>
              <a href="">
                AutoDS
                <p>Dropsshiping Tool</p>
              </a>
            </li>
            <li>
              <a href="">Fiverr Logo Maker</a>
            </li>
            <li>
              <a href="">Contact Sales</a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="">About Fiverr</a>
            </li>
            <li>
              <a href="">Help & Support</a>
            </li>
            <li>
              <a href="">Social Impact</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Partnerships</a>
            </li>
            <li>
              <a href="">Creator Network</a>
            </li>
            <li>
              <a href="">Affiliates</a>
            </li>
            <li>
              <a href="">Invite a Friend</a>
            </li>
            <li>
              <a href="">Press & News</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-contact flex items-center justify-between text-gray-500">
        <div className="flex items-center space-x-12">
          <Icons.footerLogo />
          <span className="text-gray-500">
            <CopyrightOutlined />
            Fiverr International Ltd. 2024
          </span>
        </div>
        <div className="flex items-center space-x-10">
          <div className="space-x-6">
            <i className="fa-brands fa-tiktok text-xl py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer " />
            <i className="fa-brands fa-instagram text-xl py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer " />
            <i className="fa-brands fa-linkedin text-xl py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer " />
            <i className="fa-brands fa-facebook text-xl py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer " />
            <i className="fa-brands fa-pinterest text-xl py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer " />
          </div>
          <div className="flex items-center space-x-5">
            <span className="py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer">
              <GlobalOutlined /> English
            </span>
            <span className="py-2 px-3 rounded-full hover:bg-gray-200 duration-200 cursor-pointer">
              US$ USD
            </span>
            <span>
              <svg
                className="svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={16}
                  cy={16}
                  r="15.5"
                  fill="white"
                  stroke="currentColor"
                  className="circle-wrapper"
                />
                <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z" />
                <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTemplate;
