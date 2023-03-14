import React, { useContext, useEffect } from "react";
import "../styles/components/Payment.css";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const style = { layout: "vertical" };
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[handleSumTotal(), currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: handleSumTotal(),
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          const newOrder = {
            buyer,
            product: cart,
            payment: data,
          };
          addNewOrder(newOrder);
          navigate("/checkout/success");
          return actions.order.capture().then(function () {});
        }}
      />
    </>
  );
};

const Payments = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order Summary:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={Math.random() * 10}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider
            options={{
              "client-id":
                "AfTUdwL_Bu6IXJMRfwbvHdXRqawNKejgoxaHL5TAMM246MkZGLr3VHEPLQKt_VcbYaHdTN2vx4qL7TkP",
              components: "buttons",
              currency: "USD",
            }}
          >
            <ButtonWrapper currency={"USD"} showSpinner={false} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Payments;
