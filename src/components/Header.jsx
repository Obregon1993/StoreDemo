import React from "react";
import "../styles/components/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="Header-title">My Store</h1>
      <div className="Header-checkout">Checkout</div>
    </div>
  );
}