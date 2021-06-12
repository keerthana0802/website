import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import detect from "detect.js";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  sendOtp,
  openLogin,
  loginWithOtp,
  tempPhoneNumber,
} from "../../store/actions/rootActions";
function DetailsForm({ switchRoute, tabsStatus }) {
  const history = useHistory();
  const verified = useSelector((state) => state.auth.verified);
  const dispatch = useDispatch();
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  // ! States for input fields
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  // ! Ref for whatsapp opt in checkbox
  // const whatsappOptInRef = useRef(null);
  // ! Ref for storing the userAgentDevice
  const userAgentDeviceRef = useRef(null);
  // ! useEffect to populate the states with data from local storage
  useEffect(() => {
    if (window.localStorage.detailsForm) {
      let data = JSON.parse(window.localStorage.detailsForm);
      setFullName(data.fullName);
      setCountryCode(data.countryCode);
      setPhoneNumber(data.phoneNumber);
      setEmail(data.email);
      setChildName(data.childName);
      setChildAge(data.childAge);
      tabsStatus("/book-a-trial");
    }
    // whatsappOptInRef.current.checked = true;
    window.scrollTo(0, 0);
    setInitialRender(false);
    userAgentDeviceRef.current = detect.parse(navigator.userAgent).device.type;
  }, []);
  // console.log(userAgentDeviceRef.current === "Desktop" ? "webd" : "webm");
  // ! REGEX
  let numberRegex = new RegExp(/^[0-9]*$/);
  let countryCodeRegex = new RegExp(/^\+[0-9]*$/);
  let textRegex = new RegExp(/^[A-Za-z -]*$/);
  // ! Setting localstorage with details
  const setLocalStorage = () => {
    let detailsFormData = {
      fullName,
      countryCode,
      phoneNumber,
      email,
      childName,
      childAge,
      status: true,
    };
    window.localStorage.setItem("detailsForm", JSON.stringify(detailsFormData));
  };
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
      default:
        return false;
    }
  };

  // ! useeffect for phone number onchange
  useEffect(() => {
    if (!initialRender) {
      if (phoneNumber[0] === "0") {
        console.log("from effect");
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
  const updateApi = () => {
    axios
      .post(process.env.REACT_APP_API_URL, {
        booking: {
          name: fullName,
          phone_no: `${countryCode}-${phoneNumber}`,
          email: email,
          child_name: childName,
          child_age: childAge,
          whatsapp_opt_in: true,
          registration_source:
            userAgentDeviceRef.current === "Desktop" ? "webd" : "webm",
        },
      })

      .then(function (response) {
        console.log("from resp", response);
        window.localStorage.setItem("uuid", response.data.uuid);
        tabsStatus("/book-a-trial");
        switchRoute("/book-a-trial/courses-selection");
        window.location.href = "/book-a-trial/courses-selection";
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  // ! To move to the courses page
  function handleSubmit() {
    setLocalStorage();
    if (verified) {
      updateApi();
    } else {
      dispatch(tempPhoneNumber({ countryCode, phoneNumber }));
      dispatch(openLogin());
    }
  }
  useEffect(() => {
    if (
      fullName &&
      countryCode &&
      phoneNumber &&
      phoneNumber.length === phoneNumberLengthValidation(phoneNumber) &&
      phoneNumber[0] !== "0" &&
      email &&
      childName &&
      childAge > 4 &&
      childAge < 16 &&
      verified
    ) {
      updateApi();
    }
  }, [verified]);
  return (
    <form action="" className="booking-form" autoComplete="on">
      <input
        type="text"
        placeholder="Your Name"
        value={fullName}
        onChange={(ev) => {
          if (textRegex.test(ev.target.value)) setFullName(ev.target.value);
        }}
        required
        autoComplete="on"
      />
      <div className="contact">
        <input
          type="text"
          placeholder="+91"
          value={countryCode}
          onChange={(ev) => {
            if (countryCodeRegex.test(ev.target.value))
              setCountryCode(ev.target.value);
          }}
          autoComplete="on"
        />
        <label htmlFor="" className="phone-label">
          <input
            type="text"
            placeholder="Phone / whatsapp"
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
            }}
            onFocus={() => setTooltipClass("phone-validation-tooltip")}
            onBlur={(ev) => {
              if (
                phoneNumber.length !== phoneNumberLengthValidation(phoneNumber)
              ) {
                setTooltipClass("phone-validation-tooltip visible");
                setTooltipText(
                  <p>
                    Please enter
                    <br />
                    {phoneNumberLengthValidation(countryCode) || 10} digits
                  </p>
                );
              } else if (phoneNumber[0] === "0") {
                console.log("from else");
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
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(ev) => {
          setEmail(ev.target.value);
        }}
        required
        autoComplete="on"
      />
      <input
        type="text"
        placeholder="Child's name"
        value={childName}
        onChange={(ev) => {
          if (textRegex.test(ev.target.value)) setChildName(ev.target.value);
        }}
        required
        autoComplete="on"
      />
      <input
        type="text"
        placeholder="Child's age (5 to 15 only)"
        value={childAge}
        onChange={(ev) => {
          if (numberRegex.test(ev.target.value)) setChildAge(ev.target.value);
        }}
        required
        autoComplete="on"
      />
      {fullName &&
      countryCode &&
      phoneNumber &&
      phoneNumber.length === phoneNumberLengthValidation(phoneNumber) &&
      phoneNumber[0] !== "0" &&
      email &&
      childName &&
      childAge > 4 &&
      childAge < 16 ? (
        <Link
          className="select-courses"
          onClick={handleSubmit}
          // to={verified ? "/book-a-trial/courses-selection" : "#"}
        >
          {verified ? "Select courses" : "Verify number"}
        </Link>
      ) : (
        <Link to="#" className="select-courses hidden">
          Select courses
        </Link>
      )}
    </form>
  );
}

export default DetailsForm;
