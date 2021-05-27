import React, { useState, useEffect } from "react";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import ShowcaseModal from "./modals/ShowcaseModal";
// import thumbnail from "../assets/videoThumbnail1.svg";
import thumbnail from "../assets/thumbnail.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import play from "../assets/playButton.svg";
import PrimaryButton from "./buttons/PrimaryButton";
function HomepageShowcase() {
  // ! state for modal
  const [showModal, setShowModal] = useState(false);
  // ! function to open modal with a specific URL
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  useEffect(() => {
    if (mediaUrl !== "") {
      setShowModal(true);
    }
  }, [mediaUrl]);
  // ! function to close modal
  const modalClose = () => {
    setShowModal(false);
    setMediaUrl("");
  };
  return (
    <div className="homepage-showcase__wrapper">
      <HomepageSectionHeader
        headerContent="Sparking Young Talent"
        linerContent="Making our hearts swell"
      />
      <div className="homepage-showcase__elements">
        <div
          className="homepage-showcase__elements--one showcase-single-element showcase-single-element--video"
          onClick={() => {
            setMediaType("video");
            setMediaUrl(
              (mediaUrl) =>
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            );
          }}
        >
          <img src={thumbnail} alt="video" />
        </div>
        <div
          className="homepage-showcase__elements--two showcase-single-element"
          onClick={() => {
            setMediaType("image");
            setMediaUrl((mediaUrl) => thumbnail2);
          }}
        >
          <img src={thumbnail2} alt="picture" />
        </div>
        <div
          className="homepage-showcase__elements--three showcase-single-element"
          onClick={() => {
            setMediaType("image");
            setMediaUrl((mediaUrl) => thumbnail3);
          }}
        >
          <img src={thumbnail3} alt="picture" />
        </div>
        <div
          className="homepage-showcase__elements--four showcase-single-element showcase-single-element--video"
          onClick={() => {
            setMediaType("video");
            setMediaUrl(
              (mediaUrl) =>
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            );
          }}
        >
          <img src={thumbnail3} alt="video" />
        </div>
        <div
          className="homepage-showcase__elements--five showcase-single-element"
          onClick={() => {
            setMediaType("image");
            setMediaUrl((mediaUrl) => thumbnail2);
          }}
        >
          <img src={thumbnail2} alt="picture" />
        </div>
      </div>
      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="https://book-staging.sparkstudio.co/"
      />
      {showModal ? (
        <ShowcaseModal
          modalCloseFunction={modalClose}
          media={mediaUrl}
          mediaType={mediaType}
        />
      ) : null}
    </div>
  );
}

export default HomepageShowcase;
