import React from "react";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import teamArtwork from "../../assets/teamArtwork.svg";
function TeamDescriptionSection() {
  return (
    <div className="team-description__wrapper">
      <HomepageSectionHeader headerContent="We'd like to know you better." />
      <div className="team-description">
        <div className="team-description__left">
          <p>Being a parent is tough.</p>
          <p>
            There are so many choices to make. Everyday. What does Rithika grow
            up to be? What will Naaz's grades be like? Do we need to monitor
            what they're watching on their devices? Did they finish their
            homework on time?
          </p>
          <p>
            We'd like to make your choices easy. 90% of our parents enjoy our
            hands-free classes in the secure knowledge that their children are
            learning skills that will last them a lifetime.
          </p>
          <p>
            Let's make being parent rewarding. Let's spark your child's
            learning.
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
