import React from "react";

const GotoChildren = ({ content, img, content1 }) => {
  return (
    <div className="my-5">
      <div className="shadow-lg h-44 mr-5 rounded-xl px-14 py-5 flex gap-5 flex-col justify-between items-center">
        <img src={`./public/goto-img/${img}.png`} className="w-20" alt="" />
        <h2 className="font-medium text-center">
          {content} <br /> {content1}
        </h2>
      </div>
    </div>
  );
};

export default GotoChildren;
