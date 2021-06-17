import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import yellow from "../../assets/yellowCourse.jpeg";
// ! GSAP imports
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
// ! Registering plugin
gsap.registerPlugin(ScrollToPlugin);
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
  courseType, // ! single or multilevel
}) {
  // ! Scroll-to function
  const scroller = () => {
    gsap.to(window, {
      scrollTo: document.getElementById("single-course-details").offsetTop - 70,
      ease: "ease-out",
      duration: 1,
      scrollBehavior: "smooth",
    });
  };
  return (
    <div className="single-course-banner__wrapper">
      <div
        className="single-course-banner"
        style={{
          background: `linear-gradient(111.29deg,${courseThemeColorDark}88 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
        }}
      >
        <div className="single-course-banner__left">
          <h1 className="single-course-banner__left--header">{courseName}</h1>
          <p className="single-course-banner__left--content">{courseContent}</p>
          <div className="single-course-banner__left--tags"></div>
          <PrimaryButton
            buttonText={courseType === "single" ? "Buy Course" : "Choose level"}
            version="version-1"
            clickHandle={courseType === "single" ? null : scroller}
          />
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
