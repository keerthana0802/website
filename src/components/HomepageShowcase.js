import React, { useState, useEffect } from "react";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import VideoShowcaseModal from "./modals/VideoShowcaseModal";
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
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    if (videoUrl !== "") {
      setShowModal(true);
    }
  }, [videoUrl]);
  // ! function to close modal
  const modalClose = () => {
    setShowModal(false);
    setVideoUrl("");
  };
  return (
    <div className="homepage-showcase__wrapper">
      <HomepageSectionHeader
        headerContent="Sparkling hands work"
        linerContent="Showcase pieces"
      />
      <div className="homepage-showcase__elements">
        <div
          className="homepage-showcase__elements--one showcase-single-element showcase-single-element--video"
          onClick={() =>
            setVideoUrl(
              (videoUrl) =>
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            )
          }
        >
          <img src={thumbnail} alt="video" />
        </div>
        <div className="homepage-showcase__elements--two showcase-single-element">
          <img src={thumbnail2} alt="picture" />
        </div>
        <div className="homepage-showcase__elements--three showcase-single-element">
          <img src={thumbnail3} alt="picture" />
        </div>
        <div
          className="homepage-showcase__elements--four showcase-single-element showcase-single-element--video"
          onClick={() =>
            setVideoUrl(
              (videoUrl) =>
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            )
          }
        >
          <img src={thumbnail3} alt="video" />
        </div>
        <div className="homepage-showcase__elements--five showcase-single-element">
          <img src={thumbnail2} alt="picture" />
        </div>
      </div>
      <PrimaryButton buttonText="Book a free trial" version="version-2" />
      {showModal ? (
        <VideoShowcaseModal
          modalCloseFunction={modalClose}
          videoUrl={videoUrl}
        />
      ) : null}
    </div>
  );
}

export default HomepageShowcase;
