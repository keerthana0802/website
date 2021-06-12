import React, { useState, useRef, useEffect } from "react";

function SlotDayCard({ day, daySelectionHandler, index, currentDay }) {
  // ! Ref for radio button
  const radioRef = useRef(null);
  // ! Map the shorthand days to full days
  const mapDays = (day) => {
    switch (day.toLowerCase()) {
      case "sun":
        return "Sun.";
      case "mon":
        return "Mon.";
      case "tue":
        return "Tue.";
      case "wed":
        return "Wed.";
      case "thu":
        return "Thu.";
      case "fri":
        return "Fri.";
      case "sat":
        return "Sat.";
      default:
        break;
    }
  };
  const mapMonths = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const [checkedStatus, setCheckedStatus] = useState(false);
  const [classState, setClassState] = useState("slots-day-card");
  const updateHandler = () => {
    setCheckedStatus(!checkedStatus);
    if (classState === "slots-day-card" && radioRef.current.checked) {
      setClassState("slots-day-card checked");
      daySelectionHandler(day, index);
      currentDay(`${day[3]}-${mapMonths[day[2]]}-${day[1]}`, index);
    } else {
      setClassState("slots-day-card");
      daySelectionHandler(day, index);
    }
  };
  // if (radioRef.current) {
  //   console.log("from ", index, " checked ==> ", radioRef.current.checked);
  // }
  // ! Effect to change the current checked day
  useEffect(() => {
    // ! to uncheck the other days
    if (radioRef?.current?.checked === false) {
      setClassState("slots-day-card");
    }
  });
  useEffect(() => {
    if (index === 0) {
      radioRef.current.checked = true;
      setClassState("slots-day-card checked");
      daySelectionHandler(day, index);
      currentDay(`${day[3]}-${mapMonths[day[2]]}-${day[1]}`, index);
    }
  }, []);
  return (
    <div className={classState} onClick={updateHandler}>
      <h1 className="day">{mapDays(day[0])}</h1>
      <input
        type="radio"
        name="day-selection"
        id=""
        className="radio"
        ref={radioRef}
      />

      <div>
        <span className="date">{day[1]}, </span>
        <span className="month">{day[2]}</span>
      </div>
    </div>
  );
}

export default SlotDayCard;
