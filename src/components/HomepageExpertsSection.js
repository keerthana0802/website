import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import HomepageExpertCard from "./cards/HomepageExpertCard";
import image1 from "../assets/teacherImage1.svg";
import image2 from "../assets/teacherImage2.svg";
// ! Swiper
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);
gsap.registerPlugin(scrollTrigger);
function HomepageExpertsSection() {
  // ! States for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [slidersPerView, setSlidersPerView] = useState(3);
  const [centeredSlides, setCenteredSlides] = useState(false);
  const pagination = {
    clickable: true,
  };
  // ! Animation refs
  const imageGridWRapperRef = useRef(null);
  const squareRef = useRef(null);
  // ! Effect to register the timeline
  useEffect(() => {
    if (window.innerWidth < 992) {
      setResponsiveMode(true);
    } else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imageGridWRapperRef.current,
            start: "top top",
            toggleActions: "play none none none",
            scrub: 2,
            pin: imageGridWRapperRef.current,
            anticipatePin: 1,
            ease: "ease-in",
          },
        })
        .set(squareRef.current, { scale: 3.5, ease: "ease-out" })
        .to(squareRef.current, { scale: 1, ease: "ease-out" }, 0.001);
    }
  }, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setCenteredSlides((centeredSlides) => true);
      setSlidersPerView((slidersPerView) => "auto");
    }
  }, [responsiveMode, centeredSlides, slidersPerView]);
  // ! Function to render the cards
  const renderCardsDesktop = () => {
    let arrayOfCards = [];
    for (let i = 0; i < 15; i++) {
      if (i % 2 === 0) {
        arrayOfCards.push(
          <HomepageExpertCard
            cardType="blue"
            cardName="Raag Sethi"
            cardTitle="Music"
            cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quae reiciendis odit officia accusantium?"
            cardImage={image1}
          />
        );
      } else {
        arrayOfCards.push(
          <HomepageExpertCard
            cardType="yellow"
            cardName="Meera Desai"
            cardTitle="Music"
            cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quae reiciendis odit officia accusantium?"
            cardImage={image2}
          />
        );
      }
    }
    return arrayOfCards;
  };
  const renderCardsResponsive = () => {
    let arrayOfCards = [];
    for (let i = 0; i < 7; i++) {
      if (i % 2 === 0) {
        arrayOfCards.push(
          <SwiperSlide>
            <HomepageExpertCard
              cardType="blue"
              cardName="Raag Sethi"
              cardTitle="Music"
              cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quae reiciendis odit officia accusantium?"
              cardImage={image1}
            />
          </SwiperSlide>
        );
      } else {
        arrayOfCards.push(
          <SwiperSlide>
            <HomepageExpertCard
              cardType="yellow"
              cardName="Meera Desai"
              cardTitle="Music"
              cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quae reiciendis odit officia accusantium?"
              cardImage={image2}
            />
          </SwiperSlide>
        );
      }
    }
    return arrayOfCards;
  };
  return (
    <>
      <HomepageSectionHeader headerContent="Meet the experts" />
      <div
        className="homepage-experts-section__wrapper"
        ref={imageGridWRapperRef}
      >
        {responsiveMode ? (
          <div className="homepage-experts-section__responsive" ref={squareRef}>
            <Swiper
              slidesPerView={slidersPerView}
              spaceBetween={40}
              centeredSlides={centeredSlides}
              pagination={pagination}
              className="mySwiper"
            >
              {renderCardsResponsive()}
            </Swiper>
          </div>
        ) : (
          <div className="homepage-experts-section" ref={squareRef}>
            {renderCardsDesktop()}
          </div>
        )}
      </div>
    </>
  );
}

export default HomepageExpertsSection;
