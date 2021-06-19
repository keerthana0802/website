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
import {
  addQtyToCart,
  addToCart,
  cartTooltipClose,
  cartTooltipOpen,
} from "../../store/actions/checkoutActions";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import { addToCartAttributes } from "../../helpers/MoengageAttributeCreators";
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
  showcase,
  courseId,
  courseThemeColorLight,
  courseThemeColorDark,
  courseType, // ! single or multilevel
}) {
  const activeCourseOnCoursePage = useSelector(
    (state) => state.courses.activeCourseOnCoursePage
  );
  const cart = useSelector((state) => state.checkout.cart);
  const allCourses = useSelector((state) => state.courses.allCourses);
  const dispatch = useDispatch();
  // ! Scroll-to function
  const scroller = () => {
    gsap.to(window, {
      scrollTo: document.getElementById("single-course-details").offsetTop - 70,
      ease: "ease-out",
      duration: 1,
      scrollBehavior: "smooth",
    });
  };
  const addToCartHandle = (courseCardId, courseCardName) => {
    let found = cart.find((course) => course.courseId === courseCardId);
    let foundPrice = allCourses.find(
      (course) => course.courseId === courseCardId
    );
    if (found) {
      dispatch(addQtyToCart(found.courseId));
      dispatch(cartTooltipOpen(courseCardName));
    } else {
      dispatch(addToCart({ courseId: courseCardId, qty: 1 }));
      dispatch(cartTooltipOpen(courseCardName));
      MoengageEventTracking(
        "Add_to_Cart",
        addToCartAttributes(courseCardId, courseCardName, foundPrice.price)
      );
    }
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
            clickHandle={
              courseType === "single"
                ? () => addToCartHandle(activeCourseOnCoursePage, courseName)
                : scroller
            }
          />
        </div>
        <div className="single-course-banner__right">
          {showcase ? (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              centeredSlides={true}
              className="single-course-banner-slider"
              pagination={{ clickable: true }}
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
          ) : (
            <img
              src={`${
                process.env.REACT_APP_ALL_COURSES_IMAGES_API
              }${activeCourseOnCoursePage?.toLowerCase()}`}
              className="fallback-image"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleCourseBanner;
