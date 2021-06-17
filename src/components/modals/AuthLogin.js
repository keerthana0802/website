import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import arrow from "../../assets/leftArrowOrange.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import logo from "../../assets/sparkLogo.png";
import cross from "../../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtp,
  loginWithOtp,
  saveAuthToken,
  openLogin,
  changeNumber,
  openSignup,
  setMeetingDetails,
} from "../../store/actions/rootActions";
function AuthSignUp() {
  // ! Redux
  const loginModalOpen = useSelector((state) => state.auth.loginModalOpen);
  const authOtpRequested = useSelector((state) => state.auth.authOtpRequested);
  const tempCountryCode = useSelector((state) => state.auth.tempCountryCode);
  const tempPhoneNumber = useSelector((state) => state.auth.tempPhoneNumber);
  const authOtpRequestBody = useSelector(
    (state) => state.auth.authOtpRequestBody
  );
  const dispatch = useDispatch();
  // ! Gsap
  const modalRef = useRef(null);
  const modalWrapperRef = useRef(null);
  const tweenRef = useRef(null);
  const opacityRef = useRef(null);
  // ! Resend otp timer
  const [ticker, setTicker] = useState(15);
  useEffect(() => {
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
  useEffect(() => {
    if (ticker === 15) {
      let count = 15;
      let resendTimeout = setInterval(() => {
        setTicker((ticker) => ticker - 1);
        count--;
        if (count < 1) clearInterval(resendTimeout);
      }, 1000);
    }
  }, [ticker]);
  // ! local states for the input fields
  const [countryCode, setCountryCode] = useState(tempCountryCode || "+91");
  const [phoneNumber, setPhoneNumber] = useState(tempPhoneNumber || "");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  // ! State to manage the phone validation tooltip
  const [tooltipClass, setTooltipClass] = useState("phone-validation-tooltip");
  const [tooltipText, setTooltipText] = useState(<></>);
  // ! Regex
  let numberRegex = new RegExp(/^[0-9]*$/);
  let countryCodeRegex = new RegExp(/^\+[0-9]*$/);
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
  // ! useeffect for phone number onchange
  useEffect(() => {
    if (phoneNumber[0] === "0") {
      setPhoneNumber((phoneNumber) => {
        let numberArray = phoneNumber.split("");
        numberArray.shift();
        return numberArray.join("");
      });
      setTooltipClass((tooltipClass) => "phone-validation-tooltip visible");
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
  }, [phoneNumber]);
  // ! checking OTP
  const checkOtpHandle = () => {
    let postBody = {};
    if (authOtpRequestBody.phone_no) {
      postBody = {
        phone_no: authOtpRequestBody.phone_no,
        otp: OTP,
      };
    } else if (authOtpRequestBody.email) {
      postBody = { email: authOtpRequestBody.email, otp: OTP };
    }
    axios
      .post(`${process.env.REACT_APP_AUTH_API}/login_by_otp`, postBody)
      .then((response) => {
        // if (response.status > 400) throw Error(response.json());
        console.log(response.status);
        console.log("from ax", response.data);
        const data = response.data;
        let authToken = data.token;
        let userDetails = {
          fullName: data.user.name,
          id: data.user.id,
          phoneNumber: data.user.phone_no,
          email: data.user.email,
        };

        let profiles = data.user.profiles;
        dispatch(saveAuthToken(authToken));
        dispatch(loginWithOtp({ userDetails, profiles }));
        setTimeout(() => {
          dispatch(openLogin());
        }, 600);
        opacityRef.current.reverse();
        tweenRef.current.reverse();
      })
      .catch((e) => {
        if (e.response.data.error.code === 42201) {
          alert(e.response.data.error.message);
        } else {
          console.log("here", e.response.data);
        }
      });
  };

  return (
    <div className="global-modal-wrapper" ref={modalWrapperRef}>
      <div className="auth-modal auth-login" ref={modalRef}>
        {authOtpRequested ? (
          <>
            <h1 className="auth-modal__header" style={{ paddingTop: "3rem" }}>
              {authOtpRequestBody.phone_no ? "Verify Number" : "Verify Email"}
            </h1>
            <input
              className="auth-modal__input"
              placeholder="Enter OTP"
              onChange={(ev) => setOTP(ev.target.value)}
            />
            <PrimaryButton
              version="version-1"
              buttonText="Verify OTP"
              clickHandle={checkOtpHandle}
            />
            <span className="auth-modal__resend-otp">
              Didn’t receive an OTP?{" "}
              <button
                className={
                  ticker === 0
                    ? "auth-modal__alternate-button"
                    : "auth-modal__alternate-button inactive"
                }
                onClick={() => {
                  if (countryCode === "+91") {
                    dispatch(
                      sendOtp({ phone_no: `${countryCode}-${phoneNumber}` })
                    );
                    setTicker(15);
                  } else {
                    dispatch(sendOtp({ email: email }));
                    setTicker(15);
                  }
                }}
              >
                Resend {ticker === 0 ? null : <span>{ticker}</span>}
              </button>
            </span>
            <button
              className="auth-modal__change-number auth-modal__alternate-button"
              onClick={() => dispatch(changeNumber())}
            >
              <img src={arrow} alt="" />{" "}
              {authOtpRequestBody.phone_no ? "Change Number" : "Change Email"}
            </button>
          </>
        ) : (
          <>
            <h1 className="auth-modal__header">Sign in to Spark Studio</h1>
            <form className="contact">
              <div className="phone-number">
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
                />
              </div>
              {countryCode !== "+91" ? (
                <input
                  type="text"
                  className="auth-modal__input"
                  placeholder="Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              ) : null}

              <div className={tooltipClass}>
                <span>
                  Please enter
                  <br />
                  {phoneNumberLengthValidation(countryCode) || 10} digits
                </span>
              </div>
            </form>
            <PrimaryButton
              buttonText="Send OTP"
              version="version-1"
              clickHandle={() => {
                if (countryCode === "+91") {
                  dispatch(
                    sendOtp({ phone_no: `${countryCode}-${phoneNumber}` })
                  );
                } else {
                  dispatch(sendOtp({ email: email }));
                }
              }}
            />
          </>
        )}
        <div className="auth-modal__separator">
          <span></span>
          <p>Don't have an account?</p>
          <button
            className="auth-modal__alternate-button"
            onClick={() => {
              setTimeout(() => {
                dispatch(openLogin());
                dispatch(openSignup());
              }, 600);
              opacityRef.current.reverse();
              tweenRef.current.reverse();
            }}
          >
            Sign up
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
              dispatch(openLogin());
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
