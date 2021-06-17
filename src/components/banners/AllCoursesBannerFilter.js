import React, { useState, useEffect } from "react";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import {
  ageFilterAttributes,
  categoryFilterAttributes,
} from "../../helpers/MoengageAttributeCreators";
import SecondaryButton from "../buttons/SecondaryButton";
import yellowCourse from "../../assets/yellowCourse.jpeg";
import blueCourse from "../../assets/blueCourse.jpeg";
import purpleCourse from "../../assets/purpleCourse.jpeg";
import HomepageCourseCard from "../cards/HomepageCourseCard";
import PrimaryButton from "../buttons/PrimaryButton";
import moengageEvent from "../../helpers/MoengageEventTracking";
let firstRow = true;
function AllCoursesBannerFilter({ courseData }) {
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, []);
  // ! Filter application
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
  // ! funtion to add courses to rowToRender
  const rowToRenderHandler = (initArray, clear = false) => {
    let initialRowArray = [];
    if (clear) {
      initialRowArray = [];
    } else {
      initialRowArray = [...rowToRender];
    }
    if (window.innerWidth >= 1600) {
      if (initArray.length >= 4) {
        setRowToRender([...initialRowArray, ...initArray.splice(0, 4)]);
        setRemaining(initArray);
      } else {
        setRowToRender([...initialRowArray, ...initArray]);
        setRemaining([]);
      }
    } else if (window.innerWidth >= 1200 && window.innerWidth < 1600) {
      if (initArray.length >= 3) {
        setRowToRender([...initialRowArray, ...initArray.splice(0, 3)]);
        setRemaining(initArray);
      } else {
        setRowToRender([...initialRowArray, ...initArray]);
        setRemaining([]);
      }
    } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
      // console.log([...rowToRender, ...initArray.splice(0, 2)]);
      if (initArray.length >= 2) {
        setRowToRender([...initialRowArray, ...initArray.splice(0, 2)]);
        setRemaining(initArray);
      } else {
        setRowToRender([...initialRowArray, ...initArray]);
        setRemaining([]);
      }
    }
  };
  // ! State to manage see all concept
  const [toRender, setToRender] = useState(courseData);
  const [rowToRender, setRowToRender] = useState([]);
  const [remaining, setRemaining] = useState([]);
  useEffect(() => {
    setRowToRender((rowToRender) => []);
    let initArray = courseData.filter((course, index) => {
      if (course.courseStatus === "ACTIVE") {
        if (shouldRenderCard(course.minAge, course.maxAge, course.vertical)) {
          return course;
        }
      } else {
        return false;
      }
    });
    setToRender([...initArray]);
    rowToRenderHandler(initArray, true);
  }, [courseData, filterRange, currentCategory]);
  // console.log(rowToRender);
  // ! Set active class
  const setActiveClass = (activeFilter) => {
    if (filterRange.join("") === activeFilter.join("")) {
      return "all-courses-banner-filter__age-filter-item active";
    } else {
      return "all-courses-banner-filter__age-filter-item";
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
  // ! Search  functionality
  const [searchTerm, setSearchTerm] = useState("");
  const searchHandle = () => {
    let filteredCourses = courseData.filter((course) => {
      return course.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setToRender([...filteredCourses]);
    rowToRenderHandler(filteredCourses, true);
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
            onChange={(ev) => {
              setCurrentCategory((currentCategory) => ev.target.value);
              let id;
              switch (ev.target.value.toLowerCase()) {
                case "communication":
                  id = 1;
                  break;
                case "music":
                  id = 2;
                  break;
                case "art":
                  id = 3;
                  break;
                default:
                  break;
              }

              MoengageEventTracking(
                "Category_Filter",
                categoryFilterAttributes(id, ev.target.value)
              );
            }}
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
        </ul>
      </div>
      <section className="all-courses-banner-filter__courses-grid">
        {rowToRender.map((course, index) => {
          return (
            <HomepageCourseCard
              key={index}
              courseName={course.displayName}
              courseContent={course.courseContent}
              courseLiner={course.courseLiner}
              courseTags={course.courseTags}
              courseImage={imageSelector(course.verticalThemeColorLight)}
              verticalThemeColorDark={course.verticalThemeColorDark}
            />
          );
        })}
      </section>
      {remaining.length > 0 ? (
        <SecondaryButton
          buttonText="Load More"
          clickHandle={() => rowToRenderHandler(remaining)}
          version="version-4"
        />
      ) : null}
    </div>
  );
}

export default AllCoursesBannerFilter;
