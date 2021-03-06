const colors = {
  Communication: { light: "#EDFCFF", dark: "#83DEF0" },
  "Visual Arts": { light: "#DCCCFF", dark: "#8469C0" },
  Music: { light: "#FFEDC8", dark: "#FFC142" },
};
const courseLevelCount = (displayName) => {
  switch (displayName.toLowerCase()) {
    case "guitar":
      return 2;
    case "western vocals":
      return 2;
    case "stop motion animation":
      return 3;
    case "art":
      return 2;
    default:
      return 1;
  }
};

// ! courses actions
const getCourses = (coursesData) => {
  let allCourses = coursesData.map((course) => {
    // console.log("from here", course.identifier);
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
      priceInr: Number(course.price_inr.split(".")[0]),
      priceUsd: Number(course.price_usd.split(".")[0]),
      minAge: course.min_age,
      maxAge: course.max_age,
      classRatio: course.class_size,
      showOutside: course.show_outside,
      showOutsideMinAge: course.show_outside_min_age,
      showOutsideMaxAge: course.show_outside_max_age,
      courseType: "Regular",
      coursePriority: course.priority,
      verticalThemeColorLight: colors[course.category_name].light,
      verticalThemeColorDark: colors[course.category_name].dark,
      courseImageUrl: course.image_url,
      expertsSayVideoUrl: course.experts_say_video_url,
      courseLiner: course.course_one_liner,
      courseContent: course.pitch.split(".")[0],
      courseCurrency: "INR",
      courseLevelCount: courseLevelCount(course.display_name),
      courseTags: course.tags,
      numberOfHomeActivities: course.number_of_home_activities,
      classSize: Number(course.class_size),
      courseUsp: course.usp_of_course,
      fullDescription: course.full_description,
      pitch: course.pitch,
      shortPitch: course.short_pitch,
      socialProof: course.social_proof,
      curriculumLiner: course.curriculum_liner,
      curriculumOutcomes: course.curriculum_outcomes,
      curriculumSessions: course.curriculum_sessions,
      showcaseSectionHeader: course.showcase_section_header,
      showcaseSectionContent: course.showcase_section_content,
      showcaseData: course.showcase_data,
      testimonialData: course.testimonial_data,
      expertDetails: course.expert_details,
    };
  });

  // console.log("from action", allCourses);
  return {
    type: "SET_ALL_COURSES",
    payload: allCourses,
  };
};

const setActiveCourseOnCoursePage = (courseId) => {
  return {
    type: "ACTIVE_COURSE_ON_COURSE_PAGE",
    payload: courseId,
  };
};
const setScrollToCourseCategory = (category) => {
  return {
    type: "SCROLL_TO_COURSE_CATEGORY",
    payload: category,
  };
};
const setCurrency = (currency) => {
  return {
    type: "SET_CURRENCY",
    payload: currency,
  };
};
export {
  getCourses,
  setActiveCourseOnCoursePage,
  setScrollToCourseCategory,
  setCurrency,
};
