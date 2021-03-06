import React, { useState, useEffect } from "react";
import CourseCatgorySlider from "../sliders/CourseCatgorySlider";
import CourseCatgorySliderResp from "../sliders/CourseCategorySliderResp";
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
          <div
            className="course-category-section"
            id="communication-section-resp"
          >
            <CourseCatgorySliderResp
              courseData={communicationCourses}
              courseSliderHeader={<p>Communication</p>}
              courseVertical="communication"
              courseSliderDuration="60 minute classes"
              courseSliderContent="Develop the most sought after 21st century skill. Be an orator, an opinion leader, a storyteller."
              courseSliderKeywords={["Confidence", "Communication", "Logic"]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={
                communicationCourses[0]?.verticalThemeColorDark
              }
              courseCategoryColorLight={
                communicationCourses[0]?.verticalThemeColorLight
              }
            />
          </div>
          <div className="course-category-section" id="art-section-resp">
            <CourseCatgorySliderResp
              courseData={artCourses}
              courseSliderHeader={<p>Visual Arts</p>}
              courseVertical="art"
              courseSliderDuration="60 minute classes"
              courseSliderContent="Get a real art education as you learn the fundamentals of fine art, unlock your imagination and dabble in the exciting world of applied arts"
              courseSliderKeywords={[
                "Creativity",
                "Technique",
                "Self-Expression",
              ]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={artCourses[0]?.verticalThemeColorDark}
              courseCategoryColorLight={artCourses[0]?.verticalThemeColorLight}
            />
          </div>
          <div className="course-category-section" id="music-section-resp">
            <CourseCatgorySliderResp
              courseData={musicCourses}
              courseSliderHeader={<p>Music</p>}
              courseVertical="music"
              courseSliderDuration="60 minute classes"
              courseSliderContent="Learn music the right way. Along with learning to sing or play an instrument, also understand music and explore music from around the world"
              courseSliderKeywords={[
                "Performance",
                "Composition",
                "Appreciation",
              ]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={musicCourses[0]?.verticalThemeColorDark}
              courseCategoryColorLight={
                musicCourses[0]?.verticalThemeColorLight
              }
            />
          </div>
        </>
      ) : null}
      {!responsiveMode ? (
        <>
          <div className="course-category-section" id="communication-section">
            <CourseCatgorySlider
              courseData={communicationCourses}
              courseSliderHeader={<p>Communication</p>}
              courseVertical="communication"
              courseSliderDuration="60 minute classes"
              courseSliderContent="Develop the most sought after 21st century skill. Be an orator, an opinion leader, a storyteller."
              courseSliderKeywords={["Confidence", "Communication", "Logic"]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={
                communicationCourses[0]?.verticalThemeColorDark
              }
              courseCategoryColorLight={
                communicationCourses[0]?.verticalThemeColorLight
              }
            />
          </div>
          <div className="course-category-section" id="art-section">
            <CourseCatgorySlider
              courseData={artCourses}
              courseSliderHeader={<p>Visual Arts</p>}
              courseVertical="art"
              courseSliderDuration="60 minute classes"
              courseSliderContent="Get a real art education as you learn the fundamentals of fine art, unlock your imagination and dabble in the exciting world of applied arts"
              courseSliderKeywords={[
                "Creativity",
                "Technique",
                "Self-Expression",
              ]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={artCourses[0]?.verticalThemeColorDark}
              courseCategoryColorLight={artCourses[0]?.verticalThemeColorLight}
            />
          </div>
          <div className="course-category-section" id="music-section">
            <CourseCatgorySlider
              courseData={musicCourses}
              courseSliderHeader={<p>Music</p>}
              courseVertical="music"
              courseSliderDuration="60 minute classes"
              courseSliderContent="Learn music the right way. Along with learning to sing or play an instrument, also understand music and explore music from around the world"
              courseSliderKeywords={[
                "Performance",
                "Composition",
                "Appreciation",
              ]}
              courseSliderExpertsVideoUrl=""
              courseCategoryColorDark={musicCourses[0]?.verticalThemeColorDark}
              courseCategoryColorLight={
                musicCourses[0]?.verticalThemeColorLight
              }
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CourseCategorySection;
