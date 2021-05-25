import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import HomepageSectionHeader from "./headers/HomepageSectionHeader";
import HomepageExpertCard from "./cards/HomepageExpertCard";
import image1 from "../assets/teacherImage1.svg";
import image2 from "../assets/teacherImage2.svg";
gsap.registerPlugin(scrollTrigger);
function HomepageExpertsSection() {
  // ! Animation refs
  const imageGridWRapperRef = useRef(null);
  const squareRef = useRef(null);
  // ! Effect to register the timeline
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageGridWRapperRef.current,
          start: "top top",
          toggleActions: "play none none none",
          scrub: 1,
          pin: imageGridWRapperRef.current,
          anticipatePin: 1,
          ease: "ease-in",
        },
      })
      .set(squareRef.current, { scale: 3.5, ease: "ease-out" })
      .to(squareRef.current, { scale: 1, ease: "ease-out" }, 0.001);
  }, []);
  // ! Function to render the cards
  const renderCards = () => {
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
  return (
    <>
      <HomepageSectionHeader headerContent="Meet the experts" />
      <div
        className="homepage-experts-section__wrapper"
        ref={imageGridWRapperRef}
      >
        <div className="homepage-experts-section" ref={squareRef}>
          {renderCards()}
        </div>
      </div>
    </>
  );
}

export default HomepageExpertsSection;
