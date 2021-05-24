import React, { useRef, useEffect } from "react";
import checked from "../assets/checked.svg";
import gsap from "gsap";
// ! local component
function SelectedSlots({ days, slotID, slot }) {
  let slotArray = slot.split(" ");
  slotArray.shift();
  const mapDays = (day) => {
    switch (day.toLowerCase()) {
      case "sun":
        return "Sunday";
      case "mon":
        return "Monday";
      case "tue":
        return "Tuesday";
      case "wed":
        return "Wednesday";
      case "thu":
        return "Thursday";
      case "fri":
        return "Friday";
      case "sat":
        return "Saturday";
      default:
        break;
    }
  };
  let day;
  if (slotID >= 1 && slotID <= 4) {
    day = `${mapDays(days[0][0])} (${days[0][1]} ${days[0][2]})`;
  } else if (slotID >= 5 && slotID <= 8) {
    day = `${mapDays(days[1][0])} (${days[1][1]} ${days[1][2]})`;
  } else if (slotID >= 9 && slotID <= 12) {
    day = `${mapDays(days[2][0])} (${days[2][1]} ${days[2][2]})`;
  } else if (slotID >= 13 && slotID <= 16) {
    day = `${mapDays(days[3][0])} (${days[3][1]} ${days[3][2]})`;
  }
  return (
    <p className="selected-slot">
      <img src={checked} alt="selected" />
      {day} : {slotArray.join(" ")}
    </p>
  );
}
function BookingModal({ slots, days, times, modalHandler, updateApi, custom }) {
  const modalRef = useRef(null);
  const modalWrapperRef = useRef(null);
  const tweenRef = useRef(null);
  const opacityRef = useRef(null);
  useEffect(() => {
    modalRef.current.style.display = "flex";
    modalWrapperRef.current.style.display = "flex";
    tweenRef.current = gsap.fromTo(
      modalRef.current,
      { y: `-${window.innerHeight}`, autoAlpha: 1 },
      {
        y: `-${window.innerHeight * 0.15}`,
        autoAlpha: 1,
        duration: 0.6,
        ease: "back",
      }
    );
    opacityRef.current = gsap.fromTo(
      modalWrapperRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.6 }
    );
  }, []);
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.toLowerCase().charAt(0).toUpperCase() + s.toLowerCase().slice(1);
  };
  return (
    <div className="modal__wrapper" ref={modalWrapperRef}>
      <div className="modal" ref={modalRef}>
        <div className="modal__top">
          <h1 className="modal__top--header">
            Hi{" "}
            {capitalize(
              JSON.parse(window.localStorage.detailsForm).fullName.split(" ")[0]
            )}
            ,
          </h1>
          <p className="modal__top--content">
            Our team will get in
            <br />
            touch with you.
          </p>
        </div>
        <div className="modal__bottom">
          <div className="modal__bottom--details">
            {" "}
            <h1 className="modal__bottom--name">
              Child's name:{" "}
              <span>
                {capitalize(
                  JSON.parse(window.localStorage.detailsForm).childName
                )}
              </span>
            </h1>
            <h1 className="modal__bottom--courses">Courses Selected :</h1>
            <ul className="modal__bottom--courses-list">
              {JSON.parse(window.localStorage.coursesForm).selectedCourses.map(
                (course, index) => {
                  return (
                    <li
                      key={index}
                      className="modal__bottom--courses-list-item"
                    >
                      {index + 1}. {course}
                    </li>
                  );
                }
              )}
            </ul>
            <h1 className="modal__bottom--slots">Preferred time slots :</h1>
            {times.length > 0 && !custom ? (
              times.map((slot, index) => {
                return (
                  <SelectedSlots
                    key={index}
                    days={days}
                    slotID={slot}
                    slot={slots[index]}
                  />
                );
              })
            ) : (
              <p className="custom-slot-liner">Requested custom slot</p>
            )}
          </div>
          <div className="modal-btn-group">
            <button
              className="modal-confirm"
              onClick={() => {
                custom || times.length === 0
                  ? updateApi("custom")
                  : updateApi("booking");
              }}
            >
              Confirm
            </button>
            <button
              className="modal-edit"
              onClick={() => {
                setTimeout(() => {
                  modalHandler();
                }, 600);
                opacityRef.current.reverse();
                tweenRef.current.reverse();
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
