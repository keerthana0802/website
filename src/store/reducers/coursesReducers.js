const initState = {
  allCourses: [],
};
const coursesReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_ALL_COURSES":
      return { ...state, allCourses: action.payload.data };
    default:
      return state;
  }
};
export { coursesReducers };
