import React, { useState, useEffect, useRef } from "react";
import testimonialSlideBackground from "../../assets/testimonialSlide.svg";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import gsap from "gsap";
let dummyString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas, dicta eius temporibus obcaecati perspiciatis explicabo sed enim olestiae. Minus aliquid ab odio nostrum quos tenetur non id perferendis hic.";
function SingleSlide({ slideContent, slideSource }) {
  return (
    <div className="single-slide">
      <p className="single-slide__content">{slideContent}</p>
      <h1 className="single-slide__source">{slideSource}</h1>
      <img
        src={testimonialSlideBackground}
        alt=""
        className="single-slide__background"
      />
    </div>
  );
}

function TestimonialSlider() {
  // ! Refs for the testimonial
  const testimonialSliderRef = useRef(null);
  const activeDotRef = useRef(null);
  const testimonialTweenRef = useRef(null);
  const activeDotTweenRef = useRef(null);
  // ! State to set the position
  const [position, setPosition] = useState("0");
  useEffect(() => {
    testimonialTweenRef.current = (pos) =>
      gsap.to(testimonialSliderRef.current, {
        x: pos,
        ease: "back",
        duration: 0.8,
      });
    activeDotTweenRef.current = (pos) =>
      gsap.to(activeDotRef.current, {
        x: pos,
        ease: "back",
        duration: 0.8,
      });
  }, []);
  useEffect(() => {
    if (testimonialTweenRef.current) {
      testimonialTweenRef.current(position);
    }
    switch (position) {
      case "0":
        activeDotTweenRef.current("0");
        break;
      case `-${window.innerWidth}`:
        activeDotTweenRef.current("35");
        break;
      case `-${window.innerWidth * 2}`:
        activeDotTweenRef.current("70");
        break;
      default:
        break;
    }
  }, [position]);
  return (
    <div className="testimonial-slider__wrapper">
      <HomepageSectionHeader headerContent="What our parents say" />
      <div className="testimonial-slider" ref={testimonialSliderRef}>
        <SingleSlide slideContent={dummyString} slideSource="Parent name 1" />
        <SingleSlide slideContent={dummyString} slideSource="Parent name 2" />
        <SingleSlide slideContent={dummyString} slideSource="Parent name 3" />
      </div>
      <div className="testimonial-slider__dots">
        <div
          className="single-dot"
          onClick={() => {
            setPosition("0");
          }}
        ></div>
        <div
          className="single-dot"
          onClick={() => {
            setPosition(`-${window.innerWidth}`);
          }}
        ></div>
        <div
          className="single-dot"
          onClick={() => {
            setPosition(`-${window.innerWidth * 2}`);
          }}
        ></div>
        <div className="active-dot" ref={activeDotRef}></div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
