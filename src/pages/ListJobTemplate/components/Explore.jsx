import React from "react";
import "./Explore.scss";
import { Button } from "antd";

const Explore = ({ typeJobDetail }) => {
  return (
    <div className="exploreContent sm:container md:container lg:container xl:container 2xl:container py-10 space-y-7 items-center">
      <div className="exploreItem space-y-7">
        <h2 className="text-center text-4xl font-bold">
          Explore More {typeJobDetail} Services
        </h2>
        <div className="groupBtnExplore space-x-5 space-y-5 text-center">
          <Button className="btnExplor">Logo Maker</Button>
          <Button className="btnExplor">Brand style guides</Button>
          <Button className="btnExplor">Logo animation</Button>
          <Button className="btnExplor">Twitch logo</Button>
          <Button className="btnExplor">Metal band logo</Button>
          <Button className="btnExplor">Retro logo design</Button>
          <Button className="btnExplor">Geometric logo design</Button>
          <Button className="btnExplor">Modern logo design</Button>
          <Button className="btnExplor">Vintage logo design</Button>
          <Button className="btnExplor">Mascot logo design</Button>
          <Button className="btnExplor">Minimalist logo design</Button>
          <Button className="btnExplor">Signature logo design</Button>
          <Button className="btnExplor">Water color logo design</Button>
          <Button className="btnExplor">3D logo design</Button>
          <Button className="btnExplor">Hand-Drawn logo design</Button>
          <Button className="btnExplor">PDF logo design</Button>
          <Button className="btnExplor">SVG logo design</Button>
          <Button className="btnExplor">PNG logo design</Button>
        </div>
      </div>
      <div className="exploreItem space-y-7">
        <h2 className="text-center text-4xl font-bold">
          Hire freelancers related to {typeJobDetail}
        </h2>
        <div className="groupBtnExplore space-x-5 space-y-5 text-center">
          <Button className="btnExplor">Minimalist logo designers</Button>
          <Button className="btnExplor">3D logo designers</Button>
          <Button className="btnExplor">Logo redesign experts</Button>
          <Button className="btnExplor">Business card designers</Button>
          <Button className="btnExplor">Social media kit experts</Button>
          <Button className="btnExplor">Designers</Button>
          <Button className="btnExplor">Logo editors</Button>
          <Button className="btnExplor">Vectorworks experts</Button>
          <Button className="btnExplor">2D logo designers</Button>
          <Button className="btnExplor">Stationery designers</Button>
          <Button className="btnExplor">Graphic designers</Button>
        </div>
      </div>
      <div className=" space-y-7">
        <h2 className="text-center text-4xl font-bold">{typeJobDetail} FAQs</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <h3 className="font-semibold">What is logo design?</h3>
            <p>
              Logo design is the art of creating a visually stunning mark for a
              brand or company. A logo usually consists of a symbol, brandmark,
              or image that represents or symbolizes the company. a logo should
              stand out and be easily recognized.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">What makes a good logo?</h3>
            <p>
              A good logo should be visually appealing, distinctive, memorable,
              simple in form, and stand out from the crowd. It should match the
              brand's aesthetics and message. and above all, a great logo should
              have exceptional conceptualization and execution.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">How to hire top logo designers?</h3>
            <p>
              Once you’ve identified a pool of logo designers based on style and
              availability, evaluate your candidates in terms of their level and
              type of experience, especially in your niche or field. also,
              browse through their gig gallery and portfolio for specific
              examples of prior work.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">How much does logo design cost?</h3>
            <p>
              The cost of a professional logo design can vary depending on
              expertise, experience and other factors. designing a great logo
              involves much more than a simple sketch; it also comprises market
              research, artistic skill & technical knowledge, brand design, and
              revisions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">
              Do I need to prepare anything for my logo design?
            </h3>
            <p>
              It's always a good idea to have a few things prepared beforehand.
              as a business, you should know your brand identity, your company's
              message, and aesthetics. It's also best to set a budget and write
              a detailed logo design brief in advance. this will help your logo
              designer create the perfect logo for you!
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">
              What qualities should I look for in a logo designer?
            </h3>
            <p>
              When looking for a professional logo designer, you should choose
              someone who will best fit your business. a professional logo
              designer should exhibit personality, passion, and professionalism.
              You want someone who has experience in your niche, research
              skills, flexibility, responds quickly, provides outstanding
              examples, and shares the design process with you.
            </p>
            <a
              href="#"
              className="seeMore inline-block font-semibold cursor-pointer underline"
            >
              See more questions about Logo Design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
