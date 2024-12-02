import React from "react";

const ServiceCard = ({ title, color, img }) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`h-64 w-52 max-md:h-52 max-md:w-40 max-sm:h-48 max-sm:w-36 rounded-2xl cursor-pointer p-2 mr-3 my-14 flex flex-col justify-between flex- `}
    >
      <h2 className="text-xl max-md:text-lg  max-sm:text-base px-2 pt-2 text-white font-medium">
        {title}
      </h2>
      <img src={img} className="w-full rounded-2xl" alt="" />
    </div>
  );
};

export default ServiceCard;
