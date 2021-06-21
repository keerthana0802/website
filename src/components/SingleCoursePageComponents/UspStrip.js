import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
function UspStrip({
  sessions,
  background,
  activities,
  classRatio,
  courseDetails,
}) {
  const allCourses = useSelector((state) => state.courses.allCourses);
  const activeCourseOnCoursePage = useSelector(
    (state) => state.courses.activeCourseOnCoursePage
  );
  const [localCourseDetails, setLocalCourseDetails] = useState(courseDetails);
  useEffect(() => {
    setLocalCourseDetails(
      allCourses.find((course) => course.courseId === activeCourseOnCoursePage)
    );
  }, [activeCourseOnCoursePage]);
  console.log(activeCourseOnCoursePage);
  return (
    <div
      className="usp-strip"
      style={{
        backgroundColor: `${localCourseDetails.verticalThemeColorLight}77`,
      }}
    >
      <h2 className="usp-strip__item">
        <span style={{ color: "#000072" }}>
          {localCourseDetails.numberOfClasses}
        </span>{" "}
        Classes
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#FCB444" }}>
          {localCourseDetails.classRatio}
        </span>{" "}
        Live-class ratio
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#FF6E54" }}>
          {localCourseDetails.numberOfHomeActivities}
        </span>{" "}
        Activities
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#9048FF" }}>1</span> Certification
      </h2>
    </div>
  );
}

export default UspStrip;
