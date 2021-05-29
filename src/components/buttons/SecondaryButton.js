import React from "react";
import playButton from "../../assets/whiteRightArrow.svg";
import cartIcon from "../../assets/cartIcon.svg";
import cartArrow from "../../assets/cartArrow.svg";
function SecondaryButton({ buttonText, version, linkTo, clickHandle }) {
  const clickHandler = () => {
    if (linkTo) {
      window.location.href = linkTo;
    }
    if (clickHandle) {
      clickHandle();
    }
  };
  return (
    <div className={`secondary-button ${version}`} onClick={clickHandler}>
      {version === "version-1" ? <img src={playButton} alt="" /> : null}
      {version === "version-2" ? <img src={cartIcon} alt="" /> : null}
      {buttonText}
      {version === "version-2" ? <img src={cartArrow} alt="" /> : null}
    </div>
  );
}

export default SecondaryButton;
