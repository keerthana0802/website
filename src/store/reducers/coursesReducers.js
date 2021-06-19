const initState = {
  allCourses: [],
  activeCourseOnCoursePage: "",
  scrollToCourseCategory: "",
};
const coursesReducers = (state = initState, action) => {
  switch (action.type) {
    case "SET_ALL_COURSES":
      return { ...state, allCourses: [...action.payload] };
    case "ACTIVE_COURSE_ON_COURSE_PAGE":
      return { ...state, activeCourseOnCoursePage: action.payload };
    case "SCROLL_TO_COURSE_CATEGORY":
      return { ...state, scrollToCourseCategory: action.payload };
    default:
      return state;
  }
};
export { coursesReducers };
