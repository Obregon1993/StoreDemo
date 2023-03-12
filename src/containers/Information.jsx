import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/Information.css";

export default function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useNavigate();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };
    addToBuyer(buyer);
    history("/checkout/payment");
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact information:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Apt" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="ZipCode" name="cp" />
            <input type="text" placeholder="Phone Number" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pay
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order:</h3>
        {cart.map((item) => (
          <div key={Math.random() * 10} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
