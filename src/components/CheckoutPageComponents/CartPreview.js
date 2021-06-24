import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../cards/CartCard";
import { setPromoCode } from "../../store/actions/rootActions";
function CartPreview() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.checkout.cart);
  const coursesData = useSelector((state) => state.courses.allCourses);
  const currency = useSelector((state) => state.courses.currency);
  const promoCode = useSelector((state) => state.checkout.promoCode);
  const userDetails = useSelector((state) => state.auth.userDetails);
  return (
    <section className="cart-preview__wrapper">
      <div className="cart-preview">
        <div className="cart-preview--top">
          {/* <h1 className="cart-preview__customer-name">
            Hey {userDetails?.fullName || "There"},
          </h1> */}
          <h2 className="cart-preview__liner">
            We are excited to have you on this journey with the Spark Studio
            community!
          </h2>
          <div className="cart-preview__cart-cards">
            {cart.map((course, index) => {
              let found = coursesData.find(
                (item) => item.courseId === course.courseId
              );
              if (course.qty > 0)
                return (
                  <CartCard
                    courseName={found.displayName}
                    courseCategory={found.vertical}
                    courseAgeGroup={`${found.minAge}-${found.maxAge}`}
                    courseCurrency={currency}
                    coursePrice={
                      currency === "INR" ? found.priceInr : found.priceUsd
                    }
                    courseQty={course.qty}
                    courseColor={found.verticalThemeColorDark}
                    courseId={course.courseId}
                    version="--large"
                    courseDuration={found.numberOfClasses}
                    sessionDuration={found.sessionDuration}
                  />
                );
            })}
          </div>
          <div className="cart-preview__cart-cards--total">
            <span>Total payable amount</span>
            <span>
              {currency}{" "}
              {cart.reduce((a, course) => {
                let found = coursesData.find(
                  (item) => item.courseId === course.courseId
                );
                if (currency === "INR") {
                  return a + found.priceInr * course.qty;
                } else {
                  return a + found.priceUsd * course.qty;
                }
              }, 0)}
            </span>
          </div>
        </div>

        {/* <p className="cart-preview__liner-2">
          Our team will get in touch with you.
        </p> */}
        {/* <label htmlFor="promo" className="cart-preview__promo-code">
          <input
            type="text"
            name="promo"
            className="cart-preview__promo-code--input valid"
            value={promoCode || ""}
            onChange={(ev) => {
              dispatch(setPromoCode(ev.target.value));
            }}
            required
          />
          <button>APPLY</button>
          <div className="cart-preview__promo-code--validation-tooltip valid">
            <p>
              Promo code applied! Yay You saved <span>INR 1600</span> on this
              order
            </p>
          </div>
        </label> */}
      </div>
    </section>
  );
}

export default CartPreview;
