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
import { setActiveCourseOnCoursePage } from "../store/actions/coursesActions";
// ! GSAP imports
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
function SingleCourse() {
  const [courseName, setCourseName] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const allCourses = useSelector((state) => state.courses.allCourses);
  const dispatch = useDispatch();
  useEffect(() => {
    setCourseName(
      window.location.pathname.split("/").pop().split("-").join(" ")
    );
    // window.scrollTo(0, -350);
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
      dispatch(setActiveCourseOnCoursePage(currentCourse?.courseId));
    }
    // window.scrollTo(0, -350);
  }, [courseName]);
  useEffect(() => {
    if (courseDetails) {
      gsap.to(window, {
        scrollTo: document.getElementById("single-course-page-top").offsetTop,
        ease: "ease-out",
        duration: 0,
        scrollBehavior: "smooth",
      });
    }
  }, [courseDetails]);
  return (
    <NavFooterLayout>
      {courseDetails ? (
        <div
          className="single-course-page__wrapper"
          id="single-course-page-top"
        >
          <SingleCourseBanner
            courseName={courseName}
            courseContent={courseDetails ? courseDetails.pitch : ""}
            showcase={courseDetails?.showcaseData}
            courseType={
              courseDetails?.courseLevelCount === 1 ? "single" : "multilevel"
            }
            courseThemeColorDark={courseDetails?.verticalThemeColorDark}
          />

          <CourseDetails
            courseName={courseName}
            courseType={
              courseDetails?.courseLevelCount === 1 ? "single" : "multilevel"
            }
          />

          <CurriculumSection
            courseDetails={courseDetails}
            dark={courseDetails.verticalThemeColorDark}
            courseName={courseName}
            courseType={
              courseDetails?.courseLevelCount === 1 ? "single" : "multilevel"
            }
          />

          <UspStrip
            courseDetails={courseDetails}
          />
          <ParentsSection
            courseDetails={courseDetails}
            light={courseDetails.verticalThemeColorLight}
            dark={courseDetails.verticalThemeColorDark}
          />
          <ShowcaseSection
            courseDetails={courseDetails}
            verticalThemeColorDark={courseDetails.verticalThemeColorDark}
          />
          <ExpertSection courseDetails={courseDetails} />
        </div>
      ) : null}
    </NavFooterLayout>
  );
}

export default SingleCourse;
