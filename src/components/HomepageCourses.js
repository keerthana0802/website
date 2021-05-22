import React from "react";
import HomepageCourseCard from "./cards/HomepageCourseCard";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import OverflowSlider from "./sliders/OverflowSlider";
import cardsData from "../store/staticData/HomepageCourseCards.json";
import blue from "../assets/blueCard.png";
import yellow from "../assets/yellowCard.png";
function HomepageCourses() {
  const imageSelector = (color) => {
    switch (color) {
      case "yellow":
        return yellow;
        break;
      case "blue":
        return yellow;
        break;
      case "purple":
        return yellow;
        break;

      default:
        break;
    }
  };
  return (
    <div className="homepage-courses">
      <HomepageSectionHeader
        headerContent="Our Courses"
        linerContent="Redefining extra curriculars for your child"
      />
      <div className="homepage-courses__top">
        <h1 className="homepage-courses__liner">Find our top course by age</h1>
        <ul className="homepage-courses__age-filter">
          <li className="homepage-courses__age-filter-item">5-7 yrs</li>
          <li className="homepage-courses__age-filter-item">8-10 yrs</li>
          <li className="homepage-courses__age-filter-item">11-13 yrs</li>
          <li className="homepage-courses__age-filter-item">14-15 yrs</li>
          <li className="homepage-courses__age-filter-item--see-all">
            SEE ALL
          </li>
        </ul>
      </div>
      <OverflowSlider cardWidth={490}>
        {cardsData.map((course, index) => {
          return (
            <HomepageCourseCard
              key={index}
              courseName={course.courseName}
              courseContent={course.courseContent}
              courseLiner={course.courseLiner}
              courseTags={course.courseTags}
              courseImage={imageSelector(course.courseImage)}
            />
          );
        })}
        {/* <div className="dummy-slide">1</div>
        <div className="dummy-slide">2</div>
        <div className="dummy-slide">3</div>
        <div className="dummy-slide">4</div>
        <div className="dummy-slide">5</div>
        <div className="dummy-slide">6</div>
        <div className="dummy-slide">7</div> */}
      </OverflowSlider>
    </div>
  );
}

export default HomepageCourses;
