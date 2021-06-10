import React, { useState, useEffect, useRef } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import arrow from "../../assets/buttonArrow.svg";
import { setPromoCode } from "../../store/actions/rootActions";
function AddressForm({ openPayment }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.checkout.cart);
  const coursesData = useSelector((state) => state.courses.allCourses);
  const promoCode = useSelector((state) => state.checkout.promoCode);
  // ! States for input elements
  const [country, setCountry] = useState("");
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState(null);
  // ! Regex
  let numberRegex = new RegExp(/^[0-9]*$/);
  let countryCodeRegex = new RegExp(/^\+[0-9]*$/);
  let textRegex = new RegExp(/^[A-Za-z -]*$/);
  const totalAmount = () => {
    let currency;
    let amount = cart.reduce((a, course) => {
      let found = coursesData.find((item) => item.courseId === course.courseId);
      if (!currency) currency = found.courseCurrency;
      return a + found.price * course.qty;
    }, 0);
    return `${currency || ""} ${amount}`;
  };
  const termsRef = useRef(null);
  const [buttonClass, setButtonClass] = useState("pay-button disabled");
  useEffect(() => {
    if (
      termsRef.current.checked &&
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
  }, [country, addressLineOne, state, city, pin]);
  return (
    <div className="address-form__wrapper">
      <div className="address-form">
        <h1 className="address-form__header">Please provide your details</h1>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(ev) => {
            if (textRegex.test(ev.target.value)) setCountry(ev.target.value);
          }}
          required
        />
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
              if (numberRegex.test(ev.target.value)) setPin(ev.target.value);
            }}
            required
          />
        </div>
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

        <label htmlFor="save-info">
          <input type="checkbox" name="save-info" id="" />
          Save information for faster checkout next time.
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
            if (
              termsRef.current.checked &&
              cart.length > 0 &&
              country &&
              addressLineOne &&
              state &&
              city &&
              pin
            )
              openPayment(ev);
          }}
        >
          {`Pay ${totalAmount()}`} <img src={arrow} alt="" />
          <span className="tooltip">
            Please fill all fields <br />
            and agree to the <br />
            terms and conditions!
          </span>
        </button>
      </div>
    </div>
  );
}

export default AddressForm;
