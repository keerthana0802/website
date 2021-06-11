import React from "react";
import AboutUsBanner from "../components/banners/AboutUsBanner";
import NavFooterLayout from "../containers/NavFooterLayout";
import zynga from "../assets/zynga.svg";
import IIM from "../assets/IIM.svg";
import leadSchool from "../assets/leadSchool.svg";
import teachForIndia from "../assets/teachForIndia.svg";
import IITD from "../assets/IITD.svg";
import TeamGrid from "../components/AboutUsPageComponents/TeamGrid";
import TeamDescriptionSection from "../components/AboutUsPageComponents/TeamDescriptionSection";
import BeliefSection from "../components/AboutUsPageComponents/BeliefSection";
import MentorsSection from "../components/AboutUsPageComponents/MentorsSection";
import PrimaryButton from "../components/buttons/PrimaryButton";
function AboutUs() {
  return (
    <NavFooterLayout>
      <div className="spark-about-us__wrapper">
        <AboutUsBanner />
        <div className="spark-about-us__strip">
          <h1 className="spark-about-us__strip--header">
            Built with love by a team not just from
          </h1>
          <div className="spark-about-us__strip--companies">
            <img src={zynga} alt="" />
            <img src={IIM} alt="" />
            <img src={leadSchool} alt="" />
            <img src={teachForIndia} alt="" />
            <img src={IITD} alt="" />
          </div>
        </div>
        <TeamGrid />
        <TeamDescriptionSection />
        <BeliefSection />
        <MentorsSection />
        <section className="large-trial-card spark-about-us__career">
          <h1 className="large-trial-card__header">Be a part of our Team!</h1>
          <p className="large-trial-card__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repellat in ab earum iste voluptatum eaque veniam excepturi
            voluptatibus dolores.
          </p>
          <input
            type="text"
            placeholder="Your linkedin profile"
            className="linkedin-input-field"
          />
          <PrimaryButton buttonText="Connect with us" version="version-2" />
        </section>
      </div>
    </NavFooterLayout>
  );
}

export default AboutUs;
