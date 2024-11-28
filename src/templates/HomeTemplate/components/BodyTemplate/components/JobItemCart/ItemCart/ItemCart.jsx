import React from "react";
import "./itemCart.scss";

const ItemCart = ({ img, content }) => {
  return (
    <div className="item-cart w-32 h-32 space-y-2 border p-4 rounded-2xl shadow-md relative">
      <img src={img} alt="" className="w-1/3" />
      <p className="font-medium">{content}</p>
    </div>
  );
};

export default ItemCart;
