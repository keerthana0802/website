import React from "react";

function HomepageSectionHeader({ headerContent, linerContent }) {
  return (
    <div className="section-header">
      <h1 className="section-header__top">{headerContent}</h1>
      <p className="section-header__bottom">{linerContent}</p>
    </div>
  );
}

export default HomepageSectionHeader;
