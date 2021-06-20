import React, { useState, useEffect } from "react";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import {
  ageFilterAttributes,
  searchExecuteAttributes,
} from "../../helpers/MoengageAttributeCreators";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SecondaryButton from "../buttons/SecondaryButton";
import HomepageCourseCard from "../cards/HomepageCourseCard";
import moengageEvent from "../../helpers/MoengageEventTracking";
SwiperCore.use([Pagination, Navigation]);
function AllCoursesBannerFilterResp({ courseData }) {
  // ! Filter application
  const [allCourses, setAllCourses] = useState(courseData);
  const [filterRange, setFilterRange] = useState([5, 15]);
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const shouldRenderCard = (min, max, category) => {
    for (let i = filterRange[0]; i <= filterRange[1]; i++) {
      if (currentCategory === "All Categories") {
        if (i >= min && i <= max) return true;
      } else {
        if (i >= min && i <= max && category === currentCategory) return true;
      }
    }
    return false;
  };
  const pagination = {
    clickable: true,
  };

  // ! Set active class
  const setActiveClass = (activeFilter) => {
    if (filterRange.join("") === activeFilter.join("")) {
      return "all-courses-banner-filter__age-filter-item active";
    } else {
      return "all-courses-banner-filter__age-filter-item";
    }
  };
  // ! Search  functionality
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandle = () => {
    let filteredCourses = courseData.filter((course) => {
      return course.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    moengageEvent(
      "Search_Execute",
      searchExecuteAttributes(
        searchTerm,
        filteredCourses.length,
        filteredCourses.length > 0 ? "success" : "failure",
        1,
        "course"
      )
    );
    setAllCourses([...filteredCourses]);
  };
  return (
    <div className="all-courses-banner-filter__wrapper">
      <div className="all-courses-banner-filter">
        <h1 className="all-courses-banner-filter__header">
          Explore our range of courses
        </h1>
        <div className="all-courses-banner-filter__search">
          <label htmlFor="searchbar">
            <input
              type="text"
              name="searchbar"
              value={searchTerm}
              onChange={(ev) => setSearchTerm(ev.target.value)}
              placeholder="Course Name"
            />
          </label>

          <select
            name="category"
            id=""
            onChange={(ev) =>
              setCurrentCategory((currentCategory) => ev.target.value)
            }
          >
            <option value="All Categories" selected>
              All Categories
            </option>
            <option value="Music">Music</option>
            <option value="Communication">Communication</option>
            <option value="Visual Arts">Visual Arts</option>
          </select>
          <SecondaryButton
            buttonText="Search"
            version="version-3"
            clickHandle={searchHandle}
          />
        </div>
        <ul className="all-courses-banner-filter__age-filter">
          <li
            className={setActiveClass([5, 15])}
            onClick={() => {
              let attr = ageFilterAttributes(1, [5 - 15]);
              MoengageEventTracking("Age_filter", attr);
              setFilterRange([5, 15]);
            }}
          >
            All Ages
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
        </ul>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={pagination}
        className="mySwiperresp"
      >
        {allCourses.map((course, index) => {
          if (course.courseStatus === "ACTIVE" && course.showOutside)
            if (
              shouldRenderCard(
                course.showOutsideMinAge,
                course.showOutsideMaxAge,
                course.vertical
              )
            )
              return (
                <SwiperSlide key={index}>
                  <HomepageCourseCard
                    key={index}
                    courseName={course.displayName}
                    courseContent={course.courseContent}
                    courseLiner={course.courseLiner}
                    courseTags={course.courseTags}
                    courseImage={`${
                      process.env.REACT_APP_ALL_COURSES_IMAGES_API
                    }${course.courseId.toLowerCase()}`}
                    verticalThemeColorDark={course.verticalThemeColorDark}
                  />
                </SwiperSlide>
              );
        })}
      </Swiper>
    </div>
  );
}

export default AllCoursesBannerFilterResp;
