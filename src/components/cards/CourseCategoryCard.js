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
  const addToCartAttributes = {
    event_id: "1001018",
    event_type: "Click",
    funnel_stage: "Conversion",
    event_category: "Cart",
    feature_set: "Base",
    event_priority: "High",
    kingdom: courseCardId,
    phylum: courseCardName,
    class: "Button state - clicked",
    order: coursePrice,
    family: "1001018",
    genus: "3",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.0.0",
    a_b_variant: "a",
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.checkout.cart);
  return (
    <div className="course-category-card__wrapper">
      <div
        className="course-category-card"
        style={{
          background: `linear-gradient(111.29deg,${courseCardColor}66 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
        }}
        onClick={() =>
          history.push(
            `/explore-course/${courseCardName
              .toLowerCase()
              .split(" ")
              .join("-")}`
          )
        }
      >
        <div className="course-category-card__top">
          <img src={courseCardImage} alt="" />
        </div>
        <div className="course-category-card__bottom">
          <h3 className="course-category-card__bottom--liner">
            {courseCardLiner}
          </h3>
          <h1 className="course-category-card__bottom--name">
            {courseCardName}
            <span className="sessions">{courseCardSessions} Sessions</span>
          </h1>
          <h2 className="course-category-card__bottom--category">
            {courseCardCategory}
          </h2>
          <p className="course-category-card__bottom--details">
            {courseCardDetails}
          </p>
          <SecondaryButton
            buttonText="Add to cart"
            version="version-2"
            clickHandle={() => {
              let found = cart.find(
                (course) => course.courseId === courseCardId
              );
              if (found) {
                dispatch(addQtyToCart(found.courseId));
                dispatch(cartTooltipOpen(courseCardName));
              } else {
                dispatch(addToCart({ courseId: courseCardId, qty: 1 }));
                dispatch(cartTooltipOpen(courseCardName));
                MoengageEventTracking("Add_to_Cart", addToCartAttributes);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseCategoryCard;
