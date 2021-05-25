import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import bannerImage1 from "../../assets/bannerImage2.png";
import bannerImage2 from "../../assets/homeBannerImage2.webp";
// import bannerImageCombined from "../../assets/homepageBannerImageCombined.svg";
function HomepageBanner() {
  return (
    <div className="homepage-banner__wrapper">
      <div className="homepage-banner__left">
        <h1 className="homepage-banner__left--header">
          High quality live online programs for children.
        </h1>
        <PrimaryButton
          buttonText="Book a free trial"
          version="version-2"
          linkTo="https://book-staging.sparkstudio.co/"
        />
      </div>
      <div className="homepage-banner__right">
        <img
          src={bannerImage2}
          alt=""
          className="homepage-banner__right--image-1"
        />
        <img
          src={bannerImage1}
          alt=""
          className="homepage-banner__right--image-2"
        />
        {/* <img src={bannerImageCombined} alt="banner" /> */}
      </div>
    </div>
  );
}

export default HomepageBanner;
