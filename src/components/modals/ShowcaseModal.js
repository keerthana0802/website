import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import cross from "../../assets/cross.svg";
function ShowcaseModal({ media, modalCloseFunction, mediaType }) {
  const modalRef = useRef(null);
  const modalWrapperRef = useRef(null);
  const tweenRef = useRef(null);
  const opacityRef = useRef(null);
  useEffect(() => {
    modalRef.current.style.display = "flex";
    modalWrapperRef.current.style.display = "flex";
    tweenRef.current = gsap.fromTo(
      modalRef.current,
      { y: `-${window.innerHeight}`, autoAlpha: 1 },
      {
        y: `-${window.innerHeight * 0.1}`,
        autoAlpha: 1,
        duration: 0.6,
        ease: "back",
      }
    );
    opacityRef.current = gsap.fromTo(
      modalWrapperRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.6 }
    );
  }, []);
  return (
    <div
      className="video-showcase-modal__wrapper  global-modal-wrapper"
      ref={modalWrapperRef}
    >
      <div className="video-showcase-modal" ref={modalRef}>
        {mediaType === "video" ? (
          <video
            src={media}
            controls
            controlsList="nodownload"
            disablePictureInPicture
            autoPlay
          ></video>
        ) : null}
        {mediaType === "image" ? <img src={media} alt="" /> : null}
        <div
          className="video-showcase-modal__close"
          onClick={() => {
            setTimeout(() => {
              modalCloseFunction();
            }, 600);
            opacityRef.current.reverse();
            tweenRef.current.reverse();
          }}
        >
          <img src={cross} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default ShowcaseModal;
