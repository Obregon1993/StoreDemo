import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Header.css";

export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">My Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}
