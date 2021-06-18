import React, { useState, useEffect } from "react";
import CourseCategorySection from "../components/AllCoursesComponents/CourseCategorySection";
import NavFooterLayout from "../containers/NavFooterLayout";
import HomepageCallback from "../components/HomepageComponents/HomepageCallback";
import AllCoursesBannerFilter from "../components/banners/AllCoursesBannerFilter";
import LargeBookATrialCard from "../components/cards/LargeBookATrialCard";
import AllCoursesBannerFilterResp from "../components/banners/AllCoursesBannerFilterResp";
import Tncpage from "../components/Tnc/Tncpage";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
function Tnc() {
  const courseData = useSelector((state) => state.courses.allCourses);
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setResponsiveMode(true);
    }
  }, [initialRender]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setInitialRender(false);
  }, []);
  return (
    <NavFooterLayout>
      <Helmet>
        <title>Terms And Condition</title>
      </Helmet>
      <div className="spark-all-courses">
         
      <Tncpage />
      
        <HomepageCallback />
      </div>
    </NavFooterLayout>
  );
}

export default Tnc;
