import React, { useState, useEffect, useRef } from "react";
import testimonialSlideBackground from "../../assets/testimonialSlide.jpeg";
import testimonialSlideMobile from "../../assets/testimonialSlideMobile.jpeg";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import gsap from "gsap";
// ! Swiper
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Autoplay, Pagination]);
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
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <SingleSlide
              slideContent="This is the second time we signed up with Spark Studio for a course. After completing his Art of Storytelling course, we signed up for Dramatic Storytelling and Anvay thoroughly enjoyed it and he loves his teacher."
              slideSource="Akanksha Jaiswal, Parent of a 7 year old"
              slideBg={testimonialSlideMobile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide
              slideContent="It’s the one thing she looks forward to everyday. She had initially joined the Art of Storytelling course which she enjoyed so we signed her up for the Dramatic Storytelling course."
              slideSource="Niharika Rakesh, Parent of a 5 year old"
              slideBg={testimonialSlideMobile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide
              slideContent="Fantastic session. It made me nostalgic, taking me back to my childhood...kids spinning such magical stories..This was only possible because of the clear direction given by the teacher. I am keen on signing up Jhanavi for more classes on Spark Studio."
              slideSource="Bhargavi Rao, Parent of a 6.5 year old"
              slideBg={testimonialSlideMobile}
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={pagination}
            className="mySwiper"
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <SingleSlide
                slideContent="This is the second time we signed up with Spark Studio for a course. After completing his Art of Storytelling course, we signed up for Dramatic Storytelling and Anvay thoroughly enjoyed it and he loves his teacher."
                slideSource="Akanksha Jaiswal, Parent of a 7 year old"
                slideBg={testimonialSlideBackground}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                slideContent="It’s the one thing she looks forward to everyday. She had initially joined the Art of Storytelling course which she enjoyed so we signed her up for the Dramatic Storytelling course."
                slideSource="Niharika Rakesh, Parent of a 5 year old"
                slideBg={testimonialSlideBackground}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleSlide
                slideContent="It's great to see the kids grow confident, being able to speak out and learn to recite from memory, the manner of articulation, the gestures, the flow of speech, it was great to see the kids showcase their learnings with so much confidence"
                slideSource="Shikha Gupta, Parent of a 7 year old"
                slideBg={testimonialSlideBackground}
              />
            </SwiperSlide>
          </Swiper>
          {/* <div className="testimonial-slider" ref={testimonialSliderRef}>
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
          </div> */}
        </>
      )}
    </div>
  );
}

export default TestimonialSlider;
