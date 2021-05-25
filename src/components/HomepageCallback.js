import React, { useState, useEffect, useRef } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import artwork from "../assets/puppyCallbackArtwork.svg";
function HomepageCallback() {
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
  // ! Phone number validation // Replace with a logic to support all countries
  const phoneNumberLengthValidation = (number) => {
    switch (countryCode) {
      case "+91":
        return 10;
      case "+1":
        return 10;
      case "+971":
        return 7;
      default:
        break;
    }
  };

  useEffect(() => {
    setInitialRender(false);
  }, []);
  // ! useeffect for phone number onchange
  useEffect(() => {
    if (!initialRender) {
      if (phoneNumber.length !== phoneNumberLengthValidation(phoneNumber)) {
        setTooltipClass("phone-validation-tooltip visible");
      } else {
        setTooltipClass("phone-validation-tooltip");
      }
    }
  }, [phoneNumber]);
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
            Request a callback or book a free trial.
          </p>
          <PrimaryButton
            buttonText="Book a free trial"
            version="version-2"
            linkTo="https://book-staging.sparkstudio.co/"
          />
        </div>
        <div className="homepage-callback__right">
          <input
            type="text"
            className="homepage-callback__right--name"
            placeholder="Your Name"
            autocomplete="on"
            value={fullName}
            onChange={(ev) => {
              if (textRegex.test(ev.target.value)) setFullName(ev.target.value);
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
                autocomplete="on"
                value={phoneNumber}
                onChange={(ev) => {
                  if (numberRegex.test(ev.target.value))
                    setPhoneNumber(ev.target.value);
                }}
              />
              <div className={tooltipClass}>
                <span>
                  Please enter
                  <br />
                  {phoneNumberLengthValidation(countryCode) || 10} digits
                </span>
              </div>
            </label>
          </div>
          <PrimaryButton buttonText="Request callback" version="version-1" />
        </div>
      </div>
    </div>
  );
}

export default HomepageCallback;
