import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// ! Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import PrimaryButton from "../buttons/PrimaryButton";
import yellow from "../../assets/yellowCourse.jpeg";
SwiperCore.use([Pagination]);

// ! Course details slide
function CourseDetailsSlide({
  numberOfSessions,
  duration,
  price,
  imageUrl,
  courseName,
  verticalThemeColorDark,
}) {
  return (
    <div
      className="course-details-slide"
      style={{
        background: `linear-gradient(111.29deg,${verticalThemeColorDark}88 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
      }}
    >
      <div className="course-details-slide__left">
        <img src={imageUrl} alt="" />
      </div>
      <div className="course-details-slide__right">
        <h1 className="name">{courseName}</h1>
        <h2>
          Course Duration: <span>{numberOfSessions}</span>
        </h2>
        <h2>
          Session Duration: <span>{duration}</span>
        </h2>
        <h2>
          Course Fee:{" "}
          <span>
            INR {price} (INR {price / numberOfSessions}/session)
          </span>
        </h2>
        <h2>
          Venue: <span>Online</span>
        </h2>
        <h2>
          <span>Certification</span> at the end of the course
        </h2>
        <PrimaryButton buttonText="Buy Course" version="version-1" />
      </div>
    </div>
  );
}
function CourseDetails({ courseName, courseType }) {
  const allCourses = useSelector((state) => state.courses.allCourses);
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    let currentCourses = allCourses.filter(
      (course) => course.displayName.toLowerCase() === courseName
    );
    setCoursesData([...currentCourses]);
  }, []);
  console.log("from here", coursesData);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=${className}>${
        coursesData.length > 0
          ? coursesData[index].courseName.split(" ").pop()
          : 0
      } (Age ${coursesData.length > 0 ? coursesData[index].minAge : 0} -${
        coursesData.length > 0 ? coursesData[index].maxAge : 0
      } yrs. old)</div>`;
    },
  };
  return (
    <div className="single-course-details__wrapper">
      <div className="single-course-details">
        {courseType === "multilevel" ? (
          <Swiper
            pagination={pagination}
            centeredSlides={true}
            className="course-details-filter-swiper"
          >
            {coursesData.map((course, index) => {
              return (
                <SwiperSlide>
                  <CourseDetailsSlide
                    numberOfSessions={course.numberOfClasses}
                    duration={course.sessionDuration}
                    price={course.price}
                    imageUrl={yellow}
                    courseName={course.courseName}
                    verticalThemeColorDark={course.verticalThemeColorDark}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <>
            {coursesData.map((course, index) => {
              return (
                <CourseDetailsSlide
                  numberOfSessions={course.numberOfClasses}
                  duration={course.sessionDuration}
                  price={course.price}
                  imageUrl={yellow}
                  courseName={course.courseName}
                  verticalThemeColorDark={course.verticalThemeColorDark}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
