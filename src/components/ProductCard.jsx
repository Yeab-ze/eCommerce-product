import React from "react";
import { products, assets } from "../assets/assets";

const ProductCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-5 mx-19">
        <p className="font-bold text-4xl">Featured Proucts</p>
        <button className="bg-blue-500 rounded-md text-white py-px px-3">
          Buy Templete
        </button>
      </div>
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
      <p className="mx-19 mt-4 font-bold text-4xl">Shop by catagory</p>
      <div className="grid grid-cols md:grid-cols-3 gap-3 mx-15 mt-5">
        {products.slice(0, 3).map((product) => (
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

      <div className="bg-gray-200 my-19 py-9">
        <h1 className="text-center font-bold pb-9  text-2xl ">
          Expericances Streamlined shopping with cresendi
        </h1>
        <div className="grid mx-19 gap-5 grid-cols md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">Free delivery</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              animi tenetur,olor sit amet consectetur adipisicing elit. Nobis
              animi tenetur,
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">Self pickup</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              animi tenetur,
            </p>
            <button className="bg-blue-500 mt-4 text-white py-px px-3 rounded-md">
              Shop Now
            </button>
          </div>

          <div>
            <p className="text-2xl font-bold">Waranty</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              animi tenetur,
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-500/50 items-center grid grid-cols md:grid-cols-2">
        <img src={assets.womenWithHeadphone} alt="" />
        <div className=" py-3">
          <p className="font-bold text-6xl">Join our list today!</p>
          <p>Lorem ipsum dolor sit</p>
          <div className="grid text-3xl space-y-3 grid-cols font-bold mt-9 md:grid-cols-2">
            <p>Lorem ipsum dolor</p>
            <p> sit amet consectetur </p>
            <p>adipisicing elit.</p>
            <p>Incidunt, laborum</p>
          </div>
          <p className="pt-7 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            tenetur itaque ex expedita distinctio doloribus consequuntur ipsum
            similique nihil adipisci, beatae quidem eius iure magni voluptas, in
            rerum? Veniam, voluptatum!
          </p>
          <button className="bg-blue-500 mt-6 w-3/4 mx-7  py-3 rounded-md text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
