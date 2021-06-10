import React, { useState, useEffect } from "react";
import SingleCourseBanner from "../components/banners/SingleCourseBanner";
import NavFooterLayout from "../containers/NavFooterLayout";
import { useSelector, useDispatch } from "react-redux";
import CourseDetails from "../components/SingleCoursePageComponents/CourseDetails";
import UspStrip from "../components/SingleCoursePageComponents/UspStrip";
import ParentsSection from "../components/SingleCoursePageComponents/ParentsSection";
import ShowcaseSection from "../components/SingleCoursePageComponents/ShowcaseSection";
import ExpertSection from "../components/SingleCoursePageComponents/ExpertSection";
import CurriculumSection from "../components/SingleCoursePageComponents/CurriculumSection";
function SingleCourse() {
  const [courseName, setCourseName] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const allCourses = useSelector((state) => state.courses.allCourses);
  useEffect(() => {
    setCourseName(
      window.location.pathname.split("/").pop().split("-").join(" ")
    );
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (courseName) {
      let currentCourse = allCourses.find((item) => {
        if (item.displayName.toLowerCase() === courseName) {
          return true;
        } else {
          return false;
        }
      });
      setCourseDetails(currentCourse);
    }
  }, [courseName]);
  return (
    <NavFooterLayout>
      <div className="single-course-page__wrapper">
        <SingleCourseBanner
          courseName={courseName}
          courseContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, molestiae!"
          courseType={
            courseDetails?.courseLevelCount === 1 ? "single" : "multilevel"
          }
          courseThemeColorDark={courseDetails?.verticalThemeColorDark}
        />
        {courseName ? (
          <CourseDetails
            courseName={courseName}
            courseType={
              courseDetails?.courseLevelCount === 1 ? "single" : "multilevel"
            }
          />
        ) : null}
        {courseDetails ? (
          <CurriculumSection dark={courseDetails.verticalThemeColorDark} />
        ) : null}
        {courseDetails ? (
          <UspStrip
            sessions={courseDetails.numberOfClasses}
            background={courseDetails.verticalThemeColorLight}
          />
        ) : null}
        {courseDetails ? (
          <ParentsSection
            light={courseDetails.verticalThemeColorLight}
            dark={courseDetails.verticalThemeColorDark}
          />
        ) : null}
        {courseDetails ? (
          <ShowcaseSection
            verticalThemeColorDark={courseDetails.verticalThemeColorDark}
          />
        ) : null}
        <ExpertSection />
      </div>
    </NavFooterLayout>
  );
}

export default SingleCourse;
