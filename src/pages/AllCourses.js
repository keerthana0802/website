import React from "react";
import CourseCategorySection from "../components/AllCoursesComponents/CourseCategorySection";
import NavFooterLayout from "../containers/NavFooterLayout";
import courseData from "../store/staticData/HomepageCourseCards.json";
import HomepageCallback from "../components/HomepageComponents/HomepageCallback";
import AllCoursesBannerFilter from "../components/banners/AllCoursesBannerFilter";
import LargeBookATrialCard from "../components/cards/LargeBookATrialCard";
function AllCourses() {
  return (
    <NavFooterLayout>
      <div className="spark-all-courses">
        <AllCoursesBannerFilter courseData={courseData} />
        <CourseCategorySection courseData={courseData} />
        <LargeBookATrialCard />
        <HomepageCallback />
      </div>
    </NavFooterLayout>
  );
}

export default AllCourses;
