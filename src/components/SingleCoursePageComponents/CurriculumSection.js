import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Path from "./paths/Path";

function CurriculumSection({ dark }) {
  return (
    <div className="curriculum-section__wrapper">
      <div className="curriculum-section">
        <div className="curriculum-section__left">
          <h1 className="curriculum-section__left--header">Curriculum</h1>
          <h3 className="curriculum-section__left--liner">
            In this course, the student will achieve the following outcomes
          </h3>
          <ul className="curriculum-section__left--list">
            <li className="curriculum-section__left--list-item">
              Understand elements and structure of a story
            </li>
            <li className="curriculum-section__left--list-item">
              Practice weaving stories with the addition of elements and details
            </li>
            <li className="curriculum-section__left--list-item">
              Learn to narrate with confidence using expressions and voice
              modulation
            </li>
            <li className="curriculum-section__left--list-item">
              Practice speaking independently in a group setting
            </li>
          </ul>
          <PrimaryButton buttonText="Buy Course" version="version-1" />
        </div>
        <div className="curriculum-section__right">
          <Path courseThemeColorDark={dark} steps={12} />
        </div>
      </div>
    </div>
  );
}

export default CurriculumSection;
