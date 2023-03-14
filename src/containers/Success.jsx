import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "../styles/components/Success.css";

export default function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0]);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, thanks for your order`}</h2>
        <span>Your order will be delivery in 3 bussines days:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
}
