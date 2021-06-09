// ! courses actions
const getCourses = (coursesData) => {
  let allCourses = coursesData.map((course) => {
    return {
      courseId: course.identifier,
      courseInitials: course.abbreviation,
      courseStatus: course.is_live ? "ACTIVE" : "UPCOMING",
      courseName: course.name,
      displayName: course.display_name,
      vertical: "Visual Arts",
      courseLevel: 1,
      numberOfClasses: 7,
      sessionDuration: 60,
      price: 2800,
      minAge: 6,
      maxAge: 9,
      courseType: "Regular",
      coursePriority: 1,
      verticalThemeColorLight: "#DCCCFF",
      verticalThemeColorDark: "#8469C0",
      courseImageUrl: "imageUrlHere - PENDING",
      expertsSayVideoUrl: "videoUrlHere - PENDING",
      courseLiner: "one liner - PENDING",
      courseContent: "course details - PENDING",
      courseCurrency: "INR",
      courseTags: ["Performance", "Music Composition", "Appreciation"],
    };
  });
  return {
    type: "SET_ALL_COURSES",
  };
};
export { getCourses };
