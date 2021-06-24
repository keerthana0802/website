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
function WorkshopBannerFilterResp({ courseData }) {
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
        Explore our Range of Workshops
        </h1>
       
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
     
    </div>
  );
}

export default WorkshopBannerFilterResp;