import React, { useState } from "react";
import AboutUsBanner from "../components/banners/AboutUsBanner";
import NavFooterLayout from "../containers/NavFooterLayout";
import zynga from "../assets/zynga.svg";
import IIM from "../assets/IIM.svg";
import leadSchool from "../assets/leadSchool.svg";
import teachForIndia from "../assets/TeachForIndia.webp";
import IITD from "../assets/IITD.webp";
import TeamGrid from "../components/AboutUsPageComponents/TeamGrid";
import TeamDescriptionSection from "../components/AboutUsPageComponents/TeamDescriptionSection";
import BeliefSection from "../components/AboutUsPageComponents/BeliefSection";
import MentorsSection from "../components/AboutUsPageComponents/MentorsSection";
import PrimaryButton from "../components/buttons/PrimaryButton";
import moengageEvent from "../helpers/MoengageEventTracking";
import { connectWithUsAttributes } from "../helpers/MoengageAttributeCreators";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import axios from "axios";
import heart from "../assets/heart.svg";
function AboutUs() {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <NavFooterLayout>
      <div className="spark-about-us__wrapper">
        <AboutUsBanner />
        <div className="spark-about-us__strip">
          <h1 className="spark-about-us__strip--header">
            Built with{" "}
            <span className="heart">
              <img src={heart} alt="" />
            </span>{" "}
            by a team <span className="brackets">(</span>not just
            <span className="brackets">)</span> from
          </h1>
          <div className="spark-about-us__strip--companies">
            <img src={zynga} alt="" className="company-1" />
            <img src={IIM} alt="" className="company-2" />
            <img src={leadSchool} alt="" className="company-3" />
            <img src={teachForIndia} alt="" className="company-4" />
            <img src={IITD} alt="" className="company-5" />
          </div>
        </div>
        {/* <TeamGrid /> */}
        <TeamDescriptionSection />
        <BeliefSection />
        <MentorsSection />
        <section className="large-trial-card spark-about-us__career">
          <h1 className="large-trial-card__header">Join our Team!</h1>
          <p className="large-trial-card__content">
            We're on the lookout for smart, driven, individuals who believe they
            can shape the future of education.
          </p>
          <input
            type="text"
            placeholder="Your linkedin profile"
            className="linkedin-input-field"
            value={linkedinUrl}
            onChange={(ev) => setLinkedinUrl(ev.target.value)}
          />
          <div className="linkedin-button">
            <PrimaryButton
              buttonText="Connect with us"
              version="version-2"
              clickHandle={async () => {
                if (linkedinUrl.length > 0) {
                  await axios.post(
                    process.env.REACT_APP_CAREERS_APPLICATION_API,
                    {
                      linkedin_profile: linkedinUrl,
                    }
                  );
                  setShowModal(!showModal);
                  moengageEvent(
                    "Connect_With_Us",
                    connectWithUsAttributes(
                      linkedinUrl.length > 0 ? 1 : 0,
                      window.location.pathname,
                      ""
                    )
                  );
                }
              }}
            />
            {linkedinUrl.length > 0 ? null : (
              <div className="linkedin-tooltip">
                <span>
                  Please enter a Linkedin URL <br />
                  or Linkedin profile name
                </span>
              </div>
            )}
          </div>

          {showModal ? (
            <ConfirmationModal
              modalCloseFunction={() => setShowModal(!showModal)}
              modalText="We will get back to you!"
            />
          ) : null}
        </section>
      </div>
    </NavFooterLayout>
  );
}

export default AboutUs;
