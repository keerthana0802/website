import React, { useState, useEffect } from "react";
import axios from "axios";
import AddressForm from "../components/CheckoutPageComponents/AddressForm";
import CartPreview from "../components/CheckoutPageComponents/CartPreview";
import NavFooterLayout from "../containers/NavFooterLayout";
import sparkLogoSquare from "../assets/sparkLogoSquare.jpeg";
function Checkout() {
  // ! Managing the orderID
  const [orderDetails, setOrderDetails] = useState("");
  const [razorOptions, setRazorOptions] = useState({
    key: "rzp_test_QdrQy08GBk9ZFP",
    name: "Spark Studio",
    description: "Test Transaction",
    image: sparkLogoSquare,
    handler: function (response) {
      console.log(response);
    },
    prefill: {
      name: "Manas Tripathi",
      email: "manas@sparkstudio.co",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#63C2AF",
      hide_topbar: true,
    },
  });
  const getOrderDetails = async () => {
    const resp = await axios.post(process.env.REACT_APP_RAZOR_API, {
      order: {
        visitor_uuid: window.localStorage.visitor_uuid,
        course_ids: ["CO212PS"],
      },
    });
    await setOrderDetails(resp.data.order);
    console.log(resp.data.order);
    await setRazorOptions({
      ...razorOptions,
      amount: resp.data.order.amount,
      order_id: resp.data.order.razorpay_order_id,
      currency: resp.data.order.currency,
    });
  };
  var rzp1 = new window.Razorpay(razorOptions);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  const openPayment = (ev) => {
    ev.preventDefault();
    rzp1.open();
  };
  return (
    <NavFooterLayout>
      <div className="spark-checkout-page">
        <CartPreview />
        <AddressForm openPayment={openPayment} />
      </div>
    </NavFooterLayout>
  );
}

export default Checkout;