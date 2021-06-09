import React, { useState, useEffect } from "react";
import SingleCourseBanner from "../components/banners/SingleCourseBanner";
import NavFooterLayout from "../containers/NavFooterLayout";

function SingleCourse() {
  const [courseName, setCourseName] = useState(null);
  useEffect(() => {
    setCourseName(
      window.location.pathname.split("/").pop().split("-").join(" ")
    );
  }, []);
  return (
    <NavFooterLayout>
      <div className="single-course-page__wrapper">
        <SingleCourseBanner
          courseName={courseName}
          courseContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, molestiae!"
        />
      </div>
    </NavFooterLayout>
  );
}

export default SingleCourse;
