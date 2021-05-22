import React, { useState } from "react";
import arrow from "../../assets/buttonArrow.svg";
function PrimaryButton({ buttonText, version }) {
  //   // ! Button version control using class
  //   const [buttonClass, setButtonClass] = useState(`primary-button ${version}`);
  return (
    <div className={`primary-button ${version}`}>
      {buttonText}
      {version === "version-2" ? <img src={arrow} alt="arrow" /> : null}
    </div>
  );
}

export default PrimaryButton;
