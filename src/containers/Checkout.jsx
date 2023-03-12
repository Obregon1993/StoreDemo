import React from "react";
import "../styles/components/Checkout.css";

export default function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Shop List</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type="button">Delete</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Total Price: $10</h3>
        <button type="button">Proceed to checkout </button>
      </div>
    </div>
  );
}
