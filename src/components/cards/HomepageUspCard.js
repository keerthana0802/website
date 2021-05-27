import React from "react";

function HomepageUspCard({ classNameProp, uspImage, uspHeader, uspContent }) {
  return (
    <div className={classNameProp}>
      <img src={uspImage} alt="" />
      <h1 className="usp-card__header">{uspHeader}</h1>
      <p className="usp-card__content">{uspContent}</p>
    </div>
  );
}

export default HomepageUspCard;
