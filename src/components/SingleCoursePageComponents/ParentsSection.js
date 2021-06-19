import React from "react";
import artwork from "../../assets/parentsSectionArtwork.svg";
// ! Swiper
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import TestimonialSlide from "../../assets/customAssets/TestimonialSlide";
SwiperCore.use([Pagination]);
let dummyString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas, dicta eius temporibus obcaecati perspiciatis explicabo sed enim olestiae. Minus aliquid ab odio nostrum quos tenetur non id perferendis hic.";
function SingleSlide({ slideContent, slideSource, dark, light }) {
  return (
    <div className="single-slide">
      <p className="single-slide__content">{slideContent}</p>
      <h1 className="single-slide__source">{slideSource}</h1>
      <TestimonialSlide dark={dark} light={light} />
    </div>
  );
}
function ParentsSection({ light, dark, courseDetails }) {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      {courseDetails.testimonialData ? (
        <div className="parents-section__wrapper">
          <img src={artwork} alt="" />
          <div className="parents-section">
            <h1 className="parents-section__header">Beloved by all Parents</h1>
            <p className="parents-section__liner">
              Here is what our parents says
            </p>
            {/* <div className="parents-section__slider">
          <TestimonialSlide dark={dark} light={light} />
        </div> */}
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              pagination={pagination}
              className="parents-section__slider"
            >
              <SwiperSlide>
                <SingleSlide
                  slideContent={dummyString}
                  slideSource="Neeta Gupta, Parent of a 6 year old"
                  dark={dark}
                  light={light}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SingleSlide
                  slideContent={dummyString}
                  slideSource="Neeta Gupta, Parent of a 6 year old"
                  dark={dark}
                  light={light}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SingleSlide
                  slideContent={dummyString}
                  slideSource="Neeta Gupta, Parent of a 6 year old"
                  dark={dark}
                  light={light}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ParentsSection;
