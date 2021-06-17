const initState = {
  authPhoneNumber: "",
  authOtpRequested: false,
  authOtpRequestBody: null,
  verified: false,
  authToken: "",
  profiles: [],
  userDetails: {},
  signupModalOpen: false,
  loginModalOpen: false,
  guestModalOpen: false,
  meetingDetails: null,
  tempCountryCode: "",
  tempPhoneNumber: "",
  tempFullName: "",
  tempEmail: "",
};
const authReducers = (state = initState, action) => {
  switch (action.type) {
    case "SEND_OTP":
      return {
        ...state,
        authOtpRequested: true,
        authOtpRequestBody: action.payload,
      };
    case "CHANGE_NUMBER":
      return { ...state, authOtpRequested: false };
    case "LOGIN_WITH_OTP":
      return {
        ...state,
        verified: true,
        authOtpRequested: false,
        profiles: action.payload.profiles,
        userDetails: action.payload.userDetails,
      };
    case "SAVE_AUTH_TOKEN":
      return { ...state, authToken: action.payload };
    case "SIGNUP_MODAL_OPEN":
      return {
        ...state,
        signupModalOpen: !state.signupModalOpen,
      };
    case "LOGIN_MODAL_OPEN":
      return {
        ...state,
        loginModalOpen: !state.loginModalOpen,
      };
    case "GUEST_MODAL_OPEN":
      return { ...state, guestModalOpen: !state.guestModalOpen };
    case "SET_MEETING_DETAILS":
      return { ...state, meetingDetails: action.payload };
    case "TEMP_PHONE_NUMBER":
      return {
        ...state,
        tempCountryCode: action.payload.countryCode,
        tempPhoneNumber: action.payload.phoneNumber,
      };
    case "TEMP_FULL_NAME":
      return {
        ...state,
        tempFullName: action.payload,
      };
    case "TEMP_EMAIL":
      return {
        ...state,
        tempEmail: action.payload,
      };
    case "LOGOUT_USER":
      return { ...state, authToken: "", profiles: [], userDetails: {} };
    default:
      return state;
  }
};
export { authReducers };
