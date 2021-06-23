import React from "react";
import confetti from "../../assets/Confetti.svg";

function ExpertSection({ courseDetails }) {
  // console.log(courseDetails.expertDetails);
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
  };
  const titleCase = (string) => {
    let result = string?.split(" ").map((word) => {
      if (word.toLowerCase() === "of" || word.toLowerCase() === "in") {
        return word;
      } else {
        return capitalize(word);
      }
    });
    return result?.join(" ");
  };
  const colorSelector = (index) => {
    switch (index) {
      case 0:
        return "#FF7171";
      case 1:
        return "#FFA724";
      case 2:
        return "#000072";
      default:
        break;
    }
  };
  return (
    <>
      {courseDetails.expertDetails ? (
        <div className="expert-section__wrapper">
          <img src={confetti} alt="" />
          <div className="expert-section">
            <h1 className="expert-section__header">Our Expert</h1>
            <div className="expert-section__bottom">
              <div className="expert-section__bottom--left">
                <img
                  src={`${
                    process.env.REACT_APP_ALL_EXPERTS_IMAGES_API
                  }${courseDetails.expertDetails.image_url_name.toLowerCase()}`}
                  alt=""
                />
                <h3>
                  {capitalize(courseDetails.expertDetails.image_url_name)}
                </h3>
                <p>{titleCase(courseDetails.expertDetails.expert_position)}</p>
              </div>
              <div className="expert-section__bottom--right">
                <p>{courseDetails.expertDetails.expert_description}</p>
                {courseDetails.expertDetails.expert_usp_pointers.map(
                  (pointer, index) => {
                    return (
                      <h2 key={index}>
                        <span
                          style={{ backgroundColor: colorSelector(index) }}
                        ></span>
                        {pointer}
                      </h2>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <img src={confetti} alt="" />
        </div>
      ) : null}
    </>
  );
}

export default ExpertSection;
