import React, { useState } from "react";
import arrow from "../../assets/buttonArrow.svg";
function PrimaryButton({ buttonText, version, linkTo, clickHandle }) {
  const clickHandler = () => {
    if (linkTo) {
      window.location.href = linkTo;
    }
    if (clickHandle) {
      clickHandle()
    }
  };

  return (
    <div className={`primary-button ${version}`} onClick={clickHandler}>
      {buttonText}
      {version === "version-2" ? <img src={arrow} alt="arrow" /> : null}
    </div>
  );
}

export default PrimaryButton;
