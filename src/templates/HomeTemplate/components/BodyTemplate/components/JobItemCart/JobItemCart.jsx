import React from "react";
import ItemCart from "./ItemCart/ItemCart";

const JobItemCart = () => {
  return (
    <div className=" my-5 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-3 mx-5">
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming-tech-thin.56382a2.svg"
        content={"Programing & Tech"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design-thin.ff38893.svg"
        content={"Graphics & Design"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/digital-marketing-thin.68edb44.svg"
        content={"Digital Marketing"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg"
        content={"Writing & Translation"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation-thin.9d3f24d.svg"
        content={"Video & Animation"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/ai-services-thin.104f389.svg"
        content={"AI Services"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio-thin.43a9801.svg"
        content={"Music & Audio"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business-thin.885e68e.svg"
        content={"Business"}
      />
      <ItemCart
        img="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg"
        content={"Consulting"}
      />
    </div>
  );
};

export default JobItemCart;
