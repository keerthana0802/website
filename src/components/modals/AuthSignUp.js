import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import PrimaryButton from "../buttons/PrimaryButton";
import logo from "../../assets/sparkLogo.png";
import cross from "../../assets/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import arrow from "../../assets/leftArrowOrange.svg";
import {
  openLogin,
  openSignup,
  setTempFullName,
  setTempEmail,
  sendOtp,
  loginWithOtp,
  saveAuthToken,
  changeNumber,
} from "../../store/actions/rootActions";
function AuthSignUp() {
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  // ! Redux
  const signupModalOpen = useSelector((state) => state.auth.signupModalOpen);
  const authOtpRequested = useSelector((state) => state.auth.authOtpRequested);
  const authOtpRequestBody = useSelector(
    (state) => state.auth.authOtpRequestBody
  );
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
  const [OTP, setOTP] = useState("");
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
  const signUpHandle = () => {
    
    dispatch(setTempFullName(fullName));
    dispatch(setTempEmail(email));
    if (countryCode === "+91") {
      dispatch(sendOtp({ phone_no: `${countryCode}-${phoneNumber}` }));
    } else {
      dispatch(sendOtp({ email: email }));
    }
  }; // ! Resend otp timer
  const [ticker, setTicker] = useState(15);
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
          fullName: fullName,
          id: data.user.id,
          phoneNumber: data.user.phone_no,
          email: email,
        };

        let profiles = data.user.profiles;
        dispatch(saveAuthToken(authToken));
        dispatch(loginWithOtp({ userDetails, profiles }));
        setTimeout(() => {
          dispatch(openSignup());
        }, 600);
        opacityRef.current.reverse();
        tweenRef.current.reverse();
        return { authToken, userDetails };
      })
      .then(async ({ authToken, userDetails }) => {
        // const resp =
        await axios.patch(
          `https://lms-staging.sparkstudio.co/api/v1/users/${userDetails.id}`,
          {
            user: {
              full_name: fullName,
              email: email,
            },
          },
          { headers: { Authorization: authToken, "X-SSUID": userDetails.id } }
        );
        // console.log("after patch", resp);
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
      <div className="auth-modal auth-sign-up" ref={modalRef}>
        {authOtpRequested ? (
          <>
            <h1 className="auth-modal__header" style={{ paddingTop: "3rem" }}>
              {authOtpRequestBody.phone_no ? "Verify Number" : "Verify Email"}
            </h1>
            <input
              type="number"
              className="auth-modal__input"
              placeholder="Enter OTP"
              onChange={(ev) => setOTP(ev.target.value)}
              autoComplete="off"
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
            <h1 className="auth-modal__header">Sign up to Spark Studio</h1>
            <input
              type="text"
              placeholder="Full Name"
              className="auth-modal__input"
              value={fullName}
              onChange={(ev) => {
                if (textRegex.test(ev.target.value))
                  setFullName(ev.target.value);
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
                    phoneNumber.length !==
                    phoneNumberLengthValidation(phoneNumber)
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

            <PrimaryButton
              buttonText="Sign Up"
              version="version-1"
              clickHandle={signUpHandle}
            />
          </>
        )}

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
