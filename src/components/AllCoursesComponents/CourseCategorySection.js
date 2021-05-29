import React, { useState, useEffect } from "react";
import CourseCatgorySlider from "../sliders/CourseCatgorySlider";
import yellowCourse from "../../assets/yellowCard.png";
import blueCourse from "../../assets/blueCourse.svg";
import purpleCourse from "../../assets/purpleCourse.svg";
function CourseCategorySection({ courseData }) {
  const [musicCourses, setMusicCourses] = useState([]);
  const [communicationCourses, setCommunicationCourses] = useState([]);
  const [artCourses, setArtCourses] = useState([]);
  useEffect(() => {
    let musicArray = [],
      artArray = [],
      communicationArray = [];
    courseData.forEach((course) => {
      switch (course.vertical) {
        case "Communication":
          communicationArray.push(course);
          break;
        case "Music":
          musicArray.push(course);
          break;
        case "Visual Arts":
          artArray.push(course);
          break;
        default:
          break;
      }
    });
    setMusicCourses([...musicArray]);
    setArtCourses([...artArray]);
    setCommunicationCourses([...communicationArray]);
  }, [courseData]);
  return (
    <div className="course-category-section__wrapper">
      <div className="course-category-section">
        <CourseCatgorySlider
          tempImage={yellowCourse}
          courseData={musicCourses}
          courseSliderHeader={
            <p>
              Music &<br />
              Themes
            </p>
          }
          courseSliderDuration="1 hour session"
          courseSliderContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam, obcaecati harum ut Quaerat nam, obcaecati harum ut architecto rem. architecto rem."
          courseSliderKeywords={[
            "Performance",
            "Music Composition",
            "Appreciation",
          ]}
          courseSliderExpertsVideoUrl=""
          courseCategoryColorDark={musicCourses[0]?.verticalThemeColorDark}
          courseCategoryColorLight={musicCourses[0]?.verticalThemeColorLight}
        />
      </div>
      <div className="course-category-section">
        <CourseCatgorySlider
          tempImage={blueCourse}
          courseData={communicationCourses}
          courseSliderHeader={
            <p>
              Speech &<br />
              Debate
            </p>
          }
          courseSliderDuration="1 hour session"
          courseSliderContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam, obcaecati harum ut Quaerat nam, obcaecati harum ut architecto rem. architecto rem."
          courseSliderKeywords={[
            "Performance",
            "Music Composition",
            "Appreciation",
          ]}
          courseSliderExpertsVideoUrl=""
          courseCategoryColorDark={
            communicationCourses[0]?.verticalThemeColorDark
          }
          courseCategoryColorLight={
            communicationCourses[0]?.verticalThemeColorLight
          }
        />
      </div>
      <div className="course-category-section">
        <CourseCatgorySlider
          tempImage={purpleCourse}
          courseData={artCourses}
          courseSliderHeader={
            <p>
              Photography &<br />
              Video
            </p>
          }
          courseSliderDuration="1 hour session"
          courseSliderContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam, obcaecati harum ut Quaerat nam, obcaecati harum ut architecto rem. architecto rem."
          courseSliderKeywords={[
            "Performance",
            "Music Composition",
            "Appreciation",
          ]}
          courseSliderExpertsVideoUrl=""
          courseCategoryColorDark={artCourses[0]?.verticalThemeColorDark}
          courseCategoryColorLight={artCourses[0]?.verticalThemeColorLight}
        />
      </div>
    </div>
  );
}

export default CourseCategorySection;
