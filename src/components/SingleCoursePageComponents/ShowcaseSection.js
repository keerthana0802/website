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
function ShowcaseSection({ verticalThemeColorDark }) {
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
            Take a look. <br />
            This says it all.
          </h1>
          <p className="showcase-section__left--content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit
            vitae mollitia numquam accusamus ex eius soluta vel explicabo? Esse?
          </p>
          {typeof window === "object" && window.innerWidth > 992 ? (
            <PrimaryButton buttonText="See more" version="version-1" />
          ) : null}
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
                header="something"
                liner="other thing"
                mediaUrl={yellow}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                header="something"
                liner="other thing"
                mediaUrl={yellow}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                header="something"
                liner="other thing"
                mediaUrl={yellow}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                header="something"
                liner="other thing"
                mediaUrl={yellow}
              />
            </SwiperSlide>
          </Swiper>
          {typeof window === "object" && window.innerWidth <= 992 ? (
            <PrimaryButton buttonText="See more" version="version-1" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
