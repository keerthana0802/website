import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
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
    <div className="single-course-banner-card">
      <img src={mediaUrl} alt="" />
      <h1>{header}</h1>
      <p>{liner}</p>
    </div>
  );
}

function SingleCourseBanner({
  courseName,
  courseContent,
  courseId,
  courseThemeColorLight,
  courseThemeColorDark,
}) {
  return (
    <div className="single-course-banner__wrapper">
      <div className="single-course-banner">
        <div className="single-course-banner__left">
          <h1 className="single-course-banner__left--header">{courseName}</h1>
          <p className="single-course-banner__left--content">{courseContent}</p>
          <div className="single-course-banner__left--tags"></div>
          <PrimaryButton buttonText="Buy Course" version="version-1" />
        </div>
        <div className="single-course-banner__right">
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
        </div>
      </div>
    </div>
  );
}

export default SingleCourseBanner;
