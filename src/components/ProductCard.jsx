import React from "react";
import { products } from "../assets/assets";

const ProductCard = () => {
  return (
    <div className="grid grid-cols gap-3 mx-15 mt-5 md:grid-cols-4">
      {products.map((product) => (
        <div
          className="border rounded-md overflow-hidden object-cover"
          key={product.id}
        >
          <img className="mx-auto" src={product.img} alt="" />
          <div className="px-3 py-4 text-xl">
            <p className="font-bold text-blue-500">{product.name}</p>
            <p>{product.desc}</p>
            <p className="text-red-400">${product.price} USD</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
