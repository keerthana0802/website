import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import durationIcon from "../../assets/durationIcon.svg";
import CourseCategoryCard from "../cards/CourseCategoryCard";
// ! Swiper
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);
function CourseCatgorySliderResp({
  courseData,
  courseSliderHeader,
  courseSliderDuration,
  courseSliderContent,
  courseSliderKeywords,
  courseSliderExpertsVideoUrl,
  courseCategoryColorLight,
  courseCategoryColorDark,
  tempImage,
  courseVertical,
}) {
  const currency = useSelector((state) => state.courses.currency);
  return (
    <div
      className="course-category-slider__wrapper"
      style={{ background: courseCategoryColorLight }}
    >
      <div className="course-category-slider">
        <div className="course-category-slider__left">
          <h1 className="course-category-slider__left--header">
            {courseSliderHeader}
          </h1>
          <h3 className="course-category-slider__left--duration">
            <img src={durationIcon} alt="" />
            {courseSliderDuration}
          </h3>
          <p className="course-category-slider__left--content">
            {courseSliderContent}
          </p>
          <div className="course-category-slider__left--keywords">
            {courseSliderKeywords.map((keyword, index) => {
              return (
                <div>
                  <h3 className="keyword" key={index}>
                    {keyword}
                  </h3>
                  <br />
                </div>
              );
            })}
          </div>
          {/* <SecondaryButton buttonText="Experts Say" version="version-1" /> */}
        </div>
        <div className="course-category-slider__right">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            className={`course-category-swiper course-category-swiper--${courseVertical}`}
            pagination={{ clickable: true }}
            centeredSlides={true}
          >
            {courseData.map((course, index) => {
              if (course.courseStatus === "ACTIVE" && course.showOutside)
                return (
                  <SwiperSlide key={index}>
                    <CourseCategoryCard
                      courseCardName={course.displayName}
                      courseCardCategory={course.vertical}
                      courseCardColor={course.verticalThemeColorDark}
                      courseCardDetails={course.courseContent}
                      courseCardSessions={course.numberOfClasses}
                      courseCardLiner={course.courseLiner}
                      courseCardImage={`${
                        process.env.REACT_APP_ALL_COURSES_IMAGES_API
                      }${course.courseId.toLowerCase()}`}
                      coursePrice={
                        currency === "INR" ? course.priceInr : course.priceUsd
                      }
                      courseCardId={course.courseId}
                    />
                  </SwiperSlide>
                );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CourseCatgorySliderResp;
