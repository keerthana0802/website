const initState = {
  authPhoneNumber: "",
  authOtpRequested: false,
  authToken: "",
  profiles: [],
  userDetails: {},
  signupModalOpen: false,
  loginModalOpen: false,
  guestModalOpen: false,
  meetingDetails: null,
};
const authReducers = (state = initState, action) => {
  switch (action.type) {
    case "SEND_OTP":
      return { ...state, authOtpRequested: true };
    case "CHANGE_NUMBER":
      return { ...state, authOtpRequested: false };
    case "LOGIN_WITH_OTP":
      console.log("from reducers", action.payload.profiles);
      return {
        ...state,
        authOtpRequested: false,
        profiles: action.payload.profiles,
        userDetails: action.payload.userDetails,
      };
    case "SAVE_AUTH_TOKEN":
      return { ...state, authToken: action.payload };
    case "SIGNUP_MODAL_OPEN":
      return { ...state, signupModalOpen: !state.signupModalOpen };
    case "LOGIN_MODAL_OPEN":
      return { ...state, loginModalOpen: !state.loginModalOpen };
    case "GUEST_MODAL_OPEN":
      return { ...state, guestModalOpen: !state.guestModalOpen };
    case "SET_MEETING_DETAILS":
      return { ...state, meetingDetails: action.payload };
    default:
      return state;
  }
};
export { authReducers };
