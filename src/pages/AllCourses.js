import React, { useState, useEffect } from "react";
import CourseCategorySection from "../components/AllCoursesComponents/CourseCategorySection";
import NavFooterLayout from "../containers/NavFooterLayout";
import HomepageCallback from "../components/HomepageComponents/HomepageCallback";
import AllCoursesBannerFilter from "../components/banners/AllCoursesBannerFilter";
import LargeBookATrialCard from "../components/cards/LargeBookATrialCard";
import AllCoursesBannerFilterResp from "../components/banners/AllCoursesBannerFilterResp";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
// ! GSAP imports
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { setScrollToCourseCategory } from "../store/actions/coursesActions";
// ! Registering plugin
gsap.registerPlugin(ScrollToPlugin);
function AllCourses() {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.courses.allCourses);
  const scrollToCourseCategory = useSelector(
    (state) => state.courses.scrollToCourseCategory
  );
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  // ! Scroll-to function
  const scroller = (sectionId, offset) => {
    gsap.to(window, {
      scrollTo: document.getElementById(sectionId).offsetTop + offset,
      ease: "ease-out",
      duration: 1.5,
      scrollBehavior: "smooth",
    });
  };
  useEffect(() => {
    if (window.innerWidth < 768) {
      setResponsiveMode(true);
      if (scrollToCourseCategory?.length > 0) {
        scroller(`${scrollToCourseCategory.toLowerCase()}-section`, 240);
        dispatch(setScrollToCourseCategory(""));
      }
    } else {
      if (scrollToCourseCategory?.length > 0) {
        scroller(`${scrollToCourseCategory.toLowerCase()}-section`, 440);
        dispatch(setScrollToCourseCategory(""));
      }
    }
  }, [initialRender]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setInitialRender(false);
  }, []);
  return (
    <NavFooterLayout>
      <Helmet>
        <title>All courses page</title>
      </Helmet>
      <div className="spark-all-courses">
        {responsiveMode ? (
          <AllCoursesBannerFilterResp courseData={courseData} />
        ) : (
          <AllCoursesBannerFilter courseData={courseData} />
        )}

        <CourseCategorySection courseData={courseData} />
        <LargeBookATrialCard />
        <HomepageCallback />
      </div>
    </NavFooterLayout>
  );
}

export default AllCourses;
