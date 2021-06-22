import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import HomepageExpertCard from "../cards/HomepageExpertCard";

// ! Swiper
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination, Navigation]);
gsap.registerPlugin(scrollTrigger);
function HomepageExpertsSection() {
  const pagination = {
    clickable: true,
  };
  // ! Animation refs
  const imageGridWRapperRef = useRef(null);
  const squareRef = useRef(null);
  const startingRef = useRef(null);
  // ! Effect to register the timeline
  useEffect(() => {
    // setTimeout(() => {
    //   setRerendered(true);
    // }, 3000);
    // console.log(imageGridWRapperRef.current.getBoundingClientRect());
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: startingRef.current,
    //       start: "200",
    //       end: "1800",
    //       toggleActions: "play none none none",
    //       scrub: 1,
    //       pin: imageGridWRapperRef.current,
    //       // markers: true,
    //       ease: "ease-in",
    //     },
    //   })
    //   .set(squareRef.current, { scale: 2.9, ease: "ease-out" })
    //   .to(squareRef.current, { scale: 1, ease: "ease-out" }, 0.001);
  }, []);

  return (
    <>
      {/* <hr ref={startingRef} /> */}
      <HomepageSectionHeader headerContent="Meet the experts" />
      <div
        className="homepage-experts-section__wrapper"
        // ref={imageGridWRapperRef}
      >
        <div
          className="homepage-experts-section"
          // ref={squareRef}
        >
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            pagination={pagination}
            // navigation={true}
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
            <SwiperSlide>
              <HomepageExpertCard
                cardType="yellow"
                cardName="Meera"
                cardCourse="Western Vocals"
                cardTitle="Music"
                cardContent="In 2020 Meera won the Indies for the Best Female Vocalist in India. She's a professinal singer and songwriter."
              />
            </SwiperSlide>
            {/* <SwiperSlide>
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
            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Shantheri"
                cardCourse="Storytelling"
                cardTitle="Communication"
                cardContent="12+ years of experience teaching, developing curriculum, and training teachers, 100+ storytelling classes "
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Richa"
                cardCourse="Art"
                cardTitle="Art"
                cardContent="Singapore-based watercolour artist, conducted 100+ workshops for children and adults"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Tirthankar"
                cardCourse="Public Speaking"
                cardTitle="Communication"
                cardContent="Holds a Masters degree in Education, 6+ years of experience teaching and creating content for 1000s of schools"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Savita"
                cardCourse="Public Speaking"
                cardTitle="Communication"
                cardContent="Holds a Masters degree in Social Work, 5+ years of experience developing English literacy skills of students in 100+ schools"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Rohit"
                cardCourse="Photography"
                cardTitle="Art"
                cardContent="A professional photographer with a Masters of Photography from National Institute of Design, visiting faculty at NIFT"
              />
            </SwiperSlide> */}
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Rohit"
                cardCourse="Photography"
                cardTitle="Art"
                cardContent="A professional photographer with a Masters of Photography from National Institute of Design, visiting faculty at NIFT"
                cardImage={image1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Savita"
                cardCourse="Public Speaking"
                cardTitle="Communication"
                cardContent="Holds a Masters degree in Social Work, 5+ years of experience developing English literacy skills of students in 100+ schools"
                cardImage={image1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Shreya"
                cardCourse="Photography"
                cardTitle="Art"
                cardContent="An Aegean Centre for Fine Arts (Greece) Alumna, Work published in the National Geographic Traveller, Hindustan Times, DNA."
                cardImage={image1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Avirukh"
                cardCourse="Animation"
                cardTitle="Art"
                cardContent="A designer from Royal College of Art, London. His work has been featured in Forbes, Car Design News, Indian Express"
                cardImage={image1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomepageExpertCard
                cardType="blue"
                cardName="Kumud"
                cardCourse="Storytelling"
                cardTitle="Communication"
                cardContent="20+ years of experience preparing students for language-based competitive exams such as CAT, GRE, SAT, IELTS"
                cardImage={image1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomepageExpertCard
                cardType="purple"
                cardName="Ruchika"
                cardCourse="Art"
                cardTitle="Art"
                cardContent="5+ years facilitating art and theatre workshops for 1000s of children and adults. "
                cardImage={image1}
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HomepageExpertsSection;
