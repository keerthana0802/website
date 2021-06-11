import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import meera from "../../assets/meera.svg";
SwiperCore.use([Pagination]);

function MentorSlide({ fullName, position, content, imageUrl }) {
  return (
    <div className="mentor-slide__wrapper">
      <div className="mentor-slide">
        <div className="mentor-slide__left">
          <img src={imageUrl} alt="" />
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
        <HomepageSectionHeader headerContent="Let’s meet our super cool mentors" />
        <Swiper
          direction={direction}
          pagination={{
            clickable: true,
          }}
          className="mentors-section__slider"
        >
          <SwiperSlide>
            <MentorSlide
              fullName="Meera Desai"
              position="Lead, Music"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!"
              imageUrl={meera}
            />
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Meera Desai"
              position="Lead, Music"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!"
              imageUrl={meera}
            />
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Meera Desai"
              position="Lead, Music"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minimadolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!!"
              imageUrl={meera}
            />
          </SwiperSlide>
          <SwiperSlide>
            <MentorSlide
              fullName="Meera Desai"
              position="Lead, Music"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!dolor sit amet consectetur, adipisicing elit. Autem, minima!"
              imageUrl={meera}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MentorsSection;
