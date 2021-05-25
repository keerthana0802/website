import React, { useState } from "react";
import arrow from "../../assets/buttonArrow.svg";
function PrimaryButton({ buttonText, version, linkTo }) {
  const clickHandler = () => {
    if (linkTo) {
      window.location.href = linkTo;
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
