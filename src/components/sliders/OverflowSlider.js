import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import nextArrow from "../../assets/nextArrow.svg";
function OverflowSlider({ children, cardWidth, paddingLeft }) {
  // ! Ref for the actual slider
  const sliderRef = useRef(null);
  const screenWidthRef = useRef(null);
  // ! Local states
  const [remaining, setRemaining] = useState(0);
  // ! Functions to manage the movement
  let moveNext = () => {
    if (remaining > cardWidth) {
      // ! Normal case
      gsap.to(sliderRef.current, {
        x: `-=${cardWidth}`,
        duration: 0.3,
        ease: "ease-in",
      });
      setRemaining((remaining) => remaining - cardWidth);
    } else {
      //  ! For the last card
      gsap.to(sliderRef.current, {
        x: `-=${remaining}`,
        duration: 0.3,
        ease: "ease-in",
      });
      setRemaining((remaining) => 0);
    }
  };
  let movePrev = () => {
    //   ! normal case
    if (
      remaining + cardWidth <
      cardWidth * children.length - screenWidthRef.current
    ) {
      gsap.to(sliderRef.current, {
        x: `+=${cardWidth}`,
        duration: 0.3,
        ease: "ease-in",
      });
      setRemaining((remaining) => remaining + cardWidth);
    } else {
      // ! For the first card
      gsap.to(sliderRef.current, {
        x: `+=${
          cardWidth * children.length -
          screenWidthRef.current -
          remaining +
          paddingLeft
        }`,
        duration: 0.3,
        ease: "ease-in",
      });
      setRemaining(
        (remaining) =>
          cardWidth * children.length - screenWidthRef.current + paddingLeft
      );
    }
  };
  useEffect(() => {
    sliderRef.current.style.width = `${cardWidth * 7}px`;
    screenWidthRef.current = window.innerWidth;
    setRemaining(cardWidth * children.length - window.innerWidth + paddingLeft);
  }, []);
  useEffect(() => {
    console.log(remaining);
  }, [remaining]);
  return (
    <div
      className="overflow-slider__wrapper"
      style={{ paddingLeft: `${paddingLeft}px` }}
    >
      <div
        className="overflow-slider"
        ref={sliderRef}
        // style={{ width: `${cardWidth * 7}px` }}
      >
        {children}
      </div>
      {remaining ===
      cardWidth * children.length - window.innerWidth + paddingLeft ? null : (
        <button
          onClick={movePrev}
          className="overflow-slider__button overflow-slider__button--prev"
        >
          <img src={nextArrow} alt="" />
        </button>
      )}

      <button
        onClick={moveNext}
        className="overflow-slider__button overflow-slider__button--next"
      >
        <img src={nextArrow} alt="" />
      </button>
    </div>
  );
}

export default OverflowSlider;
