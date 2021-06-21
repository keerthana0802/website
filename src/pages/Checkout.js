import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AddressForm from "../components/CheckoutPageComponents/AddressForm";
import CartPreview from "../components/CheckoutPageComponents/CartPreview";
import NavFooterLayout from "../containers/NavFooterLayout";
import sparkLogoSquare from "../assets/sparkLogoSquare.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { openLogin, paymentSuccessful } from "../store/actions/rootActions";
import moengageEvent from "../helpers/MoengageEventTracking";
import {
  invokePaymentAttributes,
  paymentStatusAttributes,
} from "../helpers/MoengageAttributeCreators";
import PrimaryButton from "../components/buttons/PrimaryButton";
function Checkout() {
  const dispatch = useDispatch();
  const orderDetailsRef = useRef(null);
  const uuidRef = useRef(null);
  // const address = useSelector((state) => state.checkout.address);
  const authToken = useSelector((state) => state.auth.authToken);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const cart = useSelector((state) => state.checkout.cart);
  const allCourses = useSelector((state) => state.courses.allCourses);
  const promoCode = useSelector((state) => state.checkout.promoCode);
  // ! Payment success handler function
  const paymentSuccessHandler = async function (response) {
    window.localStorage.setItem("payment_id", response.razorpay_payment_id);
    // console.log("from success", userDetails);
    await axios.post(
      `${process.env.REACT_APP_RAZOR_API}/${uuidRef.current}/success`,
      { payment_response: response },
      { headers: { Authorization: authToken, "X-SSUID": userDetails.id } }
    );
    moengageEvent(
      "Payment_Status",
      paymentStatusAttributes(
        orderDetailsRef.current.id,
        orderDetailsRef.current.totalQty,
        1,
        orderDetailsRef.current.amount,
        8,
        orderDetailsRef.current.currency
      )
    );

    window.location.href = "/payment-successful";
    setTimeout(() => {
      dispatch(paymentSuccessful());
    }, 200);
  };
  // ! Managing the orderID
  const [razorOptions, setRazorOptions] = useState({
    key: process.env.REACT_APP_RAZOR_KEY,
    name: "Spark Studio",
    image: sparkLogoSquare,
    notes: {
      address: "Spark Studio",
    },
    theme: {
      color: "#63C2AF",
      hide_topbar: true,
    },
  });
  var rzp1;
  const getOrderDetails = async (address) => {
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
    let totalQty = cartItems.reduce((acc, course) => acc + course.quantity, 0);
    moengageEvent(
      "Invoke_Payment",
      invokePaymentAttributes(
        resp.data.order.razorpay_order_id,
        totalQty,
        JSON.stringify(address),
        resp.data.order.amount,
        resp.data.order.currency
      )
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
    orderDetailsRef.current = {
      id: resp.data.order.razorpay_order_id,
      amount: resp.data.order.amount,
      currency: resp.data.order.currency,
      totalQty: totalQty,
    };

    rzp1 = await new window.Razorpay({
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
      handler: paymentSuccessHandler,
    });
    await rzp1.open();
    rzp1.on("payment.failed", async function (response) {
      moengageEvent(
        "Payment_Status",
        paymentStatusAttributes(
          resp.data.order.razorpay_order_id,
          totalQty,
          0,
          resp.data.order.amount,
          0,
          resp.data.order.currency
        )
      );

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
    window.scrollTo(0, 0);
  }, []);

  const openPayment = async (ev, addressData) => {
    ev.preventDefault();
    // console.log("from open", userDetails);
    await getOrderDetails(addressData);
  };
  return (
    <NavFooterLayout>
      {/* <Helmet>
        <title>Checkout page</title>
      </Helmet> */}
      <div
        className={
          cart.length > 0
            ? "spark-checkout-page"
            : "spark-checkout-page cart-empty"
        }
      >
        {cart.length > 0 ? (
          <>
            <CartPreview />
            <AddressForm openPayment={openPayment} />
          </>
        ) : (
          <div className="spark-checkout-page__empty-cart">
            <h1>Have a look at the amazing courses we offer.</h1>
            <PrimaryButton
              version="version-1"
              buttonText="Explore Courses"
              linkTo="/all-courses"
            />
          </div>
        )}
      </div>
    </NavFooterLayout>
  );
}

export default Checkout;
