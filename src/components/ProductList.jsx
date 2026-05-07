import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, removeProduct }) => {
  // Empty state
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      {/* Iterate over products */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </>
  );
};

export default ProductList;