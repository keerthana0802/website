import React, { useState, useEffect } from "react";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import ShowcaseModal from "../modals/ShowcaseModal";
import PrimaryButton from "../buttons/PrimaryButton";
import moengageEvent from "../../helpers/MoengageEventTracking";
import { buttonClickAttributes } from "../../helpers/MoengageAttributeCreators";
function HomepageShowcase() {
  // ! state for modal
  const [showModal, setShowModal] = useState(false);
  // ! function to open modal with a specific URL
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [width, setWidth] = useState("");
  useEffect(() => {
    if (mediaUrl !== "") {
      setShowModal(true);
    }
  }, [mediaUrl]);
  const widthSetter = (wid) => {
    if (window.innerWidth > 768) {
      return `${wid}%`;
    } else if (window.innerWidth <= 768 && window.innerWidth > 545) {
      return `${wid * 1.5}%`;
    } else if (window.innerWidth <= 545 && window.innerWidth > 360) {
      return `${wid * 2.15}%`;
    }
  };
  // ! function to close modal
  const modalClose = () => {
    moengageEvent(
      "Button_Click",
      buttonClickAttributes(
        3,
        "Dismiss Button",
        "/",
        10,
        1,
        3,
        "In The Showcase Section on the Homepage Displaying Videos"
      )
    );
    setShowModal(false);
    setMediaUrl("");
    setWidth("");
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
            moengageEvent(
              "Button_Click",
              buttonClickAttributes(
                1,
                "Play Icon",
                "/",
                10,
                1,
                3,
                "In The Showcase Section on the Homepage Displaying Videos"
              )
            );
            setMediaType("video");
            setMediaUrl(
              (mediaUrl) =>
                `${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_video_1.mp4`
            );
          }}
        >
          <img
            src={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_video_1_thumbnail`}
            alt="video"
          />
        </div>
        <div
          className="homepage-showcase__elements--two showcase-single-element"
          onClick={() => {
            setMediaType("image");
            setMediaUrl(
              (mediaUrl) =>
                `${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_2`
            );
            setWidth(widthSetter(30));
          }}
        >
          <img
            src={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_2`}
            alt=""
          />
        </div>
        <div
          className="homepage-showcase__elements--three showcase-single-element"
          onClick={() => {
            setMediaType("image");
            setMediaUrl(
              (mediaUrl) =>
                `${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_1`
            );
            setWidth(widthSetter(30));
          }}
        >
          <img
            src={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_1`}
            alt=""
          />
        </div>
        <div
          className="homepage-showcase__elements--four showcase-single-element showcase-single-element--video"
          onClick={() => {
            moengageEvent(
              "Button_Click",
              buttonClickAttributes(
                1,
                "Play Icon",
                "/",
                10,
                1,
                3,
                "In The Showcase Section on the Homepage Displaying Videos"
              )
            );
            setMediaType("video");
            setMediaUrl(
              (mediaUrl) =>
                `${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_video_2.mp4`
            );
          }}
        >
          <img
            src={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_video_2_thumbnail`}
            alt="video"
          />
        </div>
        <div
          className="homepage-showcase__elements--five showcase-single-element"
          onClick={() => {
            setMediaType("image");
            setMediaUrl(
              (mediaUrl) =>
                `${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_3`
            );
            setWidth(widthSetter(40));
          }}
        >
          <img
            src={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_3`}
            alt=""
          />
        </div>
      </div>
      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="/book-a-trial"
        shine={true}
        clickHandle={() => {
          moengageEvent(
            "Button_Click",
            buttonClickAttributes(
              3,
              "Book a FREE trial",
              "/book-a-trial",
              1,
              4,
              3,
              "After Showcase Section"
            )
          );
        }}
      />
      {showModal ? (
        <ShowcaseModal
          modalCloseFunction={modalClose}
          media={mediaUrl}
          mediaType={mediaType}
          width={width}
        />
      ) : null}
    </div>
  );
}

export default HomepageShowcase;
