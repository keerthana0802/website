import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import HomepageExpertCard from "../cards/HomepageExpertCard";
import image1 from "../../assets/teacherImage1.svg";
import image2 from "../../assets/teacherImage2.svg";
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
  // ! Rerender
  const [rerendered, setRerendered] = useState(false);
  const pagination = {
    clickable: true,
  };
  // ! Animation refs
  const imageGridWRapperRef = useRef(null);
  const squareRef = useRef(null);
  const startingRef = useRef(null);
  // ! Effect to register the timeline
  useEffect(() => {
    setTimeout(() => {
      setRerendered(true);
    }, 3000);
    // console.log(imageGridWRapperRef.current.getBoundingClientRect());
    if (window.innerWidth < 992) {
      setResponsiveMode(true);
    } else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: startingRef.current,
            start: "200",
            end: "1800",
            toggleActions: "play none none none",
            scrub: 1,
            pin: imageGridWRapperRef.current,
            // markers: true,
            ease: "ease-in",
          },
        })
        .set(squareRef.current, { scale: 2.9, ease: "ease-out" })
        .to(squareRef.current, { scale: 1, ease: "ease-out" }, 0.001);
    }
  }, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setCenteredSlides((centeredSlides) => true);
      setSlidersPerView((slidersPerView) => "auto");
    }
  }, [responsiveMode, centeredSlides, slidersPerView]);

  return (
    <>
      <hr ref={startingRef} />
      <HomepageSectionHeader headerContent="Meet the experts" />
      <div
        className="homepage-experts-section__wrapper"
        ref={imageGridWRapperRef}
      >
        {responsiveMode ? (
          <div className="homepage-experts-section__responsive" ref={squareRef}>
            <Swiper
              slidesPerView={slidersPerView}
              spaceBetween={0}
              centeredSlides={centeredSlides}
              pagination={pagination}
              className="mySwiper"
            >
              <SwiperSlide>
                <HomepageExpertCard
                  cardType="purple"
                  cardName="Rashmi Bidasria"
                  cardTitle="Art"
                  cardContent="Rashmi is a designer and an architect from the Royal College of Art, London."
                  cardImage={image1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomepageExpertCard
                  cardType="blue"
                  cardName="Priyanka Babbar"
                  cardTitle="Communication"
                  cardContent="Priyanka has conducted 200+ storytelling sessions globally! She's bubbly, engaging and a student favourite."
                  cardImage={image1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomepageExpertCard
                  cardType="yellow"
                  cardName="Meera Desai"
                  cardTitle="Music"
                  cardContent="In 2020 Meera won the Indies for the Best Female Vocalist in India. She's a professinal singer and songwriter."
                  cardImage={image1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomepageExpertCard
                  cardType="blue"
                  cardName="Rachita Rath"
                  cardTitle="Communication"
                  cardContent="Rachita's a NIFT graduate, with 7 years of teaching experience, who guest lectures at NIFT."
                  cardImage={image1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HomepageExpertCard
                  cardType="yellow"
                  cardName="Vivek Oswal"
                  cardTitle="Music"
                  cardContent="Vivek has 15 years of experience playing guitar, teaching and composing music."
                  cardImage={image1}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="homepage-experts-section" ref={squareRef}>
            <HomepageExpertCard
              cardType="yellow"
              cardName="Purna"
              cardTitle="Music"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Shantheri"
              cardTitle="Communication"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="purple"
              cardName="Rashmi Bidasria"
              cardTitle="Art"
              cardContent="Rashmi is a designer and an architect from the Royal College of Art, London."
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="purple"
              cardName="Richa"
              cardTitle="Art"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Tirthankar"
              cardTitle="Communication"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="purple"
              cardName="Rohit"
              cardTitle="Art"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Priyanka Babbar"
              cardTitle="Communication"
              cardContent="Priyanka has conducted 200+ storytelling sessions globally! She's bubbly, engaging and a student favourite."
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="yellow"
              cardName="Meera Desai"
              cardTitle="Music"
              cardContent="In 2020 Meera won the Indies for the Best Female Vocalist in India. She's a professinal singer and songwriter."
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Rachita Rath"
              cardTitle="Communication"
              cardContent="Rachita's a NIFT graduate, with 7 years of teaching experience, who guest lectures at NIFT."
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Savita"
              cardTitle="Communication"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="purple"
              cardName="Divya"
              cardTitle="Art"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Raag Sethi"
              cardTitle="Music"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="yellow"
              cardName="Vivek Oswal"
              cardTitle="Music"
              cardContent="Vivek has 15 years of experience playing guitar, teaching and composing music."
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="blue"
              cardName="Kumud"
              cardTitle="Communication"
              cardContent=""
              cardImage={image1}
            />
            <HomepageExpertCard
              cardType="purple"
              cardName="Ruchika"
              cardTitle="Art"
              cardContent=""
              cardImage={image1}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default HomepageExpertsSection;
