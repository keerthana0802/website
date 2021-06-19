import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import CartCard from "../cards/CartCard";
import cross from "../../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerOpen, setPromoCode } from "../../store/actions/rootActions";
import { useHistory } from "react-router-dom";
import moengageEvent from "../../helpers/MoengageEventTracking";
import { checkoutAttributes } from "../../helpers/MoengageAttributeCreators";
function CartDrawer({ selectedCourses }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const coursesData = useSelector((state) => state.courses.allCourses);
  const goToCheckout = () => {
    let totalQty = selectedCourses.reduce((acc, course) => acc + course.qty, 0);

    let cartTotal = selectedCourses.reduce((acc, course) => {
      let found = coursesData.find((item) => item.courseId === course.courseId);
      return acc + course.qty * found.price;
    }, 0);
    moengageEvent(
      "Checkout",
      checkoutAttributes(
        totalQty,
        "null",
        window.location.pathname,
        cartTotal,
        8,
        "",
        0
      )
    );
    dispatch(cartDrawerOpen());
    setTimeout(() => {
      history.push("/checkout");
    }, 200);
  };
  // console.log("here selec", selectedCourses);
  return (
    <div className="cart-drawer__wrapper">
      <div className="cart-drawer">
        <img
          src={cross}
          alt=""
          className="cart-drawer__close-button"
          onClick={() => dispatch(cartDrawerOpen())}
        />
        <h1 className="cart-drawer__header">
          {selectedCourses.length > 0 ? "Courses in cart" : "Cart is empty!"}
        </h1>
        {selectedCourses.length > 0
          ? selectedCourses.map((course, index) => {
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
                    version="--small"
                    courseDuration={found.numberOfClasses}
                  />
                );
            })
          : null}
      </div>
      {selectedCourses.length > 0 ? (
        <div className="cart-drawer__bottom">
          <PrimaryButton
            buttonText="Buy Now"
            version="version-1"
            clickHandle={goToCheckout}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CartDrawer;
