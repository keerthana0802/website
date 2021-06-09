const colors = {
  Communication: { light: "#EDFCFF", dark: "#83DEF0" },
  "Visual Arts": { light: "#DCCCFF", dark: "#8469C0" },
  Music: { light: "#FFEDC8", dark: "#FFC142" },
};
// ! courses actions
const getCourses = (coursesData) => {
  let allCourses = coursesData.map((course) => {
    return {
      courseId: course.identifier,
      courseInitials: course.abbreviation,
      courseStatus: course.is_live ? "ACTIVE" : "UPCOMING",
      courseName: course.name,
      displayName: course.display_name,
      vertical: course.category_name,
      courseLevel: course.level,
      numberOfClasses: course.num_classes,
      sessionDuration: course.session_duration_minutes,
      price: Number(course.price.split(".").shift()),
      minAge: course.min_age,
      maxAge: course.max_age,
      courseType: "Regular",
      coursePriority: course.priority,
      verticalThemeColorLight: colors[course.category_name].light,
      verticalThemeColorDark: colors[course.category_name].dark,
      courseImageUrl: course.image_url,
      expertsSayVideoUrl: course.experts_say_video_url,
      courseLiner: course.course_one_liner,
      courseContent: course.description,
      courseCurrency: "INR",
      courseTags:
        course.tags.length > 0
          ? course.tags
          : ["Performance", "Music Composition", "Appreciation"],
    };
  });

  return {
    type: "SET_ALL_COURSES",
    payload: allCourses,
  };
};
export { getCourses };
