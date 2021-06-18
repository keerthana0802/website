import React, { useState, useEffect, useRef } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import artwork from "../../assets/puppyCallbackArtwork.svg";
import axios from "axios";
import moengageEvent from "../../helpers/MoengageEventTracking";
import { requestCallbackAttributes } from "../../helpers/MoengageAttributeCreators";
import ConfirmationModal from "../modals/ConfirmationModal";
function HomepageCallback() {
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);

  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  // ! States for the input fields
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  // ! REGEX
  let numberRegex = new RegExp(/^[0-9]*$/);
  let countryCodeRegex = new RegExp(/^\+[0-9]*$/);
  let textRegex = new RegExp(/^[A-Za-z -]*$/);
  // ! State to manage the phone validation tooltip
  const [tooltipClass, setTooltipClass] = useState("phone-validation-tooltip");
  const [tooltipText, setTooltipText] = useState(<></>);
  // ! Phone number validation // Replace with a logic to support all countries
  const phoneNumberLengthValidation = (number) => {
    switch (countryCode) {
      case "+91":
        return 10;
      case "+1":
        return 10;
      case "+971":
        return 7;
      case "+974":
        return 7;
      case "+966":
        return 9;
      default:
        return number.length;
    }
  };

  useEffect(() => {
    setInitialRender(false);
  }, []);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 769) {
      setResponsiveMode(true);
    }
  }, [initialRender]);
  // ! useeffect for phone number onchange
  useEffect(() => {
    if (!initialRender) {
      if (phoneNumber[0] === "0") {
        setTooltipClass("phone-validation-tooltip visible");
        setTooltipText(
          <>
            First digit
            <br />
            cannot be 0
          </>
        );
      }
      if (phoneNumber.length > phoneNumberLengthValidation(phoneNumber)) {
        setPhoneNumber((phoneNumber) => {
          phoneNumber = phoneNumber.split("");
          phoneNumber.pop();
          return phoneNumber.join("");
        });
      }
    }
  }, [phoneNumber]);
  // ! state for modal
  const [showModal, setShowModal] = useState(false);
  // ! function to close modal
  const modalClose = () => {
    setShowModal(false);
    setTooltipClass("phone-validation-tooltip");
  };
  // ! handle form submit
  const handleSubmit = () => {
    if (
      fullName &&
      countryCode &&
      phoneNumber.length === phoneNumberLengthValidation(phoneNumber)
    ) {
      axios
        .post(process.env.REACT_APP_CALLBACK_REQUEST_API, {
          callback_request: {
            phone_no: `${countryCode}-${phoneNumber}`,
            name: fullName,
          },
        })
        .then((res) => console.log(res))
        .then(() => {
          moengageEvent(
            "Request_Callback",
            requestCallbackAttributes(
              1,
              1,
              window.location.pathname,
              countryCode
            )
          );
          setShowModal(true);
        })
        .then(() => {
          setFullName("");
          setPhoneNumber("");
          setTooltipClass("phone-validation-tooltip");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="homepage-callback__wrapper">
      <div className="homepage-callback__artwork">
        <img src={artwork} alt="presentational" />
      </div>
      <div className="homepage-callback">
        <div className="homepage-callback__left">
          <h1 className="homepage-callback__left--header">
            Tap that <span>spark</span> in your child
          </h1>
          <p className="homepage-callback__left--liner">
            {responsiveMode
              ? "Connect on whatsapp for all your queries"
              : "Request a callback or book a free trial"}
          </p>
          <PrimaryButton
            buttonText="Book a FREE trial"
            version="version-2"
            linkTo="/book-a-trial"
          />
        </div>
        {responsiveMode ? (
          <div className="homepage-callback__right">
            <a
              className="contact__whatsapp"
              href="https://bit.ly/whatsappsparkst"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="whatsapp-icon"
              >
                <path
                  d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1
	c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5
	c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3
	c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7
	c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14
	 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9
	C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3
	C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9"
                />
              </svg>
              Connect with us
            </a>
          </div>
        ) : (
          <div className="homepage-callback__right">
            <input
              type="text"
              className="homepage-callback__right--name"
              placeholder="Your Name"
              autoComplete="on"
              value={fullName}
              onChange={(ev) => {
                if (textRegex.test(ev.target.value))
                  setFullName(ev.target.value);
              }}
            />
            <div className="homepage-callback__right--contact">
              <input
                type="text"
                className="homepage-callback__right--contact-country-code"
                placeholder="+91"
                value={countryCode}
                onChange={(ev) => {
                  if (countryCodeRegex.test(ev.target.value))
                    setCountryCode(ev.target.value);
                }}
              />
              <label htmlFor="">
                <input
                  type="text"
                  className="homepage-callback__right--contact-number"
                  placeholder="Phone number"
                  autoComplete="on"
                  value={phoneNumber}
                  onChange={(ev) => {
                    if (numberRegex.test(ev.target.value)) {
                      if (ev.target.value === "0" && phoneNumber.length === 0) {
                        setPhoneNumber((phoneNumber) => {
                          let numberArray = phoneNumber.split("");
                          numberArray.shift();
                          return numberArray.join("");
                        });
                      } else {
                        setPhoneNumber(ev.target.value);
                      }
                    }
                  }}
                  onKeyPress={(ev) => {
                    if (ev.code === "Backspace") {
                      console.log("here");
                      setPhoneNumber(ev.target.value);
                    }
                    if (ev.code === "Enter") {
                      if (
                        phoneNumber.length ===
                        phoneNumberLengthValidation(phoneNumber)
                      ) {
                        handleSubmit();
                      }
                    }
                  }}
                  onFocus={() => setTooltipClass("phone-validation-tooltip")}
                  onBlur={(ev) => {
                    if (
                      phoneNumber.length !==
                      phoneNumberLengthValidation(phoneNumber)
                    ) {
                      setTooltipClass("phone-validation-tooltip visible");
                      setTooltipText(
                        <p>
                          Please enter
                          <br />
                          {phoneNumberLengthValidation(countryCode) || 10}{" "}
                          digits
                        </p>
                      );
                    } else if (phoneNumber[0] === "0") {
                      setTooltipClass("phone-validation-tooltip visible");
                      setTooltipText(
                        <>
                          First digit
                          <br />
                          cannot be 0
                        </>
                      );
                    } else {
                      setTooltipClass("phone-validation-tooltip");
                    }
                  }}
                  required
                  autoComplete="on"
                />
                <div className={tooltipClass}>
                  <span>{tooltipText}</span>
                </div>
              </label>
            </div>
            <PrimaryButton
              buttonText="Request a callback"
              version="version-1"
              clickHandle={handleSubmit}
            />
          </div>
        )}
      </div>
      {showModal ? (
        <ConfirmationModal
          modalCloseFunction={modalClose}
          modalText="We will call you back!"
        />
      ) : null}
    </div>
  );
}

export default HomepageCallback;
