import React, { useContext } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
import "../styles/components/Products.css";

export default function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
