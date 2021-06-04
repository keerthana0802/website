import React from "react";
import coursesData from "../../store/staticData/HomepageCourseCards.json";
import PrimaryButton from "../buttons/PrimaryButton";
import CartCard from "../cards/CartCard";
function CartDrawer({ selectedCourses }) {
  return (
    <div className="cart-drawer__wrapper">
      <div className="cart-drawer">
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
                  />
                );
            })
          : null}
        {selectedCourses.length > 0 ? (
          <input
            placeholder="Promo code"
            type="text"
            className="cart-drawer__promo"
          />
        ) : null}
      </div>
      {selectedCourses.length > 0 ? (
        <div className="cart-drawer__bottom">
          <label htmlFor="terms" className="cart-drawer__terms">
            <input type="checkbox" name="terms" id="" /> I agree to the{" "}
            <a
              href="https://sparkstudio.co/tnc"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              terms and conditions
            </a>
          </label>
          <PrimaryButton
            buttonText="Buy Now"
            version="version-1"
            linkTo="/checkout"
          />
        </div>
      ) : null}
    </div>
  );
}

export default CartDrawer;
