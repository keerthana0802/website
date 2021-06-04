import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import coursesData from "../../store/staticData/HomepageCourseCards.json";
import CartCard from "../cards/CartCard";
function CartPreview() {
  const cart = useSelector((state) => state.cart);
  //   useEffect(() => {}, [cart]);
  return (
    <section className="cart-preview__wrapper">
      <div className="cart-preview">
        <div className="cart-preview--top">
          <h1 className="cart-preview__customer-name">Hey Aryan,</h1>
          <h2 className="cart-preview__liner">
            We are excited to have you as part of spark studio family!
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
                    courseCurrency={found.courseCurrency}
                    coursePrice={found.price}
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
              INR{" "}
              {cart.reduce((a, course) => {
                let found = coursesData.find(
                  (item) => item.courseId === course.courseId
                );
                return a + found.price * course.qty;
              }, 0)}
            </span>
          </div>
        </div>

        <p className="cart-preview__liner-2">
          Our team will get in touch with you and sort out everything for you
        </p>
      </div>
    </section>
  );
}

export default CartPreview;
