import React from "react";
import { products } from "../assets/assets";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={Math.random()}
          img={product.img}
          name={product.name}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </>
  );
};

export default Products;
