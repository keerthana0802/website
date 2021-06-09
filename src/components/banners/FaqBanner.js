import React, { useState, useEffect } from "react";
import SecondaryButton from "../buttons/SecondaryButton";

function FaqBanner({ courseData }) {
  // ! State for responsive mode
  //   const [responsiveMode, setResponsiveMode] = useState(false);
  //   // ! initial render state
  //   const [initialRender, setInitialRender] = useState(true);
  //   useEffect(() => {
  //     setInitialRender(false);
  //   }, []);
  //   useEffect(() => {
  //     if (window.innerWidth < 992) {
  //       setResponsiveMode(true);
  //     }
  //   }, [initialRender]);

  return (
    <div className="all-courses-banner-filter__wrapper">
      <div className="all-courses-banner-filter">
        <h1 className="all-courses-banner-filter__header">FAQ’s</h1>
        <div className="all-courses-banner-filter__search">
          <label htmlFor="searchbar">
            <input
              type="text"
              name="searchbar"
              id=""
              placeholder="Search keywords"
            />
          </label>

          <SecondaryButton buttonText="Search" version="version-3" />
        </div>
      </div>
    </div>
  );
}

export default FaqBanner;
