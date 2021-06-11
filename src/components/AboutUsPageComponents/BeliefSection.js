import React from "react";
import ShowcaseSection from "../SingleCoursePageComponents/ShowcaseSection";
function BeliefCard({ index, title, liner }) {
  return (
    <div className="belief-card">
      <span>{index}</span>
      <h2 className="title">{title}</h2>
      <p className="liner">{liner}</p>
    </div>
  );
}

function BeliefSection() {
  return (
    <div className="belief-section__wrapper">
      <div className="belief-section__left">
        <h1 className="belief-section__left--header">
          <span>Our</span>Belief
        </h1>

        <BeliefCard
          index="1"
          title="Holistic Development"
          liner="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima!"
        />
        <BeliefCard
          index="2"
          title="Future Ready"
          liner="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima!"
        />
        <BeliefCard
          index="3"
          title="Inculcating Creativity"
          liner="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima!"
        />
      </div>
      <div className="belief-section__right">
        <ShowcaseSection />
      </div>
    </div>
  );
}

export default BeliefSection;
