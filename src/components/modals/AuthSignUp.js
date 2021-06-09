import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import PrimaryButton from "../buttons/PrimaryButton";
import logo from "../../assets/sparkLogo.png";
import cross from "../../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { openLogin, openSignup } from "../../store/actions/rootActions";
function AuthSignUp() {
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  // ! Redux
  const signupModalOpen = useSelector((state) => state.auth.signupModalOpen);
  const dispatch = useDispatch();
  // ! Gsap
  const modalRef = useRef(null);
  const modalWrapperRef = useRef(null);
  const tweenRef = useRef(null);
  const opacityRef = useRef(null);
  useEffect(() => {
    setInitialRender(false);
    modalRef.current.style.display = "flex";
    modalWrapperRef.current.style.display = "flex";
    tweenRef.current = gsap.fromTo(
      modalRef.current,
      { y: `-${window.innerHeight}`, autoAlpha: 1 },
      {
        y: `-${window.innerHeight * 0.1}`,
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

  // ! local states for the input fields
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // ! State to manage the phone validation tooltip
  const [tooltipClass, setTooltipClass] = useState("phone-validation-tooltip");
  const [tooltipText, setTooltipText] = useState(<></>);
  // ! Regex
  let numberRegex = new RegExp(/^[0-9]*$/);
  let countryCodeRegex = new RegExp(/^\+[0-9]*$/);
  let textRegex = new RegExp(/^[A-Za-z -]*$/);
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

  // ! useeffect for phone number onchange
  useEffect(() => {
    if (!initialRender) {
      if (phoneNumber[0] === "0") {
        setTooltipClass((tooltipClass) => "phone-validation-tooltip visible");
        setTooltipText((tooltipText) => {
          return (
            <>
              First digit
              <br />
              cannot be 0
            </>
          );
        });
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
  return (
    <div className="global-modal-wrapper" ref={modalWrapperRef}>
      <div className="auth-modal auth-sign-up" ref={modalRef}>
        <h1 className="auth-modal__header">Sign up to Spark Studio</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="auth-modal__input"
          value={fullName}
          onChange={(ev) => {
            if (textRegex.test(ev.target.value)) setFullName(ev.target.value);
          }}
        />
        <input
          placeholder="Email"
          className="auth-modal__input"
          type="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          required
          autoComplete="on"
        />
        <div className="contact">
          <input
            type="text"
            placeholder="+91"
            className="auth-modal__input"
            value={countryCode}
            onChange={(ev) => {
              if (countryCodeRegex.test(ev.target.value))
                setCountryCode(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="auth-modal__input"
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
                  //   handleSubmit();
                }
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
                setTooltipClass(
                  (tooltipClass) => "phone-validation-tooltip visible"
                );
                setTooltipText((tooltipText) => {
                  return (
                    <>
                      First digit
                      <br />
                      cannot be 0
                    </>
                  );
                });
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
        </div>

        <PrimaryButton buttonText="Sign Up" version="version-1" />
        <div className="auth-modal__separator">
          <span></span>
          <p>Already have an account?</p>
          <button
            className="auth-modal__alternate-button"
            onClick={() => {
              setTimeout(() => {
                dispatch(openSignup());
                dispatch(openLogin());
              }, 600);
              opacityRef.current.reverse();
              tweenRef.current.reverse();
            }}
          >
            Sign in
          </button>
          <span></span>
        </div>

        <img src={logo} alt="" className="auth-modal__logo" />
        <img
          src={cross}
          alt=""
          className="auth-modal__close"
          onClick={() => {
            setTimeout(() => {
              dispatch(openSignup());
            }, 600);
            opacityRef.current.reverse();
            tweenRef.current.reverse();
          }}
        />
      </div>
    </div>
  );
}

export default AuthSignUp;
