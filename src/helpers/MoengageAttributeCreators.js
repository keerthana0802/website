// ! Moengage page visit event attributes (1001001)
const pageVisitAttributes = (kingdom, genus) => {
  return {
    event_id: "1001001",
    event_type: "View",
    funnel_stage: "Consideration",
    event_category: "Browsing",
    feature_set: "Base",
    event_priority: "High",
    kingdom: kingdom,
    phylum: "",
    class: "",
    order: "Homepage",
    family: "1001001",
    genus: genus,
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage age filter event attributes (1001024)
const ageFilterAttributes = (kingdom, filter) => {
  return {
    event_id: "1001024",
    event_type: "Click",
    funnel_stage: "Consideration",
    event_category: "Browsing",
    feature_set: "Base",
    event_priority: "High",
    kingdom: kingdom,
    phylum: filter.join("-"),
    class: "",
    order: "Homepage",
    family: "1001024",
    genus: "2",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage add to cart event attributes (1001018)
const addToCartAttributes = (courseCardId, courseCardName, coursePrice) => {
  return {
    event_id: "1001018",
    event_type: "Click",
    funnel_stage: "Conversion",
    event_category: "Cart",
    feature_set: "Base",
    event_priority: "High",
    kingdom: courseCardId,
    phylum: courseCardName,
    class: "Button state - clicked",
    order: coursePrice,
    family: "1001018",
    genus: "3",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage click to homepage event attributes (1001002)
const clickToHomepageAttributes = () => {
  return {
    event_id: "1001002",
    event_type: "Click",
    funnel_stage: "Consideration",
    event_category: "Browsing",
    feature_set: "Base",
    event_priority: "High",
    kingdom: "",
    phylum: "",
    class: "/",
    order: "",
    family: "1001002",
    genus: "",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage click to homepage event attributes (1001003)
const mainMenuClickAttributes = (
  itemID,
  itemTitle,
  destinationUrl,
  buttonState,
  leadScore,
  destinationPageId
) => {
  return {
    event_id: "1001003",
    event_type: "Click",
    funnel_stage: "Consideration",
    event_category: "Browsing",
    feature_set: "Base",
    event_priority: "High",
    kingdom: itemID,
    phylum: itemTitle,
    class: destinationUrl,
    order: buttonState,
    family: "1001003",
    genus: leadScore,
    species: destinationPageId,
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage category filter event attributes (1001031)
const categoryFilterAttributes = (categoryId, categoryTitle) => {
  return {
    event_id: "1001031",
    event_type: "Click",
    funnel_stage: "Consideration",
    event_category: "Browsing",
    feature_set: "Base",
    event_priority: "High",
    kingdom: categoryId,
    phylum: categoryTitle,
    class: "",
    order: "",
    family: "1001031",
    genus: "2",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage search execution event attributes (1001012)
const searchExecuteAttributes = (
  searchTerm,
  returnedItemCount,
  result,
  leadScore,
  searchType
) => {
  return {
    event_id: "1001012",
    event_type: "Platform",
    funnel_stage: "Action",
    event_category: "Search",
    feature_set: "Search",
    event_priority: "High",
    kingdom: searchTerm,
    phylum: returnedItemCount,
    class: result,
    order: "",
    family: "1001012",
    genus: leadScore,
    species: "",
    sub_c_1: searchType,
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage checkout event attributes (1001038)
const checkoutAttributes = (
  totalQuantity,
  cartImageStyle,
  locationOfTrigger,
  cartTotal,
  leadScore,
  promoCode,
  discountVisible
) => {
  return {
    event_id: "1001038",
    event_type: "Click",
    funnel_stage: "Action",
    event_category: "Cart",
    feature_set: "Checkout",
    event_priority: "High",
    kingdom: totalQuantity,
    phylum: cartImageStyle,
    class: locationOfTrigger,
    order: cartTotal,
    family: "1001038",
    genus: leadScore,
    species: promoCode,
    sub_c_1: discountVisible,
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage book trial page view event attributes (1001014)
const bookTrialViewAttributes = () => {
  return {
    event_id: "1001014",
    event_type: "View",
    funnel_stage: "Trial",
    event_category: "Book",
    feature_set: "Trial",
    event_priority: "High",
    kingdom: "",
    phylum: "",
    class: "",
    order: "",
    family: "1001014",
    genus: "",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage book trial field filled event attributes (1001017)
const bookTrialFieldFilledAttributes = (fieldId, fieldTitle, fieldValue) => {
  return {
    event_id: "1001017",
    event_type: "Platform",
    funnel_stage: "Trial",
    event_category: "Book",
    feature_set: "Trial",
    event_priority: "High",
    kingdom: fieldId,
    phylum: fieldTitle,
    class: fieldValue,
    order: "",
    family: "1001017",
    genus: ".5",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage book trial submit event attributes (1001026)
const bookTrialSubmitAttributes = (
  stageId,
  stageTitle,
  dataValidated,
  nextStageId
) => {
  return {
    event_id: "1001026",
    event_type: "Click",
    funnel_stage: "Trial",
    event_category: "Book",
    feature_set: "Trial",
    event_priority: "High",
    kingdom: stageId,
    phylum: stageTitle,
    class: dataValidated,
    order: "",
    family: "1001026",
    genus: "1",
    species: nextStageId,
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage book trial success event attributes (1001037)
const bookTrialSuccessAttributes = (
  stageId,
  stageTitle,
  dataValidated,
  nextStageId,
  leadScore
) => {
  return {
    event_id: "1001037",
    event_type: "System",
    funnel_stage: "Trial",
    event_category: "Book",
    feature_set: "Trial",
    event_priority: "High",
    kingdom: stageId,
    phylum: stageTitle,
    class: dataValidated,
    order: "",
    family: "1001037",
    genus: leadScore,
    species: nextStageId,
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage invoke payment event attributes (1001043)
const invokePaymentAttributes = (
  orderId,
  totalCartQuantity,
  billingDetailsString,
  totalCartPrice,
  currency,
  promoCode = "",
  discountVisible = "No"
) => {
  return {
    event_id: "1001043",
    event_type: "Click",
    funnel_stage: "Action",
    event_category: "Cart",
    feature_set: "Checkout",
    event_priority: "High",
    kingdom: orderId,
    phylum: totalCartQuantity,
    class: billingDetailsString,
    order: totalCartPrice,
    family: "1001043",
    genus: "8",
    species: promoCode,
    sub_c_1: discountVisible,
    sub_c_2: currency,
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage payment status event attributes (1001044)
const paymentStatusAttributes = (
  orderId,
  totalCartQuantity,
  status,
  totalCartPrice,
  genus,
  currency,
  promoCode = "",
  discountVisible = "No"
) => {
  return {
    event_id: "1001044",
    event_type: "System",
    funnel_stage: "Conversion",
    event_category: "Cart",
    feature_set: "Checkout",
    event_priority: "High",
    kingdom: orderId,
    phylum: totalCartQuantity,
    class: status,
    order: totalCartPrice,
    family: "1001044",
    genus: genus,
    species: promoCode,
    sub_c_1: discountVisible,
    sub_c_2: currency,
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage request callback event attributes (1001033)
const requestCallbackAttributes = (
  nameFilled,
  mobileFilled,
  location,
  countryCode
) => {
  return {
    event_id: "1001033",
    event_type: "Click",
    funnel_stage: "Action",
    event_category: "Request",
    feature_set: "Parent",
    event_priority: "High",
    kingdom: nameFilled,
    phylum: mobileFilled,
    class: location,
    order: countryCode,
    family: "1001033",
    genus: ".5",
    species: "",
    sub_c_1: "",
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage connect with us event attributes (1001034)
const connectWithUsAttributes = (
  linkedinDetailsFilled,
  location,
  linkedinUrl
) => {
  return {
    event_id: "1001034",
    event_type: "Click",
    funnel_stage: "Action",
    event_category: "Request",
    feature_set: "Teacher",
    event_priority: "High",
    kingdom: linkedinDetailsFilled,
    phylum: "",
    class: location,
    order: "",
    family: "1001034",
    genus: ".5",
    species: "",
    sub_c_1: linkedinUrl,
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage join class event attributes (1001045)
const joinClassAttributes = (
  classId,
  courseId,
  classType,
  teacherPresent,
  leadScore,
  classDate,
  classTiming,
  sessionNo
) => {
  return {
    event_id: "1001045",
    event_type: "Click",
    funnel_stage: "Consumption",
    event_category: "Class",
    feature_set: "Base",
    event_priority: "High",
    kingdom: classId,
    phylum: courseId,
    class: classType,
    order: teacherPresent,
    family: "1001045",
    genus: leadScore,
    species: classDate,
    sub_c_1: classTiming,
    sub_c_2: sessionNo,
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage leave class event attributes (1001046)
const leaveClassAttributes = (
  classId,
  courseId,
  classType,
  teacherPresent,
  leadScore,
  classDate,
  classTiming,
  sessionNo
) => {
  return {
    event_id: "1001046",
    event_type: "Click",
    funnel_stage: "Consumption",
    event_category: "Class",
    feature_set: "Base",
    event_priority: "High",
    kingdom: classId,
    phylum: courseId,
    class: classType,
    order: teacherPresent,
    family: "1001046",
    genus: leadScore,
    species: classDate,
    sub_c_1: classTiming,
    sub_c_2: sessionNo,
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
// ! Moengage button click event attributes (1001005)
const buttonClickAttributes = (
  buttonId,
  buttonTitle,
  destinationUrl,
  buttonTypeId,
  leadScore,
  destinationPageId,
  location
) => {
  return {
    event_id: "1001005",
    event_type: "Click",
    funnel_stage: "Consideration",
    event_category: "Browsing",
    feature_set: "Base",
    event_priority: "High",
    kingdom: buttonId,
    phylum: buttonTitle,
    class: destinationUrl,
    order: buttonTypeId,
    family: "1001005",
    genus: leadScore,
    species: destinationPageId,
    sub_c_1: location,
    sub_c_2: "",
    app_version: "0.1.1",
    a_b_variant: "a",
  };
};
export {
  pageVisitAttributes,
  ageFilterAttributes,
  addToCartAttributes,
  clickToHomepageAttributes,
  mainMenuClickAttributes,
  categoryFilterAttributes,
  searchExecuteAttributes,
  checkoutAttributes,
  bookTrialViewAttributes,
  bookTrialFieldFilledAttributes,
  bookTrialSubmitAttributes,
  bookTrialSuccessAttributes,
  invokePaymentAttributes,
  paymentStatusAttributes,
  requestCallbackAttributes,
  connectWithUsAttributes,
  joinClassAttributes,
  leaveClassAttributes,
  buttonClickAttributes,
};
