import React, { useState, useEffect } from "react";
import HomepageCourseCard from "./cards/HomepageCourseCard";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import OverflowSlider from "./sliders/OverflowSlider";
// ! JSON data for courses
import cardsData from "../store/staticData/HomepageCourseCards.json";
import blue from "../assets/blueCard.png";
import yellow from "../assets/yellowCard.png";
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
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setResponsiveMode(true);
    }
  }, [initialRender]);
  const pagination = {
    clickable: true,
  };
  // ! Filter application
  const [filterRange, setFilterRange] = useState([5, 15]);
  const shouldRenderCard = (min, max) => {
    for (let i = filterRange[0]; i <= filterRange[1]; i++) {
      if (i >= min && i <= max) return true;
    }
    return false;
  };
  // ! Set active class
  const setActiveClass = (activeFilter) => {
    if (filterRange.join("") === activeFilter.join("")) {
      return "homepage-courses__age-filter-item active";
    } else {
      return "homepage-courses__age-filter-item";
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
          <li
            className={setActiveClass([5, 15])}
            onClick={() => setFilterRange([5, 15])}
          >
            All ages
          </li>
          <li
            className={setActiveClass([5, 7])}
            onClick={() => setFilterRange([5, 7])}
          >
            5-7 Yrs
          </li>
          <li
            className={setActiveClass([8, 10])}
            onClick={() => setFilterRange([8, 10])}
          >
            8-10 Yrs
          </li>
          <li
            className={setActiveClass([11, 13])}
            onClick={() => setFilterRange([11, 13])}
          >
            11-13 Yrs
          </li>
          <li
            className={setActiveClass([14, 15])}
            onClick={() => setFilterRange([14, 15])}
          >
            14-15 Yrs
          </li>
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
            if (course.courseStatus === "ACTIVE")
              return (
                <SwiperSlide key={index}>
                  <HomepageCourseCard
                    key={index}
                    courseName={course.displayName}
                    courseContent={course.courseContent}
                    courseLiner={course.courseLiner}
                    courseTags={course.courseTags}
                    courseImage={yellow}
                    verticalThemeColorLight={course.verticalThemeColorLight}
                  />
                </SwiperSlide>
              );
          })}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          className="mySwiper"
          navigation={true}
        >
          {cardsData.map((course, index) => {
            if (course.courseStatus === "ACTIVE") {
              if (shouldRenderCard(course.minAge, course.maxAge))
                return (
                  <SwiperSlide key={index}>
                    <HomepageCourseCard
                      key={index}
                      courseName={course.displayName}
                      courseContent={course.courseContent}
                      courseLiner={course.courseLiner}
                      courseTags={course.courseTags}
                      courseImage={yellow}
                      verticalThemeColorLight={course.verticalThemeColorLight}
                    />
                  </SwiperSlide>
                );
            }
          })}
        </Swiper>
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
