import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

function CourseCategoryCard({
  courseCardImage,
  courseCardColor,
  courseCardName,
  courseCardDetails,
  courseCardSessions,
  courseCardCategory,
  courseCardLiner,
}) {
  return (
    <div className="course-category-card__wrapper">
      <div
        className="course-category-card"
        style={{
          background: `linear-gradient(111.29deg,${courseCardColor}66 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
        }}
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
          <SecondaryButton buttonText="Add to cart" version="version-2" />
        </div>
      </div>
    </div>
  );
}

export default CourseCategoryCard;
