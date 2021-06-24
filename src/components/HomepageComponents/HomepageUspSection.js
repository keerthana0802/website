import React, { useState, useEffect } from "react";
import usp1 from "../../assets/uspCard1.svg";
import usp2 from "../../assets/uspCard2.svg";
import usp3 from "../../assets/uspCard3.svg";
import usp4 from "../../assets/uspCard4.svg";
import uspReversed5 from "../../assets/uspCardReversed5.svg";
import uspReversed6 from "../../assets/uspCardReversed6.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import HomepageUspCard from "../cards/HomepageUspCard";
import moengageEvent from "../../helpers/MoengageEventTracking";
import { buttonClickAttributes } from "../../helpers/MoengageAttributeCreators";
// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
function HomepageUspSection() {
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [slidersPerView, setSlidersPerView] = useState(3);
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setResponsiveMode(true);
    }
    if (window.innerWidth > 545 && window.innerWidth < 769) {
      setSlidersPerView(2);
    }
    if (window.innerWidth < 545) {
      setSlidersPerView(1);
    }
  }, [initialRender]);
  const pagination = {
    clickable: true,
  };
  return (
    <div className="usp-section__wrapper">
      <HomepageSectionHeader headerContent="Why we’re awesome!" />
      {responsiveMode ? (
        <Swiper
          slidesPerView={slidersPerView}
          spaceBetween={0}
          pagination={pagination}
          className="mySwiper"
          navigation={true}
        >
          <SwiperSlide>
            <HomepageUspCard
              classNameProp="usp-section__top--card-1 usp-card"
              uspImage={usp1}
              uspHeader="Personal Attention"
              uspContent="Small group classes for individual attention on each child"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomepageUspCard
              classNameProp="usp-section__top--card-2 usp-card usp-card-reverse"
              uspImage={uspReversed5}
              uspHeader="Fun & Engaging"
              uspContent="Learn, interact and co-create with other kids. Make new friends!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomepageUspCard
              classNameProp="usp-section__top--card-3 usp-card"
              uspImage={usp2}
              uspHeader="Top Notch Curriculum"
              uspContent="Meticulously designed for effective learning, building interest and fun!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomepageUspCard
              classNameProp="usp-section__middle--card-1 usp-card"
              uspImage={usp3}
              uspHeader="Expert Teachers"
              uspContent="Carefully selected faculty - skilled, child-friendly and verified"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomepageUspCard
              classNameProp="usp-section__middle--card-2 usp-card"
              uspImage={usp4}
              uspHeader="Interdisciplinary"
              uspContent="Learning beyond the skill, connecting to the science and history of things"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomepageUspCard
              classNameProp="usp-section__bottom--card-1 usp-card usp-card-reverse"
              uspImage={uspReversed6}
              uspHeader="Certification"
              uspContent="Individual feedback and assessment, with certifications on completing levels"
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="usp-section">
          <div className="usp-section__top">
            <HomepageUspCard
              classNameProp="usp-section__top--card-1 usp-card"
              uspImage={usp1}
              uspHeader="Personal Attention"
              uspContent="Small group classes for individual attention on each child"
            />
            <HomepageUspCard
              classNameProp="usp-section__top--card-2 usp-card usp-card-reverse"
              uspImage={uspReversed5}
              uspHeader="Fun & Engaging"
              uspContent="Learn, interact and co-create with other kids. Make new friends!"
            />
            <HomepageUspCard
              classNameProp="usp-section__top--card-3 usp-card"
              uspImage={usp2}
              uspHeader="Top Notch Curriculum"
              uspContent="Meticulously designed for effective learning, building interest and fun!"
            />
          </div>
          <div className="usp-section__middle">
            <HomepageUspCard
              classNameProp="usp-section__middle--card-1 usp-card"
              uspImage={usp3}
              uspHeader="Expert Teachers"
              uspContent="Carefully selected faculty - skilled, child-friendly and verified"
            />
            <HomepageUspCard
              classNameProp="usp-section__middle--card-2 usp-card"
              uspImage={usp4}
              uspHeader="Interdisciplinary"
              uspContent="Learning beyond the skill, connecting to the science and history of things"
            />
          </div>
          <div className="usp-section__bottom">
            <HomepageUspCard
              classNameProp="usp-section__bottom--card-1 usp-card usp-card-reverse"
              uspImage={uspReversed6}
              uspHeader="Certification"
              uspContent="Individual feedback and assessment, with certifications on completing levels"
            />
          </div>
        </div>
      )}

      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="/book-a-trial"
        shine={true}
        clickHandle={() => {
          moengageEvent(
            "Button_Click",
            buttonClickAttributes(
              4,
              "Book a FREE trial",
              "/book-a-trial",
              1,
              4,
              3,
              "After Attributes Section"
            )
          );
        }}
      />
    </div>
  );
}

export default HomepageUspSection;
