import React, { useState, useEffect } from "react";
import axios from "axios";
import moengageEvent from "../helpers/MoengageEventTracking";
function PaymentPOC() {
  // ! Managing the orderID
  const [orderDetails, setOrderDetails] = useState("");
  const [razorOptions, setRazorOptions] = useState({
    key: "rzp_test_QdrQy08GBk9ZFP",
    name: "spark",
    description: "Test Transaction",
    image: "https://sparkstudio.co/wp-content/uploads/2021/03/logo-new.png",
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
      color: "#ffc142",
      hide_topbar: true,
      // backdrop_color: "#fff",
    },
  });
  useEffect(() => {
    const getOrderDetails = async () => {
      const resp = await axios.post(process.env.REACT_APP_RAZOR_API, {
        order: {
          visitor_uuid: window.localStorage.visitor_uuid,
          course_id: "CO212PS",
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
    // getOrderDetails();
  }, []);

  let options = {
    key: "rzp_test_QdrQy08GBk9ZFP", // Enter the Key ID generated from the Dashboard
    amount: "200", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "spark",
    description: "Test Transaction",
    // image: "https://example.com/your_logo",
    order_id: "order_HHi4xVvrmgbfwC", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
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
      color: "#ffc142",
    },
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
  // ! Moengage testing
  const handler = () => {
    moengageEvent("react_click_test", {
      event_type: "Click",
      funnel_stage: "Consideration",
      event_category: "Browsing",
      feature_set: "Base",
      event_priority: "Low",
      kingdom: "test",
      phylum: "test",
      class: "test",
      order: "test",
      family: "test",
      genus: "test",
      species: "test",
      app_version: "0.0.0",
      a_b_variant: "a",
    });
  };
  return (
    <div className="payment-test-page">
      <p>payment testing</p>
      <button
        onClick={(ev) => {
          ev.preventDefault();
          rzp1.open();
        }}
      >
        Click to pay
      </button>
      <button onClick={handler}>Click for mo</button>
    </div>
  );
}

export default PaymentPOC;
