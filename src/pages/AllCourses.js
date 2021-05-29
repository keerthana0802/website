import React from "react";
import CourseCategorySection from "../components/AllCoursesComponents/CourseCategorySection";
import NavFooterLayout from "../containers/NavFooterLayout";
import courseData from "../store/staticData/HomepageCourseCards.json";
function AllCourses() {
  return (
    <NavFooterLayout>
      <div className="spark-all-courses">
        <CourseCategorySection courseData={courseData} />
      </div>
    </NavFooterLayout>
  );
}

export default AllCourses;
