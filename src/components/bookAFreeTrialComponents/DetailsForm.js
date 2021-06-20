import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import detect from "detect.js";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  openLogin,
  sendOtp,
  setTempPhoneNumber,
} from "../../store/actions/rootActions";
import moengageEvent from "../../helpers/MoengageEventTracking";
import {
  bookTrialViewAttributes,
  bookTrialFieldFilledAttributes,
  bookTrialSubmitAttributes,
  bookTrialSuccessAttributes,
} from "../../helpers/MoengageAttributeCreators";
import SecondaryButton from "../buttons/SecondaryButton";
function DetailsForm({ switchRoute, tabsStatus }) {
  // ! Redux
  const authToken = useSelector((state) => state.auth.authToken);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();
  const history = useHistory();
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
    moengageEvent("Book_Trial_View", bookTrialViewAttributes());
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
      case "+974":
        return 7;
      case "+966":
        return 9;
      default:
        return number.length;
    }
  };
  // ! Email verification logic
  const [verificationTooltipClassEmail, setVerificationTooltipClassEmail] =
    useState("verification-tooltip not-verified");
  const [verificationTooltipTextEmail, setVerificationTooltipTextEmail] =
    useState("not verified");
  const verificationHandlerEmail = (email) => {
    if (verificationTooltipClassEmail === "verification-tooltip not-verified") {
      dispatch(
        sendOtp({
          email: email,
          parent_name: fullName,
          child_name: childName,
        })
      );
      dispatch(openLogin());
    }
  };

  // ! Number verification logic
  const [verificationTooltipClass, setVerificationTooltipClass] = useState(
    "verification-tooltip not-verified"
  );
  const [verificationTooltipText, setVerificationTooltipText] =
    useState("not verified");
  const verificationHandlerPhone = (countryCode, phoneNumber) => {
    if (verificationTooltipClass === "verification-tooltip not-verified") {
      dispatch(setTempPhoneNumber({ countryCode, phoneNumber }));
      dispatch(
        sendOtp({
          phone_no: `${countryCode}-${phoneNumber}`,
          parent_name: fullName,
          child_name: childName,
        })
      );
      dispatch(openLogin());
    }
  };
  // ! useeffect for phone number onchange
  useEffect(() => {
    if (
      countryCode === "+91" &&
      userDetails.phoneNumber === `${countryCode}-${phoneNumber}`
    ) {
      setVerificationTooltipClass("verification-tooltip verified");
      setVerificationTooltipText("verified");
    } else {
      setVerificationTooltipClass("verification-tooltip not-verified");
      setVerificationTooltipText("click to verify");
    }
    // if (countryCode !== "+91") {
    //   setVerificationTooltipClass("verification-tooltip verified");
    //   setVerificationTooltipText("verified");
    // }
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
  }, [phoneNumber, userDetails, countryCode]);
  // ! Useeffect for email changes
  useEffect(() => {
    if (userDetails?.email?.toLowerCase() === email.toLowerCase()) {
      setVerificationTooltipClassEmail("verification-tooltip verified");
      setVerificationTooltipTextEmail("verified");
    } else {
      setVerificationTooltipClassEmail("verification-tooltip not-verified");
      setVerificationTooltipTextEmail("click to verify");
    }
  }, [email, userDetails]);
  // ! To move to the courses page
  function handleSubmit() {
    setLocalStorage();
    moengageEvent(
      "Book_Trial_Submit",
      bookTrialSubmitAttributes(1, "Details", "Yes", 2)
    );
    axios
      .post(
        process.env.REACT_APP_API_URL,
        {
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
        },
        { headers: { Authorization: authToken } }
      )

      .then(function (response) {
        window.localStorage.setItem("uuid", response.data.uuid);
        tabsStatus("/book-a-trial");
        switchRoute("/book-a-trial/courses-selection");
        moengageEvent(
          "Book_Trial_Success",
          bookTrialSuccessAttributes(1, "Details", "Yes", 2, 3)
        );
        window.location.href = "/book-a-trial/courses-selection";
      })
      .catch(function (error) {
        moengageEvent(
          "Book_Trial_Success",
          bookTrialSuccessAttributes(1, "Details", "Yes", 2, 0)
        );
      });
  }
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    if (
      verificationTooltipClass === "verification-tooltip verified" ||
      verificationTooltipClassEmail === "verification-tooltip verified"
    ) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, [verificationTooltipClass, verificationTooltipClassEmail]);
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
        onBlur={() =>
          moengageEvent(
            "Book_Trial_Field_Filled",
            bookTrialFieldFilledAttributes(1, "Parent Name", fullName)
          )
        }
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
          onBlur={() =>
            moengageEvent(
              "Book_Trial_Field_Filled",
              bookTrialFieldFilledAttributes(4, "Parent ISD Code", countryCode)
            )
          }
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
                moengageEvent(
                  "Book_Trial_Field_Filled",
                  bookTrialFieldFilledAttributes(
                    3,
                    "Parent Phone Number",
                    phoneNumber
                  )
                );
              }
            }}
            required
            autoComplete="on"
          />
          <div className={tooltipClass}>
            <span>{tooltipText}</span>
          </div>
          {/* {countryCode === "+91" ? (
            <div
              className={verificationTooltipClass}
              onClick={() => verificationHandlerPhone(countryCode, phoneNumber)}
            >
              <span>{verificationTooltipText}</span>
            </div>
          ) : null} */}
        </label>
      </div>
      <label htmlFor="email" className="email-label">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          required
          autoComplete="on"
          onBlur={() =>
            moengageEvent(
              "Book_Trial_Field_Filled",
              bookTrialFieldFilledAttributes(2, "Parent Email ID", email)
            )
          }
        />
        {/* {countryCode !== "+91" ? (
          <div
            className={verificationTooltipClassEmail}
            onClick={() => verificationHandlerEmail(email)}
          >
            <span>{verificationTooltipTextEmail}</span>
          </div>
        ) : null} */}
      </label>

      <input
        type="text"
        placeholder="Child's name"
        value={childName}
        onChange={(ev) => {
          if (textRegex.test(ev.target.value)) setChildName(ev.target.value);
        }}
        required
        autoComplete="on"
        onBlur={() =>
          moengageEvent(
            "Book_Trial_Field_Filled",
            bookTrialFieldFilledAttributes(5, "Child Name", childName)
          )
        }
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
        onBlur={() =>
          moengageEvent(
            "Book_Trial_Field_Filled",
            bookTrialFieldFilledAttributes(6, "Child Age", childAge)
          )
        }
      />
      {fullName &&
      countryCode &&
      phoneNumber &&
      phoneNumber.length === phoneNumberLengthValidation(phoneNumber) &&
      phoneNumber[0] !== "0" &&
      email &&
      childName &&
      childAge > 4 &&
      childAge < 16 &&
      verified ? (
        <Link className="select-courses" onClick={handleSubmit}>
          Select courses
        </Link>
      ) : null}
      {fullName &&
      countryCode &&
      phoneNumber &&
      phoneNumber.length === phoneNumberLengthValidation(phoneNumber) &&
      phoneNumber[0] !== "0" &&
      email &&
      childName &&
      childAge > 4 &&
      childAge < 16 &&
      !verified ? (
        <SecondaryButton
          version="version-5"
          buttonText={countryCode === "+91" ? "Verify Number" : "Verify Email"}
          clickHandle={
            countryCode === "+91"
              ? () => verificationHandlerPhone(countryCode, phoneNumber)
              : () => verificationHandlerEmail(email)
          }
        />
      ) : null}
    </form>
  );
}

export default DetailsForm;
