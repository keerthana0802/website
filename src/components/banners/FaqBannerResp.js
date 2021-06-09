import React, { useState, useEffect } from "react";
import SecondaryButton from "../buttons/SecondaryButton";

function FaqBannerResp({ courseData }) {
  // ! Filter application
  //   const [filterRange, setFilterRange] = useState([5, 15]);
  //   const [currentCategory, setCurrentCategory] = useState("All Categories");
  //   const shouldRenderCard = (min, max, category) => {
  //     for (let i = filterRange[0]; i <= filterRange[1]; i++) {
  //       if (currentCategory === "All Categories") {
  //         if (i >= min && i <= max) return true;
  //       } else {
  //         if (i >= min && i <= max && category === currentCategory) return true;
  //       }
  //     }
  //     return false;
  //   };
  //   const pagination = {
  //     clickable: true,
  //   };

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

export default FaqBannerResp;
