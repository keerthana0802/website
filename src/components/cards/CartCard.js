import React from "react";
import bin from "../../assets/binIcon.svg";
import plus from "../../assets/plusIcon.svg";
import { useDispatch } from "react-redux";
import {
  addQtyToCart,
  removeQtyFromCart,
} from "../../store/actions/rootActions";
function CartCard({
  courseName,
  courseCategory,
  courseAgeGroup,
  courseCurrency,
  coursePrice,
  courseQty,
  courseColor,
  courseId,
  version,
  courseDuration,
  sessionDuration,
}) {
  const dispatch = useDispatch();
  return (
    <div
      className={`cart-card__wrapper cart-card__wrapper${version}`}
      style={{
        background: `linear-gradient(114.28deg, ${courseColor}88 -12.61%, rgba(255, 255, 255, 0) 94.49%)`,
      }}
    >
      {version === "--small" ? (
        <div className="cart-card">
          <h1 className="cart-card__name">{courseName}</h1>
          <h2 className="cart-card__category">
            Duration: {courseDuration} classes
          </h2>
          <p className="cart-card__age-group">
            AGE GROUP: {courseAgeGroup} Yrs
          </p>
          <div className="cart-card__qty-price">
            <div className="quantity">
              <img
                src={bin}
                alt=""
                onClick={() => dispatch(removeQtyFromCart(courseId))}
              />
              <span>{courseQty}</span>
              <img
                src={plus}
                alt=""
                onClick={() => dispatch(addQtyToCart(courseId))}
              />
            </div>
            <span className="price">
              {courseCurrency} {coursePrice * courseQty}
            </span>
          </div>
        </div>
      ) : null}
      {version === "--large" ? (
        <div className="cart-card cart-card--large">
          <div className="cart-card--large-left">
            <h1 className="cart-card__name">{courseName}</h1>
            <h2 className="cart-card__category">Category: {courseCategory}</h2>
            <p className="cart-card__age-group">
              AGE GROUP: {courseAgeGroup} Yrs
            </p>
            <p className="cart-card__course-duration">
              Course Duration: {courseDuration} Weeks (One session/week)
            </p>
            <p className="cart-card__session-duration">
              Session Duration: {sessionDuration} minutes
            </p>
          </div>
          <div className="cart-card__qty-price">
            <div className="quantity">
              <img
                src={bin}
                alt=""
                onClick={() => dispatch(removeQtyFromCart(courseId))}
              />
              <span>{courseQty}</span>
              <img
                src={plus}
                alt=""
                onClick={() => dispatch(addQtyToCart(courseId))}
              />
            </div>
            <span className="price">
              {courseCurrency} {coursePrice * courseQty}
            </span>
          </div>
        </div>
      ) : null}
      {version === "--no-price-qty" ? (
        <div className="cart-card cart-card--large cart-card--no-price-qty">
          <div className="cart-card--large-left">
            <h1 className="cart-card__name">{courseName}</h1>
            <h2 className="cart-card__category">Category: {courseCategory}</h2>
            <p className="cart-card__course-duration">
              Course Duration: {courseDuration} Weeks (One session/week)
            </p>
            <p className="cart-card__session-duration">
              Session Duration: {sessionDuration} minutes
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartCard;
