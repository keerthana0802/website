import React, { useState, useEffect } from "react";
import checked from "../../../assets/checked.svg";
import unchecked from "../../../assets/unchecked.svg";
function CourseCard({
  courseName,
  courseId,
  selectionHandler,
  checkedStatusProp,
}) {
  const [checkedStatus, setCheckedStatus] = useState(checkedStatusProp);
  const [classState, setClassState] = useState(
    checkedStatusProp ? "course-card checked" : "course-card"
  );
  const updateHandler = () => {
    setCheckedStatus(!checkedStatus);
    if (classState === "course-card") {
      setClassState("course-card checked");
      selectionHandler(courseId);
    } else {
      setClassState("course-card");
      selectionHandler(courseId);
    }
  };
  return (
    <div className={classState} onClick={updateHandler}>
      <h1 className="course-name">{courseName}</h1>

      {checkedStatus ? (
        <img src={checked} alt="" />
      ) : (
        <img src={unchecked} alt="" />
      )}
    </div>
  );
}

export default CourseCard;
