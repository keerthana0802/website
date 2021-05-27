import React, { useState, useEffect, useRef } from "react";
import testimonialSlideBackground from "../../assets/testimonialSlide.svg";
import testimonialSlideMobile from "../../assets/testimonialSlideMobile.svg";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import gsap from "gsap";
// ! Swiper
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);
let dummyString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas, dicta eius temporibus obcaecati perspiciatis explicabo sed enim olestiae. Minus aliquid ab odio nostrum quos tenetur non id perferendis hic.";
function SingleSlide({ slideContent, slideSource, slideBg }) {
  return (
    <div className="single-slide">
      <p className="single-slide__content">{slideContent}</p>
      <h1 className="single-slide__source">{slideSource}</h1>
      <img src={slideBg} alt="" className="single-slide__background" />
    </div>
  );
}

function TestimonialSlider() {
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  // ! Refs for the testimonial
  const testimonialSliderRef = useRef(null);
  const activeDotRef = useRef(null);
  const testimonialTweenRef = useRef(null);
  const activeDotTweenRef = useRef(null);
  // ! State to set the position
  const [position, setPosition] = useState("0");
  useEffect(() => {
    if (window.innerWidth < 545) {
      setResponsiveMode(true);
    } else {
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
    }
  }, [initialRender]);
  useEffect(() => {
    setInitialRender(false);
  }, []);
  useEffect(() => {
    if (testimonialTweenRef.current) {
      testimonialTweenRef.current(position);
    }
    if (window.innerWidth > 544 && window.innerWidth < 769) {
      switch (position) {
        case "0":
          activeDotTweenRef.current("0");
          break;
        case `-${window.innerWidth}`:
          activeDotTweenRef.current("25");
          break;
        case `-${window.innerWidth * 2}`:
          activeDotTweenRef.current("50");
          break;
        default:
          break;
      }
    } else if (window.innerWidth > 769) {
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
    }
  }, [position]);
  const pagination = {
    clickable: true,
  };
  return (
    <div className="testimonial-slider__wrapper">
      <HomepageSectionHeader
        headerContent="The Spark Experience"
        linerContent="Parent Testimonials"
      />
      {responsiveMode ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={pagination}
          className="mySwiper"
        >
          <SwiperSlide>
            <SingleSlide
              slideContent={dummyString}
              slideSource="Neeta Gupta, Parent of a 6 year old"
              slideBg={testimonialSlideMobile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide
              slideContent={dummyString}
              slideSource="Neeta Gupta, Parent of a 6 year old"
              slideBg={testimonialSlideMobile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide
              slideContent={dummyString}
              slideSource="Neeta Gupta, Parent of a 6 year old"
              slideBg={testimonialSlideMobile}
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <div className="testimonial-slider" ref={testimonialSliderRef}>
            <SingleSlide
              slideContent={dummyString}
              slideSource="Neeta Gupta, Parent of a 6 year old"
              slideBg={testimonialSlideBackground}
            />
            <SingleSlide
              slideContent={dummyString}
              slideSource="Neeta Gupta, Parent of a 6 year old"
              slideBg={testimonialSlideBackground}
            />
            <SingleSlide
              slideContent={dummyString}
              slideSource="Neeta Gupta, Parent of a 6 year old"
              slideBg={testimonialSlideBackground}
            />
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
        </>
      )}
    </div>
  );
}

export default TestimonialSlider;
