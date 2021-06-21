import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { setScrollToCourseCategory } from "../../store/actions/rootActions";
import { useHistory } from "react-router-dom";
function HomepageExpertCard({
  cardType,
  cardName,
  cardTitle,
  cardContent,
  cardCourse,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={`expert-card expert-card--${cardType}`}>
      <img
        src={`${
          process.env.REACT_APP_ALL_EXPERTS_IMAGES_API
        }${cardName.toLowerCase()}`}
        alt=""
      />
      <h1 className="expert-card__name">{cardName}</h1>
      <h2 className="expert-card__title">{cardCourse}</h2>
      <p className="expert-card__content">{cardContent}</p>
      <PrimaryButton
        buttonText={`Explore ${cardTitle}`}
        version="version-3"
        clickHandle={async () => {
          await dispatch(setScrollToCourseCategory(cardTitle));
          await history.push("/all-courses");
        }}
      />
    </div>
  );
}

export default HomepageExpertCard;
