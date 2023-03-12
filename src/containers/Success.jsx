import React from "react";
import "../styles/components/Success.css";

export default function Success() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Carlos, thanks for your order</h2>
        <span>Your order will be delivery in 3 bussines days:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
}
