import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";

SwiperCore.use([Pagination]);

function MentorSlide({ fullName, position, content, imageUrl, imageUrlText }) {
  return (
    <div className="mentor-slide__wrapper">
      <div className="mentor-slide">
        <div className="mentor-slide__left">
          <img
            src={`${
              process.env.REACT_APP_ALL_EXPERTS_IMAGES_API
            }${imageUrlText.toLowerCase()}`}
            alt=""
          />
        </div>
        <div className="mentor-slide__right">
          <h1 className="mentor-slide__right--header">
            {fullName} <span>{position}</span>
          </h1>
          <p className="content">{content}</p>
        </div>
      </div>
    </div>
  );
}
function MentorsSection() {
  const [direction, setDirection] = useState(
    typeof window === "object" && window.innerWidth < 545
      ? "horizontal"
      : "vertical"
  );
  return (
    <div className="mentors-section__wrapper">
      <div className="mentors-section">
        <HomepageSectionHeader headerContent="Values, that are mirrored by our teachers." />
        <Swiper
          direction={direction}
          pagination={{
            clickable: true,
          }}
          className="mentors-section__slider"
        >
          {/* <SwiperSlide>
            <MentorSlide
              fullName="Meera Desai"
              imageUrlText="meera"
              position="Western Vocals"
              content="In 2020 Meera won the Indies for the Best Female Vocalist in India. She's a professinal singer and songwriter."
              imageUrl={meera}
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <MentorSlide
              fullName="Priyanka"
              imageUrlText="priyanka"
              position="Storytelling"
              content="Priyanka has conducted 200+ storytelling sessions globally! She's bubbly, engaging and a student favourite."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Rashmi"
              imageUrlText="rashmi"
              position="Animation"
              content="Rashmi is a designer and an architect from the Royal College of Art, London."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Rachita"
              imageUrlText="rachita"
              position="Debate"
              content="Rachita's a NIFT graduate, with 7 years of teaching experience, who guest lectures at NIFT."
            />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Purna"
              imageUrlText="purna"
              position="Western Vocals"
              content="A professional Rock and Country singer, 10+ years of experience performing and teaching music."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Richa"
              imageUrlText="richa"
              position="Art"
              content="Singapore-based watercolour artist, conducted 100+ workshops for children and adults"
            />
          </SwiperSlide>

          {/* <SwiperSlide>
            <MentorSlide
              fullName="Vivek Oswal"
              imageUrlText="vivek"
              position="Guitar"
              content="Vivek has 15 years of experience playing guitar, teaching and composing music."
              imageUrl={meera}
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default MentorsSection;
