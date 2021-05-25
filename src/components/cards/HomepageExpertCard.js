import React from "react";
import blueCard from "../../assets/expertCardBlue.svg";
import yellowCard from "../../assets/expertCardYellow.svg";
import PrimaryButton from "../buttons/PrimaryButton";
function HomepageExpertCard({
  cardType,
  cardName,
  cardTitle,
  cardContent,
  cardImage,
}) {
  const cardSelector = () => {
    switch (cardType) {
      case "blue":
        return `url(${blueCard})`;
      case "yellow":
        return `url(${yellowCard})`;
      default:
        break;
    }
  };
  return (
    <div className={`expert-card expert-card--${cardType}`}>
      <img src={cardImage} alt="" />
      <h1 className="expert-card__name">{cardName}</h1>
      <h2 className="expert-card__title">{cardTitle}</h2>
      <p className="expert-card__content">{cardContent}</p>
      <PrimaryButton buttonText={`Explore ${cardTitle}`} version="version-3" />
    </div>
  );
}

export default HomepageExpertCard;
