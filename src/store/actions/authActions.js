import axios from "axios";
// ! Auth actions
const sendOtp = (number) => {
  //   console.log(number);
  axios
    .post(`${process.env.REACT_APP_AUTH_API}/send_otp`, {
      phone_no: number,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => console.log(e));
  return {
    type: "SEND_OTP",
  };
};
const loginWithOtp = (data) => {
  return {
    type: "LOGIN_WITH_OTP",
    payload: data,
  };
};
const saveAuthToken = (data) => {
  return {
    type: "SAVE_AUTH_TOKEN",
    payload: data,
  };
};
const changeNumber = () => {
  return {
    type: "CHANGE_NUMBER",
  };
};
const setMeetingDetails = (data) => {
  return {
    type: "SET_MEETING_DETAILS",
    payload: data,
  };
};
// ! Login Signup modals
const openSignup = () => {
  return {
    type: "SIGNUP_MODAL_OPEN",
  };
};
const openLogin = () => {
  return {
    type: "LOGIN_MODAL_OPEN",
  };
};
const openGuest = () => {
  return {
    type: "GUEST_MODAL_OPEN",
  };
};
const tempPhoneNumber = (data) => {
  return {
    type: "TEMP_PHONE_NUMBER",
    payload: data,
  };
};
export {
  sendOtp,
  loginWithOtp,
  saveAuthToken,
  changeNumber,
  setMeetingDetails,
  openSignup,
  openLogin,
  openGuest,
  tempPhoneNumber,
};
