import React from "react";
import { products } from "../assets/assets";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
     <div className="grid gap-3 mt-5 mx-9 grid-cols md:grid-cols-4">
         {products.map((product) => (
        <ProductCard
          key={product.id}
          img={product.img}
          name={product.name}
          desc={product.desc}
          price={product.price}
        />
      ))}
     </div>
    </>
  );
};

export default Products;
