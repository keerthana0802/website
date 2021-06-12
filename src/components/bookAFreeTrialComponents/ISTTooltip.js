import React from "react";
import info from "../../assets/info.svg";
function ISTTooltip() {
  return (
    <div className="ist-tooltip">
      <img src={info} alt="" />

      <div className="ist-tooltip__content">
        Time slots are shown in <br />
        Indian Standard Time (IST)
      </div>
    </div>
  );
}

export default ISTTooltip;
