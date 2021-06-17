import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  addQtyToCart,
  cartTooltipOpen,
} from "../../store/actions/rootActions";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import { addToCartAttributes } from "../../helpers/MoengageAttributeCreators";
function CourseCategoryCard({
  courseCardImage,
  courseCardColor,
  courseCardName,
  courseCardDetails,
  courseCardSessions,
  courseCardCategory,
  courseCardLiner,
  courseCardId,
  coursePrice,
}) {
  const history = useHistory();
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.checkout.cart);
  const openCourse = () => {
    history.push(
      `/explore-course/${courseCardName.toLowerCase().split(" ").join("-")}`
    );
  };
  return (
    <div className="course-category-card__wrapper">
      <div
        className="course-category-card"
        style={{
          background: `linear-gradient(111.29deg,${courseCardColor}66 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
        }}
      >
        <div className="course-category-card__top">
          <img src={courseCardImage} alt="" onClick={openCourse} />
        </div>
        <div className="course-category-card__bottom">
          <h3
            className="course-category-card__bottom--liner"
            onClick={openCourse}
          >
            {courseCardLiner}
          </h3>
          <h1
            className="course-category-card__bottom--name"
            onClick={openCourse}
          >
            {courseCardName}
            <span className="sessions">{courseCardSessions} Sessions</span>
          </h1>
          <h2
            className="course-category-card__bottom--category"
            onClick={openCourse}
          >
            {courseCardCategory}
          </h2>
          <p
            className="course-category-card__bottom--details"
            onClick={openCourse}
          >
            {courseCardDetails}
          </p>
          <SecondaryButton
            buttonText="Add to cart"
            version="version-2"
            clickHandle={(ev) => {
              let found = cart.find(
                (course) => course.courseId === courseCardId
              );
              if (found) {
                dispatch(addQtyToCart(found.courseId));
                dispatch(cartTooltipOpen(courseCardName));
              } else {
                dispatch(addToCart({ courseId: courseCardId, qty: 1 }));
                dispatch(cartTooltipOpen(courseCardName));
                MoengageEventTracking(
                  "Add_to_Cart",
                  addToCartAttributes(courseCardId, courseCardName, coursePrice)
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseCategoryCard;
