import React, { useState, useEffect } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Path from "./paths/Path";
import { useSelector, useDispatch } from "react-redux";
import {
  addQtyToCart,
  addToCart,
  cartDrawerOpen,
} from "../../store/actions/checkoutActions";
import MoengageEventTracking from "../../helpers/MoengageEventTracking";
import { addToCartAttributes } from "../../helpers/MoengageAttributeCreators";
function CurriculumSection({ dark, courseDetails, courseType, courseName }) {
  const activeCourseOnCoursePage = useSelector(
    (state) => state.courses.activeCourseOnCoursePage
  );
  const allCourses = useSelector((state) => state.courses.allCourses);
  const cart = useSelector((state) => state.checkout.cart);
  const cartDrawer = useSelector((state) => state.checkout.cartDrawer);
  const dispatch = useDispatch();
  const addToCartHandle = (courseCardId, courseCardName) => {
    let found = cart.find((course) => course.courseId === courseCardId);
    let foundPrice = allCourses.find(
      (course) => course.courseId === courseCardId
    );
    if (found) {
      dispatch(addQtyToCart(found.courseId));
      if (!cartDrawer) dispatch(cartDrawerOpen(courseCardName));
    } else {
      dispatch(addToCart({ courseId: courseCardId, qty: 1 }));
      if (!cartDrawer) dispatch(cartDrawerOpen(courseCardName));
      MoengageEventTracking(
        "Add_to_Cart",
        addToCartAttributes(courseCardId, courseCardName, foundPrice.price)
      );
    }
  };
  const [localCourseDetails, setLocalCourseDetails] = useState(courseDetails);
  useEffect(() => {
    setLocalCourseDetails(
      allCourses.find((item) => activeCourseOnCoursePage === item.courseId)
    );
  }, [activeCourseOnCoursePage]);
  return (
    <>
      {localCourseDetails.curriculumOutcomes.length > 0 &&
      localCourseDetails.curriculumSessions.length > 0 ? (
        <div className="curriculum-section__wrapper">
          <div className="curriculum-section">
            <div className="curriculum-section__left">
              <h1 className="curriculum-section__left--header">Curriculum</h1>
              <h3 className="curriculum-section__left--liner">
                {localCourseDetails.curriculumLiner}
              </h3>
              <ul className="curriculum-section__left--list">
                {localCourseDetails.curriculumOutcomes.map((outcome, index) => {
                  return (
                    <li
                      className="curriculum-section__left--list-item"
                      key={index}
                    >
                      {outcome}
                    </li>
                  );
                })}
              </ul>
              <PrimaryButton
                buttonText="Buy Course"
                version="version-1"
                clickHandle={() =>
                  addToCartHandle(activeCourseOnCoursePage, courseName)
                }
              />
            </div>
            <div className="curriculum-section__right">
              <Path
                courseThemeColorDark={dark}
                steps={localCourseDetails.curriculumSessions.length}
                sessions={localCourseDetails.curriculumSessions}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CurriculumSection;
