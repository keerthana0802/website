import React from "react";
import yellowCard from "../../assets/yellowCourseCard.svg";
function HomepageCourseCard({
  courseImage,
  courseName,
  courseLiner,
  courseContent,
  courseTags,
}) {
  return (
    <div
      className="homepage-course-card"
      // style={{ background: `url(${yellowCard}) 25% 20%` }}
    >
      <div className="homepage-course-card__top">
        <img src={courseImage} alt="" />
        <h1 className="homepage-course-card__top--liner">{courseLiner}</h1>
      </div>
      <div className="homepage-course-card__bottom">
        <h1 className="homepage-course-card__bottom--title">{courseName}</h1>
        <p className="homepage-course-card__bottom--content">{courseContent}</p>
        <div className="homepage-course-card__bottom--tags">
          {courseTags.map((tag, index) => {
            return (
              <div className="course-tag" key={index}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomepageCourseCard;
