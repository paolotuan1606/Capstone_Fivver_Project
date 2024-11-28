import React from "react";
import ItemCart from "./ItemCart/ItemCart";

const JobItemCart = () => {
  return (
    <div className=" my-5 flex gap-3">
      <ItemCart
        img="./public/list-job-img/programming-tech.svg"
        content={"Programing & Tech"}
      />
      <ItemCart
        img="./public/list-job-img/graphics-design.svg"
        content={"Graphics & Design"}
      />
      <ItemCart
        img="./public/list-job-img/digital.svg"
        content={"Digital Marketing"}
      />
      <ItemCart
        img="./public/list-job-img/writing-translation.svg"
        content={"Writing & Translation"}
      />
      <ItemCart
        img="./public/list-job-img/video-animation.svg"
        content={"Video & Animation"}
      />
      <ItemCart
        img="./public/list-job-img/service.svg"
        content={"AI Services"}
      />
      <ItemCart
        img="./public/list-job-img/music-audio.svg"
        content={"Music & Audio"}
      />
      <ItemCart img="./public/list-job-img/business.svg" content={"Business"} />
      <ItemCart
        img="./public/list-job-img/consulting.svg"
        content={"Consulting"}
      />
    </div>
  );
};

export default JobItemCart;
