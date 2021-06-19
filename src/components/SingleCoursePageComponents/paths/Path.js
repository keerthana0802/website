import React, { useRef, useEffect } from "react";
import path7 from "../../../assets/path7.svg";
import path10 from "../../../assets/path10.svg";
import path12 from "../../../assets/path12.svg";
import path14 from "../../../assets/path14.svg";
function Path({ courseThemeColorDark, steps, sessions }) {
  const pathRef = useRef();
  const tooltipPositionClass = (num) => {
    if (num == 1 || num == 6 || num == 7 || num == 12 || num == 13) {
      return "session-tooltip left";
    } else if (num == 3 || num == 4 || num == 9 || num == 10) {
      return "session-tooltip right";
    } else {
      return "session-tooltip";
    }
  };
  const changeFunction = (ev) => {
    if (ev.target.checked) {
      ev.target.parentElement.className = "active";
      ev.target.nextSibling.className = `${tooltipPositionClass(
        ev.target.value
      )} active`;
    }
  };
  const blurFunction = (ev) => {
    if (ev.target.checked) {
      ev.target.parentElement.className = "";
      ev.target.nextSibling.className = `${tooltipPositionClass(
        ev.target.value
      )}`;
    }
  };
  const imageRenderer = (steps) => {
    switch (steps) {
      case 7:
        return path7;
      case 10:
        return path10;
      case 12:
        return path12;
      case 14:
        return path14;
      default:
        return path14;
    }
  };
  const sessionsRenderer = (steps) => {
    let arrayOfElements = [];

    for (let i = 0; i < steps; i++) {
      arrayOfElements.push(
        <label htmlFor="session">
          <input
            type="radio"
            name="session"
            value={i + 1}
            onChange={changeFunction}
            onBlur={blurFunction}
          />
          <div className={`${tooltipPositionClass(i + 1)}`}>
            <span>{sessions[i].title}</span>
            <p>{sessions[i].details}</p>
          </div>
          <span>{i + 1}</span>
          <h3 className="session-title">{sessions[i].title}</h3>
        </label>
      );
    }
    return arrayOfElements;
  };
  useEffect(() => {
    pathRef.current.children[1].className = "active";
  }, []);
  return (
    <div
      className="curriculum-path__wrapper"
      style={{
        background: `linear-gradient(111.29deg,${courseThemeColorDark}88 -1.83%,rgba(255, 255, 255, 0) 109.95%)`,
      }}
    >
      <h1 className="curriculum-path__wrapper--header">Learning journey</h1>
      <div
        className={`curriculum-path curriculum-path__${steps}`}
        ref={pathRef}
      >
        <img src={imageRenderer(steps)} alt="" />
        {sessionsRenderer(steps)}
      </div>
    </div>
  );
}

export default Path;
