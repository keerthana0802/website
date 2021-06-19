import React from "react";
import ShowcaseSection from "../SingleCoursePageComponents/ShowcaseSection";
import AboutUsShowcase from "./AboutUsShowcase";
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
          <span>Our</span>Beliefs
        </h1>

        <BeliefCard
          index="1"
          title="Create"
          liner="Children are curious & imaginative. Our classes help them turn this into outcomes!"
        />
        <BeliefCard
          index="2"
          title="Curriculums"
          liner="We build structured lesson plans for your child. Our teachers are hand-picked and meticulously trained."
        />
        <BeliefCard
          index="3"
          title="Cultivate"
          liner="Our in-class and outside class activties ensure that your children maximise what they've learnt."
        />
      </div>
      <div className="belief-section__right">
        <AboutUsShowcase />
      </div>
    </div>
  );
}

export default BeliefSection;
