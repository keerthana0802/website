import React from "react";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import teamArtwork from "../../assets/teamArtwork.svg";
function TeamDescriptionSection() {
  return (
    <div className="team-description__wrapper">
      <HomepageSectionHeader headerContent="We are the best in our field" />
      <div className="team-description">
        <div className="team-description__left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            sapiente quam nulla distinctio sint veniam! Laboriosam recusandae
            modi sit? Dolore. ipsum dolor sit amet consectetur adipisicing elit.
            Et, sapiente quam nulla dist
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            sapiente quam nulla distinctio sint veniam! Laboriosam recusandae
            modi sit? Dolore. ipsum dolor sit amet consectetur adipisicing elit.
            Et, sapiente quam nulla dist
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            sapiente quam. dolor sit amet consectetur adipisicing elit. Et,
            sapiente quam.
          </p>
        </div>
        <div className="team-description__right">
          <img src={teamArtwork} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TeamDescriptionSection;
