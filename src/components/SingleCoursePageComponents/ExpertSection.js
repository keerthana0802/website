import React from "react";
import confetti from "../../assets/Confetti.svg";

function ExpertSection({ courseDetails }) {
  return (
    <>
      {courseDetails.expertDetails ? (
        <div className="expert-section__wrapper">
          <img src={confetti} alt="" />
          <div className="expert-section">
            <h1 className="expert-section__header">Our Expert</h1>
            <div className="expert-section__bottom">
              <div className="expert-section__bottom--left">
                <img src="" alt="" />
                <h3>Meera Desai</h3>
                <p>Verified Music Instructor</p>
              </div>
              <div className="expert-section__bottom--right">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates perspiciatis ipsam error totam minima, similique
                  maiores necessitatibus molestiae voluptatum veniam ea odio,
                  quaerat cumque animi?
                </p>
                <h2>
                  <span style={{ backgroundColor: "#FF7171" }}></span>Senior
                  level mentor
                </h2>
                <h2>
                  <span style={{ backgroundColor: "#FFA724" }}></span>Highest
                  rating in Music
                </h2>
                <h2>
                  <span style={{ backgroundColor: "#000072" }}></span>6+ Years
                  of experience
                </h2>
              </div>
            </div>
          </div>
          <img src={confetti} alt="" />
        </div>
      ) : null}
    </>
  );
}

export default ExpertSection;
