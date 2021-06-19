import React, { useState, useEffect } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import durationIcon from "../../assets/durationIcon.svg";
import CourseCategoryCard from "../cards/CourseCategoryCard";
import yellow from "../../assets/yellowCard.png";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
function CourseCatgorySlider({
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
          <div></div>
        </div>
        <div className="course-category-slider__right">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            className="course-category-swiper"
            // pagination={{ clickable: true }}
            navigation={true}
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
                      courseCardId={course.courseId}
                      coursePrice={course.price}
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

export default CourseCatgorySlider;
