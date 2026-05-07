import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div
      data-testid={`product-${product.id}`}
      className={
        product.inStock
          ? "cardClass"
          : "cardClass outOfStockClass"
      }
    >
      <h3>{product.name}</h3>

      <p>${product.price}</p>

      {product.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}

      <button onClick={() => removeProduct(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;