import React, { useState, useEffect } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { useSelector } from "react-redux";
import arrow from "../../assets/buttonArrow.svg";
function AddressForm({ openPayment }) {
  const cart = useSelector((state) => state.checkout.cart);
  const coursesData = useSelector((state) => state.courses.allCourses);
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
  // console.log(coursesData);
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
        />
        <input
          type="text"
          placeholder="Address line 1"
          value={addressLineOne}
          onChange={(ev) => {
            // if (textRegex.test(ev.target.value))
            setAddressLineOne(ev.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Address Line 2"
          value={addressLineTwo}
          onChange={(ev) => {
            // if (textRegex.test(ev.target.value))
            setAddressLineTwo(ev.target.value);
          }}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(ev) => {
            if (textRegex.test(ev.target.value)) setCity(ev.target.value);
          }}
        />
        <div className="address-form__state-and-pincode">
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(ev) => {
              if (textRegex.test(ev.target.value)) setState(ev.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Pincode"
            value={pin}
            onChange={(ev) => {
              if (numberRegex.test(ev.target.value)) setPin(ev.target.value);
            }}
          />
        </div>
        <label htmlFor="save-info">
          <input type="checkbox" name="save-info" id="" />
          Save information for faster checkout next time.
        </label>

        <button
          className="pay-button"
          onClick={(ev) => {
            if (cart.length > 0) openPayment(ev);
          }}
        >
          {`Pay ${totalAmount()}`} <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddressForm;
