import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
function SingleCourseBanner({ courseName, courseContent }) {
  return (
    <div className="single-course-banner__wrapper">
      <div className="single-course-banner">
        <div className="single-course-banner__left">
          <h1 className="single-course-banner__left--header">{courseName}</h1>
          <p className="single-course-banner__left--content">{courseContent}</p>
          <div className="single-course-banner__left--tags"></div>
          <PrimaryButton buttonText="Buy Course" version="version-1" />
        </div>
        <div className="single-course-banner__right"></div>
      </div>
    </div>
  );
}

export default SingleCourseBanner;
