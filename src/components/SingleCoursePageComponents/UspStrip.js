import React from "react";

function UspStrip({ sessions, background }) {
  return (
    <div className="usp-strip" style={{ backgroundColor: background }}>
      <h2 className="usp-strip__item">
        <span style={{ color: "#000072" }}>{sessions}</span> Sessions
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#FCB444" }}>1:4</span> Live-class ratio
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#FF6E54" }}>20</span> Activities
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#9048FF" }}>2</span> Certifications
      </h2>
    </div>
  );
}

export default UspStrip;
