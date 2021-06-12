import React, { useState, useEffect } from "react";
import CourseCard from "./cards/CourseCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
let childAge;
function CoursesForm({ switchRoute, tabsStatus }) {
  const history = useHistory();
  const courseData = useSelector((state) => state.courses.allCourses);
  const ageMap = [
    [5, 9],
    [6, 10],
    [6, 11],
    [8, 15],
    [6, 9],
    [10, 15],
    [7, 15],
    [7, 15],
    [6, 15],
    [5, 7],
    [8, 15],
  ];

  const coursesList = [
    "Art of Storytelling",
    "Public Speaking",
    "Dramatic Storytelling",
    "Debate",
    "Stop Motion Animation",
    "Stop Motion Animation",
    "Photography",
    "Guitar",
    "Western Vocals",
    "Art",
    "Art",
  ];

  // ! State to manage selected courses
  const [selectedCourses, setSelectedCourses] = useState([]);
  // ! Course selection function
  const courseSelectionHandler = (id) => {
    if (selectedCourses.indexOf(coursesList[id]) == -1) {
      setSelectedCourses((selectedCourses) =>
        Array.from(new Set([...selectedCourses, coursesList[id]]))
      );
    } else {
      setSelectedCourses((selectedCourses) => {
        selectedCourses.splice(selectedCourses.indexOf(coursesList[id]), 1);
        return [...selectedCourses];
      });
    }
  };
  // ! useEffect to populate the states with data from local storage
  useEffect(() => {
    if (window.localStorage.coursesForm) {
      setSelectedCourses(
        JSON.parse(window.localStorage.coursesForm).selectedCourses
      );
      tabsStatus("/book-a-trial/courses-selection");
    }
    childAge = JSON.parse(window.localStorage.detailsForm).childAge;
    window.scrollTo(0, 0);
  }, []);
  // ! Setting the localstorage with selected courses
  const setLocalStorage = () => {
    window.localStorage.setItem(
      "coursesForm",
      JSON.stringify({ selectedCourses })
    );
    window.localStorage.setItem("slotLimit", selectedCourses.length * 2);
  };
  function updateApi() {
    let coursesArray = selectedCourses.map((course, index) => {
      switch (course) {
        case "Art":
          return childAge < 8 ? "Art Explorer" : "Art Beginner";
        case "Stop Motion Animation":
          return childAge < 10
            ? "Stop Motion Animation - Junior"
            : "Stop Motion Animation - Senior";
        default:
          return course;
      }
    });
    let coursesSelected = coursesArray.map((course, index) => {
      return {
        course_name: course,
        course_id:
          courseData.find((obj) => obj.courseName === course)?.courseId ||
          courseData.find((obj) => obj.displayName === course).courseId,
      };
    });
    axios
      .patch(`${process.env.REACT_APP_API_URL}${window.localStorage.uuid}`, {
        booking: {
          courses: coursesArray,
          courses_with_id: coursesSelected,
        },
      })
      .then(function (response) {
        window.localStorage.setItem(
          "courseBookingCount",
          response.data.stat.count
        );
      })
      .then(() => {
        tabsStatus("/book-a-trial/courses-selection");
        switchRoute("/book-a-trial/slot-selection");
      })
      .catch(function (error) {});
  }
  return (
    <>
      <div className="courses-form">
        {coursesList.map((course, index) => {
          let checkedStatus = false;
          if (window.localStorage.coursesForm) {
            let data = JSON.parse(
              window.localStorage.coursesForm
            ).selectedCourses;
            if (data.indexOf(course) !== -1) checkedStatus = true;
          }
          if (childAge >= ageMap[index][0] && childAge <= ageMap[index][1]) {
            return (
              <CourseCard
                courseName={course}
                key={index}
                courseId={index}
                selectionHandler={courseSelectionHandler}
                checkedStatusProp={checkedStatus}
              />
            );
          }
        })}
      </div>
      {selectedCourses.length > 0 ? (
        <Link
          onClick={() => {
            setLocalStorage();
            updateApi();
          }}
          className="select-slots"
          to="/book-a-trial/slot-selection"
        >
          Select slots
        </Link>
      ) : (
        <Link to="#" className="select-slots hidden"></Link>
      )}
    </>
  );
}

export default CoursesForm;
