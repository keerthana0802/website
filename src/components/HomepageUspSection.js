import React from "react";
import usp1 from "../assets/uspCard1.svg";
import usp2 from "../assets/uspCard2.svg";
import usp3 from "../assets/uspCard3.svg";
import usp4 from "../assets/uspCard4.svg";
import uspReversed5 from "../assets/uspCardReversed5.svg";
import uspReversed6 from "../assets/uspCardReversed6.svg";
import PrimaryButton from "./buttons/PrimaryButton";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
function HomepageUspSection() {
  return (
    <div className="usp-section__wrapper">
      <HomepageSectionHeader headerContent="How we do it" />
      <div className="usp-section">
        <div className="usp-section__top">
          <div className="usp-section__top--card-1 usp-card">
            <img src={usp1} alt="" />
            <h1 className="usp-card__header">Personal Attention</h1>
            <p className="usp-card__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="usp-section__top--card-2 usp-card usp-card-reverse">
            <img src={uspReversed5} alt="" />
            <h1 className="usp-card__header">Personal Attention</h1>
            <p className="usp-card__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="usp-section__top--card-3 usp-card">
            <img src={usp2} alt="" />
            <h1 className="usp-card__header">Personal Attention</h1>
            <p className="usp-card__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="usp-section__middle">
          <div className="usp-section__middle--card-1 usp-card">
            <img src={usp3} alt="" />
            <h1 className="usp-card__header">Personal Attention</h1>
            <p className="usp-card__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="usp-section__middle--card-2 usp-card">
            <img src={usp4} alt="" />
            <h1 className="usp-card__header">Personal Attention</h1>
            <p className="usp-card__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="usp-section__bottom">
          <div className="usp-section__bottom--card-1 usp-card usp-card-reverse">
            <img src={uspReversed6} alt="" />
            <h1 className="usp-card__header">Personal Attention</h1>
            <div className="usp-card__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, ipsum!
            </div>
          </div>
        </div>
      </div>
      <PrimaryButton buttonText="Book a free trial" version="version-2" />
    </div>
  );
}

export default HomepageUspSection;
