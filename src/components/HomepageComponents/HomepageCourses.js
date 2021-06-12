import React, { useState, useEffect } from "react";
import HomepageCourseCard from "../cards/HomepageCourseCard";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import { Link } from "react-router-dom";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import { useSelector } from "react-redux";
import yellowCourse from "../../assets/yellowCourse.jpeg";
import blueCourse from "../../assets/blueCourse.jpeg";
import purpleCourse from "../../assets/purpleCourse.jpeg";
import PrimaryButton from "../buttons/PrimaryButton";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);

function HomepageCourses() {
  const cardsData = useSelector((state) => state.courses.allCourses);
  // ! Moengage event attribute objects
  const ageFilterAttributes = (kingdom, filter) => {
    return {
      event_id: "1001024",
      event_type: "Click",
      funnel_stage: "Consideration",
      event_category: "Browsing",
      feature_set: "Base",
      event_priority: "High",
      kingdom: kingdom,
      phylum: filter.join("-"),
      class: "",
      order: "Homepage",
      family: "1001024",
      genus: "2",
      species: "",
      sub_c_1: "",
      sub_c_2: "",
      app_version: "0.0.0",
      a_b_variant: "a",
    };
  };
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
  // ! Temporary image selector
  const imageSelector = (colorLight) => {
    switch (colorLight.toUpperCase()) {
      case "#FFEDC8":
        return yellowCourse;
      case "#EDFCFF":
        return blueCourse;
      case "#DCCCFF":
        return purpleCourse;

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
          <li
            className={setActiveClass([5, 15])}
            onClick={() => {
              let attr = ageFilterAttributes(1, [5 - 15]);
              MoengageEventTracking("Age_filter", attr);
              setFilterRange([5, 15]);
            }}
          >
            All ages
          </li>
          <li
            className={setActiveClass([5, 7])}
            onClick={() => {
              let attr = ageFilterAttributes(2, [5, 7]);
              MoengageEventTracking("Age_filter", attr);
              setFilterRange([5, 7]);
            }}
          >
            5-7 Yrs
          </li>
          <li
            className={setActiveClass([8, 10])}
            onClick={() => {
              let attr = ageFilterAttributes(3, [8, 10]);
              MoengageEventTracking("Age_filter", attr);
              setFilterRange([8, 10]);
            }}
          >
            8-10 Yrs
          </li>
          <li
            className={setActiveClass([11, 13])}
            onClick={() => {
              let attr = ageFilterAttributes(4, [11, 13]);
              MoengageEventTracking("Age_filter", attr);
              setFilterRange([11, 13]);
            }}
          >
            11-13 Yrs
          </li>
          <li
            className={setActiveClass([14, 15])}
            onClick={() => {
              let attr = ageFilterAttributes(5, [14, 15]);
              MoengageEventTracking("Age_filter", attr);
              setFilterRange([14, 15]);
            }}
          >
            14-15 Yrs
          </li>
          <Link
            className="homepage-courses__age-filter-item--see-all"
            to="/all-courses"
          >
            SEE ALL
          </Link>
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
            if (course.courseStatus === "ACTIVE" && course.courseLevel === 1)
              if (shouldRenderCard(course.minAge, course.maxAge))
                return (
                  <SwiperSlide key={index}>
                    <HomepageCourseCard
                      key={index}
                      courseName={course.displayName}
                      courseContent={course.courseContent}
                      courseLiner={course.courseLiner}
                      courseTags={course.courseTags}
                      courseImage={imageSelector(
                        course.verticalThemeColorLight
                      )}
                      verticalThemeColorDark={course.verticalThemeColorDark}
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
            if (course.courseStatus === "ACTIVE" && course.courseLevel === 1) {
              if (shouldRenderCard(course.minAge, course.maxAge))
                return (
                  <SwiperSlide key={index}>
                    <HomepageCourseCard
                      key={index}
                      courseName={course.displayName}
                      courseContent={course.courseContent}
                      courseLiner={course.courseLiner}
                      courseTags={course.courseTags}
                      courseImage={imageSelector(
                        course.verticalThemeColorLight
                      )}
                      verticalThemeColorDark={course.verticalThemeColorDark}
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
        linkTo="/book-a-trial"
      />
    </div>
  );
}

export default HomepageCourses;
