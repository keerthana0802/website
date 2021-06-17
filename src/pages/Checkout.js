import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AddressForm from "../components/CheckoutPageComponents/AddressForm";
import CartPreview from "../components/CheckoutPageComponents/CartPreview";
import NavFooterLayout from "../containers/NavFooterLayout";
import sparkLogoSquare from "../assets/sparkLogoSquare.jpeg";
import { useSelector, useDispatch } from "react-redux";
import {
  openLogin,
  paymentSuccessful,
} from "../store/actions/rootActions";
import { Helmet } from "react-helmet";
function Checkout() {
  const dispatch = useDispatch();
  const uuidRef = useRef(null);
  const address = useSelector((state) => state.checkout.address);
  const authToken = useSelector((state) => state.auth.authToken);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const cart = useSelector((state) => state.checkout.cart);
  const allCourses = useSelector((state) => state.courses.allCourses);
  const promoCode = useSelector((state) => state.checkout.promoCode);
  // ! Managing the orderID
  const [razorOptions, setRazorOptions] = useState({
    key: process.env.REACT_APP_RAZOR_KEY,
    name: "Spark Studio",
    image: sparkLogoSquare,
    handler: async function (response) {
      // console.log("payment response", response);
      window.localStorage.setItem("payment_id", response.razorpay_payment_id);
      dispatch(paymentSuccessful());
      await axios.post(
        `${process.env.REACT_APP_RAZOR_API}/${uuidRef.current}/success`,
        { payment_response: response },
        { headers: { Authorization: authToken, "X-SSUID": userDetails.id } }
      );
      window.location.href = "/payment-successful";
    },

    notes: {
      address: "Spark Studio",
    },
    theme: {
      color: "#63C2AF",
      hide_topbar: true,
    },
  });
  var rzp1;
  const getOrderDetails = async () => {
    const cartItems = await cart.map((item) => {
      return { course_id: item.courseId, quantity: item.qty };
    });
    const resp = await axios.post(
      process.env.REACT_APP_RAZOR_API,
      {
        order: {
          visitor_uuid: window.localStorage.visitor_uuid,
          items: cartItems,
          promo_code: promoCode,
          address_attributes: address,
        },
      },
      {
        headers: {
          Authorization: authToken,
          "X-SSUID": userDetails.id,
        },
      }
    );
    let description;
    if (cart.length === 1) {
      description = allCourses.find(
        (item) => cart[0].courseId === item.courseId
      ).displayName;
    } else {
      description = `${
        allCourses.find((item) => cart[0].courseId === item.courseId)
          .displayName
      } and ${cart.length - 1} others`;
    }
    uuidRef.current = resp.data.order.uuid;
    rzp1 = new window.Razorpay({
      ...razorOptions,
      description: description,
      amount: resp.data.order.amount,
      order_id: resp.data.order.razorpay_order_id,
      currency: resp.data.order.currency,
      prefill: {
        name: address.full_name,
        email: address.email,
        contact: userDetails?.phoneNumber?.split("-").join("") || "",
      },
    });
    await rzp1.open();
    rzp1.on("payment.failed", async function (response) {
      // console.log("failure", response);
      await axios.post(
        `${process.env.REACT_APP_RAZOR_API}/${resp.data.order.uuid}/failure`,
        {
          payment_response: {
            razorpay_order_id: resp.data.order.razorpay_order_id,
            errors: {
              x: response,
            },
          },
        },
        { headers: { Authorization: authToken, "X-SSUID": userDetails.id } }
      );
    });
  };
  useEffect(() => {
    if (authToken.length === 0 || userDetails.id === undefined) {
      dispatch(openLogin());
    }
  }, []);

  const openPayment = async (ev) => {
    ev.preventDefault();
    await getOrderDetails();
  };
  return (
    <NavFooterLayout>
      <Helmet>
        <title>Checkout page</title>
      </Helmet>
      <div className="spark-checkout-page">
        <CartPreview />
        <AddressForm openPayment={openPayment} />
      </div>
    </NavFooterLayout>
  );
}

export default Checkout;
