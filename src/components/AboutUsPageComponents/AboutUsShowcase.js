import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import yellow from "../../assets/yellowCourse.jpeg";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
function BannerCard({
  mediaType,
  mediaUrl,
  header,
  liner,
  courseThemeColorDark,
}) {
  return (
    <div className="showcase-card">
      <img src={mediaUrl} alt="" />
      <h1>{header}</h1>
      <p>{liner}</p>
    </div>
  );
}
function AboutUsShowcase({ verticalThemeColorDark }) {
  return (
    <div className="showcase-section__wrapper">
      <div
        className="showcase-section"
        style={{
          background: `linear-gradient(111.29deg,${verticalThemeColorDark}88 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
        }}
      >
        <div className="showcase-section__left">
          <h1 className="showcase-section__left--header">
            Don't take our word for it. <br />
            Take the kids' word.
          </h1>
          <p className="showcase-section__left--content">
            Here's what children aged 5 to 15 are making / creating at Spark
            Studio.
          </p>
          {/* {typeof window === "object" && window.innerWidth > 992 ? (
            <PrimaryButton buttonText="See more" version="version-1" />
          ) : null} */}
        </div>
        <div className="showcase-section__right">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            centeredSlides={true}
            className="single-course-banner-slider"
            pagination={{ clickable: true }}
            // navigation={true}
          >
            <SwiperSlide>
              <BannerCard
                header="Ruhi, age 7"
                liner="Photography"
                mediaUrl={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_2`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                header="Ruhi, age 7"
                liner="Photography"
                mediaUrl={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_1`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                header="Anant, age 11"
                liner="Photography"
                mediaUrl={`${process.env.REACT_APP_ALL_HOMEPAGE_SHOWCASE_ASSETS_API}homepage_showcase_image_3`}
              />
            </SwiperSlide>
          </Swiper>
          {/* {typeof window === "object" && window.innerWidth <= 992 ? (
            <PrimaryButton buttonText="See more" version="version-1" />
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

export default AboutUsShowcase;
