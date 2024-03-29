import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import NotFound from "../containers/NotFound";
import Layaout from "../components/Layaout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

export default function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layaout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layaout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
