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
        <SingleCourseBanner courseName={courseName} />
      </div>
    </NavFooterLayout>
  );
}

export default SingleCourse;
