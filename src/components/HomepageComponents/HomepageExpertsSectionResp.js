import React, { useState, useEffect, useRef } from "react";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import HomepageExpertCard from "../cards/HomepageExpertCard";

// ! Swiper
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);
function HomepageExpertsSectionResp() {
  // ! States for responsive mode
  const [slidersPerView, setSlidersPerView] = useState(3);
  const [centeredSlides, setCenteredSlides] = useState(false);
  const pagination = {
    clickable: true,
  };
  useEffect(() => {
    if (window.innerWidth < 992) {
      setCenteredSlides((centeredSlides) => true);
      setSlidersPerView((slidersPerView) => "auto");
    }
  }, [centeredSlides, slidersPerView]);

  return (
    <>
      <HomepageSectionHeader headerContent="Meet the experts" />
      <div className="homepage-experts-section__wrapper">
        <div className="homepage-experts-section__responsive">
          <Swiper
            slidesPerView={slidersPerView}
            spaceBetween={0}
            centeredSlides={centeredSlides}
            pagination={pagination}
            className="mySwiper"
          >
            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Priyanka"
                cardCourse="Storytelling"
                cardTitle="Communication"
                cardContent="Priyanka has conducted 200+ storytelling sessions globally! She's bubbly, engaging and a student favourite."
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <HomepageExpertCard
                cardType="yellow"
                cardName="Meera"
                cardCourse="Western Vocals"
                cardTitle="Music"
                cardContent="In 2020 Meera won the Indies for the Best Female Vocalist in India. She's a professinal singer and songwriter."
                cardImage={image1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="yellow"
                cardName="Vivek"
                cardCourse="Guitar"
                cardTitle="Music"
                cardContent="Vivek has 15 years of experience playing guitar, teaching and composing music."
                cardImage={image1}
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Rashmi"
                cardCourse="Animation"
                cardTitle="Art"
                cardContent="Rashmi is a designer and an architect from the Royal College of Art, London."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Rachita"
                cardCourse="Debate"
                cardTitle="Communication"
                cardContent="Rachita's a NIFT graduate, with 7 years of teaching experience, who guest lectures at NIFT."
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="yellow"
                cardName="Purna"
                cardCourse="Western Vocals"
                cardTitle="Music"
                cardContent="A professional Rock and Country singer, 10+ years of experience performing and teaching music."
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Shantheri"
                cardCourse="Storytelling"
                cardTitle="Communication"
                cardContent="12+ years of experience teaching, developing curriculum, and training teachers, 100+ storytelling classes "
                cardImage={image1}
              />
            </SwiperSlide> */}

            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Richa"
                cardCourse="Art"
                cardTitle="Art"
                cardContent="Singapore-based watercolour artist, conducted 100+ workshops for children and adults"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Tirthankar"
                cardCourse="Public Speaking"
                cardTitle="Communication"
                cardContent="Holds a Masters degree in Education, 6+ years of experience teaching and creating content for 1000s of schools"
                cardImage={image1}
              />
            </SwiperSlide> */}

            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Savita"
                cardCourse="Public Speaking"
                cardTitle="Communication"
                cardContent="Holds a Masters degree in Social Work, 5+ years of experience developing English literacy skills of students in 100+ schools"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Rohit"
                cardCourse="Photography"
                cardTitle="Art"
                cardContent="A professional photographer with a Masters of Photography from National Institute of Design, visiting faculty at NIFT"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Avirukh"
                cardCourse="Animation"
                cardTitle="Art"
                cardContent="A designer from Royal College of Art, London. His work has been featured in Forbes, Car Design News, Indian Express"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Ankita"
                cardCourse="Debate"
                cardTitle="Communication"
                cardContent="A lawyer from University Law College with over a decade of experience in the social impact sector."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HomepageExpertsSectionResp;
