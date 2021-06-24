import React, { useState, useEffect, useRef } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../assets/buttonArrow.svg";
import {
  setPromoCode,
  setAddress,
  openLogin,
  setTempEmail,
} from "../../store/actions/rootActions";
function AddressForm({ openPayment }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.checkout.cart);
  const coursesData = useSelector((state) => state.courses.allCourses);
  const currency = useSelector((state) => state.courses.currency);
  const promoCode = useSelector((state) => state.checkout.promoCode);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const authToken = useSelector((state) => state.auth.authToken);
  // ! States for input elements
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  // ! Regex
  let numberRegex = new RegExp(/^[0-9]*$/);
  let countryCodeRegex = new RegExp(/^\+[0-9]*$/);
  let textRegex = new RegExp(/^[A-Za-z -]*$/);
  const totalAmount = () => {
    let amount = cart.reduce((a, course) => {
      let found = coursesData.find((item) => item.courseId === course.courseId);
      if (currency === "INR") {
        return a + found.priceInr * course.qty;
      } else {
        return a + found.priceUsd * course.qty;
      }
    }, 0);
    return `${currency || ""} ${amount}`;
  };
  const termsRef = useRef(null);
  useEffect(() => {
    termsRef.current.checked = true;
  }, []);
  const [buttonClass, setButtonClass] = useState("pay-button disabled");
  const [tooltipText, setTooltipText] = useState(
    <>
      Please fill all fields <br />
      and agree to the <br />
      terms and conditions!
    </>
  );
  useEffect(() => {
    if (
      termsRef.current.checked &&
      fullName &&
      email &&
      country &&
      addressLineOne &&
      state &&
      city &&
      pin
    ) {
      if (authToken.length > 0) {
        setButtonClass("pay-button");
      } else {
        setButtonClass("pay-button disabled");
        setTooltipText(
          <>
            Please sign in or <br />
            sign up to continue
          </>
        );
      }
    } else {
      setButtonClass("pay-button disabled");
    }
  }, [country, addressLineOne, state, city, pin, fullName, email, authToken]);
  return (
    <div className="address-form__wrapper">
      <div className="address-form">
        <h1 className="address-form__header">Please provide your details</h1>
        <input
          type="text"
          placeholder="Fullname"
          value={fullName}
          onChange={(ev) => {
            if (textRegex.test(ev.target.value)) setFullName(ev.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
            dispatch(setTempEmail(ev.target.value));
          }}
          required
        />
        <div className="address-form__separator">
          <span></span>
          <p>Billing address</p>
          <span></span>
        </div>
        <input
          type="text"
          placeholder="Address line 1"
          value={addressLineOne}
          onChange={(ev) => {
            // if (textRegex.test(ev.target.value))
            setAddressLineOne(ev.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Address Line 2"
          value={addressLineTwo}
          onChange={(ev) => {
            // if (textRegex.test(ev.target.value))
            setAddressLineTwo(ev.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(ev) => {
            if (textRegex.test(ev.target.value)) setCity(ev.target.value);
          }}
          required
        />
        <div className="address-form__state-and-pincode">
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(ev) => {
              if (textRegex.test(ev.target.value)) setState(ev.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Pincode"
            value={pin}
            onChange={(ev) => {
              if (numberRegex.test(ev.target.value)) {
                setPin(ev.target.value);
              }
            }}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(ev) => {
            if (textRegex.test(ev.target.value)) setCountry(ev.target.value);
          }}
          required
        />
        <label htmlFor="promo" className="promo-code">
          <input
            type="text"
            name="promo"
            // placeholder="Promo code"
            className="promo-code--input"
            value={promoCode || ""}
            onChange={(ev) => {
              dispatch(setPromoCode(ev.target.value));
            }}
            required
          />
        </label>

        <label htmlFor="terms" className="cart-drawer__terms">
          <input
            type="checkbox"
            name="terms"
            id=""
            ref={termsRef}
            onChange={(ev) => {
              if (
                ev.target.checked &&
                country &&
                addressLineOne &&
                state &&
                city &&
                pin
              ) {
                setButtonClass("pay-button");
              } else {
                setButtonClass("pay-button disabled");
              }
            }}
          />{" "}
          I agree to the{" "}
          <a
            href="https://sparkstudio.co/tnc"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            terms and conditions
          </a>
        </label>
        <button
          className={buttonClass}
          onClick={(ev) => {
            dispatch(
              setAddress({
                full_name: fullName,
                email: email,
                address_line_1: addressLineOne,
                address_line_2: addressLineTwo,
                city: city,
                state: state,
                country: country,
                pin_code: pin,
              })
            );
            if (
              termsRef.current.checked &&
              cart.length > 0 &&
              country &&
              addressLineOne &&
              state &&
              city &&
              pin
            )
              // setTimeout(() => {
              openPayment(ev, {
                full_name: fullName,
                email: email,
                address_line_1: addressLineOne,
                address_line_2: addressLineTwo,
                city: city,
                state: state,
                country: country,
                pin_code: pin,
              });
            // }, 200);
          }}
        >
          {`Pay ${totalAmount()}`} <img src={arrow} alt="" />
          <span className="tooltip">{tooltipText}</span>
        </button>
        {authToken.length > 0 ? null : (
          <button
            className="alternate-sign-in"
            onClick={() => dispatch(openLogin())}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default AddressForm;
