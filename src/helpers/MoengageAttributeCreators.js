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
    app_version: "0.0.0",
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
    app_version: "0.0.0",
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
    app_version: "0.0.0",
    a_b_variant: "a",
  };
};
// ! Moengage click to homepage event attributes (1001018)
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
    app_version: "0.0.0",
    a_b_variant: "a",
  };
};
// ! Moengage click to homepage event attributes (1001018)
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
    app_version: "0.0.0",
    a_b_variant: "a",
  };
};
// ! Moengage category filter event attributes (1001018)
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
    app_version: "0.0.0",
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
};
