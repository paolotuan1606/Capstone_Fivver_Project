import React from "react";

const GotoChildren = ({ content, img, content1 }) => {
  return (
    <div className="my-5">
      <div className="shadow-lg md:h-60 mr-5 sm:h-52 rounded-xl px-14 py-5 flex gap-5 flex-col justify-between items-center">
        <img src={img} className="md:!w-32 sm:!w-20" alt="" />
        <h2 className="font-semibold text-center md:text-base sm:text-sm">
          {content} <br /> {content1}
        </h2>
      </div>
    </div>
  );
};

export default GotoChildren;
