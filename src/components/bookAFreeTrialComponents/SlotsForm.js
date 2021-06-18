import React, { useState, useEffect } from "react";
import SlotDayCard from "./cards/SlotDayCard";
import SlotTimeCard from "./cards/SlotTimeCard";
import moment from "moment";
import axios from "axios";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import moengageEvent from "../../helpers/MoengageEventTracking";
import { bookTrialSubmitAttributes } from "../../helpers/MoengageAttributeCreators";
function SlotsForm() {
  const authToken = useSelector((state) => state.auth.authToken);
  const history = useHistory();
  let today = new Date().getDay();
  // ! state to manage the available days
  const [availableDays, setAvailableDays] = useState([]);
  // ! Selection states
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [currentDay, setCurrentDay] = useState("");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [disableSlots, setDisableSlots] = useState(false);
  // ! Class to disable or enable request trial button
  const [requestTrialClass, setRequestTrialClass] = useState(
    "request-trial disabled"
  );
  // ! Function to generate arrays of day's details
  const generateDayArray = (addDays) => {
    return moment()
      .add(addDays, "day")
      ._d.toUTCString()
      .split(",")
      .join("")
      .split(" ");
  };
  const setNextDays = (today) => {
    // ! 0 to 6 [sunday to saturday]
    switch (today) {
      case 0:
        // ! sunday - next 3 days
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(3),
        ]);
        break;
      case 1:
        // ! monday - tues,wed,sat,sun
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(5),
          generateDayArray(6),
        ]);
        break;
      case 2: // ! tuesday - wed,thu,sat,sun
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(4),
          generateDayArray(5),
        ]);
        break;
      case 3: // ! wednesday - thu,fri,sat,sun
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(3),
          generateDayArray(4),
        ]);
        break;
      case 4: // ! thursday - next 3 days
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(3),
        ]);
        break;
      case 5: // ! next 3 days
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(3),
        ]);
        break;
      case 6: // ! next 3 days
        setAvailableDays([
          generateDayArray(1),
          generateDayArray(2),
          generateDayArray(3),
        ]);
        break;

      default:
        break;
    }
  };
  // ! useEffect to manipulate the available days
  useEffect(() => {
    setNextDays(today);
    window.scrollTo(0, 0);
  }, []);
  const daySelectionHandler = (day, index) => {
    if (selectedDays.indexOf(day) == -1) {
      setSelectedDays((selectedDays) => [...selectedDays, day]);
    } else {
      setSelectedDays((selectedDays) => {
        selectedDays.splice(selectedDays.indexOf(day), 1);
        return [...selectedDays];
      });
    }
  };
  // ! function to manage the current day to show slots for the day
  const currentDaySetter = (day, index) => {
    setCurrentDayIndex(index);
    setCurrentDay(day);
  };
  // ! selected Slots updating function

  const timeSelectionHandler = (slotID) => {
    let slot;
    switch ((slotID - 1) % 4) {
      case 0:
        slot = "10 AM - 01 PM";
        break;
      case 1:
        slot = "01 PM - 03 PM";
        break;
      case 2:
        slot = "03 PM - 05 PM";
        break;
      case 3:
        slot = "05 PM - 07 PM";
        break;
      default:
        break;
    }
    if (selectedTimes.indexOf(slotID) === -1) {
      setSelectedTimes((selectedTimes) => [...selectedTimes, slotID]);
    } else {
      setSelectedTimes((selectedTimes) => {
        selectedTimes.splice(selectedTimes.indexOf(slotID), 1);
        return [...selectedTimes];
      });
    }
    if (selectedSlots.indexOf(`${currentDay} ${slot}`) === -1) {
      setSelectedSlots((selectedSlots) => [
        ...selectedSlots,
        `${currentDay} ${slot}`,
      ]);
    } else {
      setSelectedSlots((selectedSlots) => {
        selectedSlots.splice(selectedSlots.indexOf(`${currentDay} ${slot}`), 1);
        return [...selectedSlots];
      });
    }
  };
  useEffect(() => {
    if (selectedSlots.length >= Number(window.localStorage.slotLimit)) {
      setDisableSlots(true);
    } else {
      setDisableSlots(false);
    }
    if (
      selectedSlots.length <
      JSON.parse(window.localStorage.coursesForm).selectedCourses.length
    ) {
      setRequestTrialClass("request-trial disabled");
    } else {
      setRequestTrialClass("request-trial");
    }
  }, [selectedSlots]);
  function updateApi(type) {
    switch (type) {
      case "booking":
        axios
          .patch(
            `${process.env.REACT_APP_API_URL}${window.localStorage.uuid}`,
            {
              booking: {
                courses: JSON.parse(window.localStorage.coursesForm)
                  .selectedCourses,
                slots: selectedSlots,
                is_booked: true,
                is_custom_request: false,
              },
            },
            { headers: { Authorization: authToken } }
          )
          .then(() => {
            window.localStorage.clear();
          })
          .then(function (response) {
            history.push("https://sparkstudio.co/booked/");
          })
          .catch(function (error) {});
        break;
      case "custom":
        axios
          .patch(
            `${process.env.REACT_APP_API_URL}${window.localStorage.uuid}`,
            {
              booking: {
                courses: JSON.parse(window.localStorage.coursesForm)
                  .selectedCourses,
                slots: selectedSlots,
                is_booked: true,
                is_custom_request: true,
              },
            }
          )
          .then(() => window.localStorage.clear())
          .then(function (response) {
            history.push("https://sparkstudio.co/requested/");
          })
          .catch(function (error) {});
        break;
      default:
        break;
    }
  }
  // ! Modal state
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  // ! modal trigger from custom link
  const [customSlotModal, setCustomSlotModal] = useState(false);
  return (
    <div className="slots-form">
      {showModal ? (
        <Modal
          slots={selectedSlots}
          days={availableDays}
          times={selectedTimes}
          updateApi={updateApi}
          modalHandler={modalHandler}
          custom={customSlotModal}
        />
      ) : null}

      <div className="slots__days">
        {availableDays.length &&
          availableDays.map((day, index) => (
            <SlotDayCard
              day={day}
              key={index}
              index={index}
              daySelectionHandler={daySelectionHandler}
              currentDay={currentDaySetter}
            />
          ))}
      </div>
      <div className="slots__times">
        {currentDayIndex === 0 ? (
          <>
            <SlotTimeCard
              day={0}
              beginTime="10 AM"
              endTime="1 PM"
              slotID={1}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={0}
              beginTime="1 PM"
              endTime="3 PM"
              slotID={2}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={0}
              beginTime="3 PM"
              endTime="5 PM"
              slotID={3}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={0}
              beginTime="5 PM"
              endTime="7 PM"
              slotID={4}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
          </>
        ) : null}
        {currentDayIndex === 1 ? (
          <>
            <SlotTimeCard
              day={1}
              beginTime="10 AM"
              endTime="1 PM"
              slotID={5}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={1}
              beginTime="1 PM"
              endTime="3 PM"
              slotID={6}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={1}
              beginTime="3 PM"
              endTime="5 PM"
              slotID={7}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={1}
              beginTime="5 PM"
              endTime="7 PM"
              slotID={8}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
          </>
        ) : null}
        {currentDayIndex === 2 ? (
          <>
            <SlotTimeCard
              day={2}
              beginTime="10 AM"
              endTime="1 PM"
              slotID={9}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={2}
              beginTime="1 PM"
              endTime="3 PM"
              slotID={10}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={2}
              beginTime="3 PM"
              endTime="5 PM"
              slotID={11}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={2}
              beginTime="5 PM"
              endTime="7 PM"
              slotID={12}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
          </>
        ) : null}
        {currentDayIndex === 3 ? (
          <>
            <SlotTimeCard
              day={3}
              beginTime="10 AM"
              endTime="1 PM"
              slotID={13}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={3}
              beginTime="1 PM"
              endTime="3 PM"
              slotID={14}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={3}
              beginTime="3 PM"
              endTime="5 PM"
              slotID={15}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
            <SlotTimeCard
              day={3}
              beginTime="5 PM"
              endTime="7 PM"
              slotID={16}
              disabledState={disableSlots}
              timeSelectionHandler={timeSelectionHandler}
              selectedTimes={selectedTimes}
            />
          </>
        ) : null}
      </div>
      <div className="slots__buttons">
        <button
          className={requestTrialClass}
          onClick={() => {
            if (requestTrialClass === "request-trial") {
              setCustomSlotModal(false);
              setShowModal(true);
              moengageEvent(
                "Book_Trial_Submit",
                bookTrialSubmitAttributes(3, "Slots", "Yes", 0)
              );
            }
          }}
        >
          Request Trial
          {requestTrialClass === "request-trial disabled" ? (
            <div className="disabled-tooltip">
              Select{" "}
              {JSON.parse(window.localStorage.coursesForm).selectedCourses
                .length - selectedSlots.length}{" "}
              more slots to book, or{" "}
              <span
                onClick={() => {
                  setCustomSlotModal(true);
                  setShowModal(true);
                }}
              >
                request a custom slot!
              </span>
            </div>
          ) : null}
        </button>
        <button
          className="custom-slot-request"
          onClick={() => {
            setCustomSlotModal(true);
            setShowModal(true);
          }}
        >
          Need a custom slot?
        </button>
      </div>
    </div>
  );
}

export default SlotsForm;
