import React from "react";

function UspStrip({ sessions, background, activities }) {
  return (
    <div className="usp-strip" style={{ backgroundColor: background }}>
      <h2 className="usp-strip__item">
        <span style={{ color: "#000072" }}>{sessions}</span> Classes
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#FCB444" }}>1:4</span> Live-class ratio
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#FF6E54" }}>{activities}</span> Activities
      </h2>
      <h2 className="usp-strip__item">
        <span style={{ color: "#9048FF" }}>1</span> Certification
      </h2>
    </div>
  );
}

export default UspStrip;
