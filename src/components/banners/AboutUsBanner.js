import React, { useState, useEffect } from "react";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import jyothika from "../../assets/jyothika.webp";
import kaustubh from "../../assets/kaustubh.webp";
import anushree from "../../assets/anushree.webp";
import namita from "../../assets/namita.webp";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
function BannerCard({ firstName, lastName, position, imageUrl }) {
  return (
    <div className="banner-card">
      <div className="banner-card__top">
        <div className="banner-card__top--left">
          <p className="position">
            {position}
            <span className="social"></span>
          </p>
          <h1 className="name">
            {firstName}
            <span>{lastName}</span>
          </h1>
        </div>
        <div className="banner-card__top--right">
          <button>Read more</button>
        </div>
      </div>
      <div className="banner-card__bottom">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

function AboutUsBanner() {
  const [responsiveMode, setResponsiveMode] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 769) {
      setResponsiveMode(true);
    }
  }, []);
  return (
    <div className="about-us-banner__wrapper">
      <div className="about-us-banner">
        <HomepageSectionHeader
          headerContent="Our Team"
          linerContent="The ones who made it possible"
        />
        {responsiveMode ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            className="about-us-banner__slider"
            // navigation={true}
          >
            <SwiperSlide>
              <BannerCard
                firstName="Anushree"
                lastName="Goenka"
                position="CEO"
                imageUrl={anushree}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                firstName="Kaustubh"
                lastName="Khade"
                position="CO-FOUNDER"
                imageUrl={kaustubh}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                firstName="Namita"
                lastName="Goel"
                position="CO-FOUNDER"
                imageUrl={namita}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCard
                firstName="Jyothika"
                lastName="Sahajanandan"
                position="CO-FOUNDER"
                imageUrl={jyothika}
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="about-us-banner__cards">
            <BannerCard
              firstName="Anushree"
              lastName="Goenka"
              position="CEO"
              imageUrl={anushree}
            />
            <BannerCard
              firstName="Kaustubh"
              lastName="Khade"
              position="CO-FOUNDER"
              imageUrl={kaustubh}
            />
            <BannerCard
              firstName="Namita"
              lastName="Goel"
              position="CO-FOUNDER"
              imageUrl={namita}
            />
            <BannerCard
              firstName="Jyothika"
              lastName="Sahajanandan"
              position="CO-FOUNDER"
              imageUrl={jyothika}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUsBanner;
