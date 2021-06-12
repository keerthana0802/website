import React, { useState, useEffect } from "react";
import checked from "../../../assets/checked.svg";
import unchecked from "../../../assets/unchecked.svg";

function SlotTimeCard({
  beginTime,
  endTime,
  disabledState,
  timeSelectionHandler,
  slotID,
  day,
  selectedTimes,
}) {
  const [checkedStatus, setCheckedStatus] = useState(false);
  const [classState, setClassState] = useState(
    disabledState ? "slots-time-card disabled" : "slots-time-card"
  );
  const updateHandler = () => {
    if (!disabledState) {
      setCheckedStatus(!checkedStatus);
      if (classState === "slots-time-card") {
        setClassState("slots-time-card checked");
        timeSelectionHandler(slotID);
      } else {
        setClassState("slots-time-card");
        timeSelectionHandler(slotID);
      }
    } else {
      if (checkedStatus) {
        setCheckedStatus(!checkedStatus);
        setClassState("slots-time-card");
        timeSelectionHandler(slotID);
      }
    }
  };
  useEffect(() => {
    if (!checkedStatus) {
      disabledState
        ? setClassState("slots-time-card disabled")
        : setClassState("slots-time-card");
    }
  }, [disabledState]);
  useEffect(() => {
    if (selectedTimes.indexOf(slotID) > -1) {
      setCheckedStatus(!checkedStatus);
      setClassState("slots-time-card checked");
    }
  }, []);

  return (
    <div className={classState} onClick={updateHandler}>
      <h1 className="time">
        <span className="time-begin">{beginTime}</span> -{" "}
        <span className="time-end">{endTime}</span>
      </h1>
      {checkedStatus ? (
        <img src={checked} alt="" />
      ) : (
        <img src={unchecked} alt="" />
      )}
      <div className="slot-time-tooltip">
        You can select maximum {window.localStorage.slotLimit} slots.
      </div>
    </div>
  );
}

export default SlotTimeCard;
