import React, { useState, useEffect } from "react";
import HomepageCourseCard from "./cards/HomepageCourseCard";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import OverflowSlider from "./sliders/OverflowSlider";
import cardsData from "../store/staticData/HomepageCourseCards.json";
import blue from "../assets/blueCard.png";
import yellow from "../assets/yellowCard.png";
// ! JSON with aage filter data
import ageFilterData from "../store/staticData/AgeFilterForCourses.json";
import PrimaryButton from "./buttons/PrimaryButton";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
function HomepageCourses() {
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  // const [slidersPerView, setSlidersPerView] = useState("auto");
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setResponsiveMode(true);
    }
    // if (window.innerWidth > 545 && window.innerWidth < 769) {
    //   setSlidersPerView("auto");
    // }
    // if (window.innerWidth < 545) {
    //   setSlidersPerView("auto");
    // }
  }, [initialRender]);
  const pagination = {
    clickable: true,
  };
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
        linerContent="Nurture. Inspire. Unleash."
      />
      <div className="homepage-courses__top">
        <h1 className="homepage-courses__liner">
          Explore courses by age group
        </h1>
        <ul className="homepage-courses__age-filter">
          <li className="homepage-courses__age-filter-item active">All ages</li>
          <li className="homepage-courses__age-filter-item">5-7 Yrs</li>
          <li className="homepage-courses__age-filter-item">8-10 Yrs</li>
          <li className="homepage-courses__age-filter-item">11-13 Yrs</li>
          <li className="homepage-courses__age-filter-item">14-15 Yrs</li>
          <li className="homepage-courses__age-filter-item--see-all">
            SEE ALL
          </li>
        </ul>
      </div>
      {responsiveMode ? (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          pagination={pagination}
          className="mySwiper"
        >
          {cardsData.map((course, index) => {
            return (
              <SwiperSlide>
                <HomepageCourseCard
                  key={index}
                  courseName={course.courseName}
                  courseContent={course.courseContent}
                  courseLiner={course.courseLiner}
                  courseTags={course.courseTags}
                  courseImage={imageSelector(course.courseImage)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <OverflowSlider cardWidth={356} paddingLeft={50}>
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
        </OverflowSlider>
      )}

      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="https://book-staging.sparkstudio.co/"
      />
    </div>
  );
}

export default HomepageCourses;
