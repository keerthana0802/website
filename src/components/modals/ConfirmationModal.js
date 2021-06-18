import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import cross from "../../assets/cross.svg";
import cartoon from "../../assets/cartoon.svg";
function ConfirmationModal({ modalCloseFunction, modalText }) {
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
      className="callback-request-modal__wrapper global-modal-wrapper"
      ref={modalWrapperRef}
    >
      <div className="callback-request-modal" ref={modalRef}>
        <h1 className="callback-request-modal__content">{modalText}</h1>
        <div
          className="callback-request-modal__close"
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
        <img src={cartoon} alt="" className="callback-request-modal__cartoon" />
      </div>
    </div>
  );
}

export default ConfirmationModal;
