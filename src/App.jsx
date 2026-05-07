import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: false },
  { id: 3, name: "Tablet", price: 499, inStock: true }
]);

  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = showInStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowInStockOnly(!showInStockOnly)}>
        {showInStockOnly ? "Show All" : "Show In Stock Only"}
      </button>

      <ProductList
        products={filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;
