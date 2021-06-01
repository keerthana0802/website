import React, { useState, useEffect } from "react";
import CourseCatgorySlider from "../sliders/CourseCatgorySlider";
import CourseCatgorySliderResp from "../sliders/CourseCategorySliderResp";
import yellowCourse from "../../assets/yellowCourse.jpeg";
import blueCourse from "../../assets/blueCourse.jpeg";
import purpleCourse from "../../assets/purpleCourse.jpeg";
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
    <div className="course-category-section__wrapper">
      {responsiveMode ? (
        <>
          <div className="course-category-section">
            <CourseCatgorySliderResp
              tempImage={yellowCourse}
              courseData={musicCourses}
              courseSliderHeader={
                <p>
                  Music &<br />
                  Themes
                </p>
              }
              courseVertical="music"
              courseSliderDuration="1 hour session"
              courseSliderContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam, obcaecati harum ut Quaerat nam, obcaecati harum ut architecto rem. architecto rem."
              courseSliderKeywords={[
                "Performance",
                "Music Composition",
                "Appreciation",
              ]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={musicCourses[0]?.verticalThemeColorDark}
              courseCategoryColorLight={
                musicCourses[0]?.verticalThemeColorLight
              }
            />
          </div>
          <div className="course-category-section">
            <CourseCatgorySliderResp
              tempImage={blueCourse}
              courseData={communicationCourses}
              courseSliderHeader={
                <p>
                  Speech &<br />
                  Debate
                </p>
              }
              courseVertical="communication"
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
            <CourseCatgorySliderResp
              tempImage={purpleCourse}
              courseData={artCourses}
              courseSliderHeader={
                <p>
                  Photography &<br />
                  Video
                </p>
              }
              courseVertical="art"
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
        </>
      ) : (
        <>
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
              courseVertical="music"
              courseSliderDuration="1 hour session"
              courseSliderContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam, obcaecati harum ut Quaerat nam, obcaecati harum ut architecto rem. architecto rem."
              courseSliderKeywords={[
                "Performance",
                "Music Composition",
                "Appreciation",
              ]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={musicCourses[0]?.verticalThemeColorDark}
              courseCategoryColorLight={
                musicCourses[0]?.verticalThemeColorLight
              }
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
              courseVertical="communication"
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
              courseVertical="art"
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
        </>
      )}
    </div>
  );
}

export default CourseCategorySection;
