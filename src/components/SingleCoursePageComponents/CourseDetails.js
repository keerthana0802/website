import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCourseOnCoursePage } from "../../store/actions/rootActions";
// ! Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, A11y } from "swiper/core";
import PrimaryButton from "../buttons/PrimaryButton";
import yellow from "../../assets/yellowCourse.jpeg";
import {
  addQtyToCart,
  addToCart,
  cartTooltipClose,
  cartTooltipOpen,
} from "../../store/actions/checkoutActions";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import { addToCartAttributes } from "../../helpers/MoengageAttributeCreators";
SwiperCore.use([Pagination, A11y]);

// ! Course details slide
function CourseDetailsSlide({
  numberOfSessions,
  duration,
  price,
  imageUrl,
  courseName,
  verticalThemeColorDark,
}) {
  const cart = useSelector((state) => state.checkout.cart);
  const allCourses = useSelector((state) => state.courses.allCourses);
  const activeCourseOnCoursePage = useSelector(
    (state) => state.courses.activeCourseOnCoursePage
  );
  const dispatch = useDispatch();
  const addToCartHandle = (courseCardId, courseCardName) => {
    let found = cart.find((course) => course.courseId === courseCardId);
    let foundPrice = allCourses.find(
      (course) => course.courseId === courseCardId
    );
    if (found) {
      dispatch(addQtyToCart(found.courseId));
      dispatch(cartTooltipOpen(courseCardName));
    } else {
      dispatch(addToCart({ courseId: courseCardId, qty: 1 }));
      dispatch(cartTooltipOpen(courseCardName));
      MoengageEventTracking(
        "Add_to_Cart",
        addToCartAttributes(courseCardId, courseCardName, foundPrice.price)
      );
    }
  };
  
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
          Course Duration: <span>{numberOfSessions + " sessions"}</span>
        </h2>
        <h2>
          Session Duration: <span>{duration}</span>
        </h2>
        <h2>
          Course Fee:{" "}
          <span>
            INR {price} (INR {price / Number(numberOfSessions)}/session)
          </span>
        </h2>
        <h2>
          Venue: <span>Online</span>
        </h2>
        <h2>
          <span>Certification</span> at the end of the course
        </h2>
        <PrimaryButton
          buttonText="Buy Course"
          version="version-1"
          clickHandle={() =>
            addToCartHandle(activeCourseOnCoursePage, courseName)
          }
        />
      </div>
    </div>
  );
}
function CourseDetails({ courseName, courseType }) {
  const allCourses = useSelector((state) => state.courses.allCourses);
  const dispatch = useDispatch();
  const activeCourseOnCoursePage = useSelector(
    (state) => state.courses.activeCourseOnCoursePage
  );
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    let currentCourses = allCourses.filter(
      (course) => course.displayName.toLowerCase() === courseName
    );
    setCoursesData([...currentCourses]);
  }, []);
  // console.log("from here", coursesData);
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
    <div className="single-course-details__wrapper" id="single-course-details">
      <div className="single-course-details">
        {courseType === "multilevel" ? (
          <Swiper
            pagination={pagination}
            centeredSlides={true}
            className="course-details-filter-swiper"
            onSlideChange={(ev) => {
              dispatch(
                setActiveCourseOnCoursePage(
                  coursesData[ev.activeIndex].courseId
                )
              );
              // console.log(ev.activeIndex);
            }}
          >
            {coursesData.map((course, index) => {
              return (
                <SwiperSlide>
                  <CourseDetailsSlide
                    numberOfSessions={course.numberOfClasses}
                    duration={course.sessionDuration || "45 minutes"}
                    price={course.price}
                    imageUrl={`${
                      process.env.REACT_APP_ALL_COURSES_IMAGES_API
                    }${activeCourseOnCoursePage?.toLowerCase()}`}
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
                  duration={course.sessionDuration || "45 minutes"}
                  price={course.price}
                  imageUrl={`${
                    process.env.REACT_APP_ALL_COURSES_IMAGES_API
                  }${activeCourseOnCoursePage?.toLowerCase()}`}
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
