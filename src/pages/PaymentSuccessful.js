import React from "react";
import successful from "../assets/paymentSuccessful.svg";
import NavFooterLayout from "../containers/NavFooterLayout";
import { useSelector } from "react-redux";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CartCard from "../components/cards/CartCard";
import check from "../assets/paidCheck.svg";
import moengageEvent from "../helpers/MoengageEventTracking";
import { clickToHomepageAttributes } from "../helpers/MoengageAttributeCreators";
function PaymentSuccessful() {
  const coursesData = useSelector((state) => state.courses.allCourses);
  const paid = useSelector((state) => state.checkout.paid);
  const userDetails = useSelector((state) => state.auth.userDetails);
  return (
    <NavFooterLayout>
      <div className="spark-payment-successful__wrapper">
        <div className="spark-payment-successful">
          <div className="spark-payment-successful__left">
            <img src={successful} alt="" />
          </div>
          <div className="spark-payment-successful__right">
            <div className="spark-payment-successful__right--top">
              <h1 className="spark-payment-successful__right--top-header">
                Thank you for placing your <br />
                order with us <img src={check} alt="" />
              </h1>
              <h1 className="spark-payment-successful__right--top-order-id">
                Order ID : {window.localStorage.payment_id}
              </h1>
              <div className="spark-payment-successful__right--top-status">
                <span>Status: Payment successful</span>
                {/* <span>Date: April 12th, 2021, 14:42</span> */}
              </div>
            </div>
            <div className="spark-payment-successful__right--bottom">
              <h2 className="spark-payment-successful__right--bottom-header">
                Order Summary
              </h2>
              <div className="spark-payment-successful__right--bottom-courses">
                {paid.map((course, index) => {
                  let found = coursesData.find(
                    (item) => item.courseId === course.courseId
                  );
                  if (course.qty > 0)
                    return (
                      <CartCard
                        courseName={found.displayName}
                        courseCategory={found.vertical}
                        courseAgeGroup={`${found.minAge}-${found.maxAge}`}
                        courseCurrency={found.courseCurrency}
                        coursePrice={found.price}
                        courseQty={course.qty}
                        courseColor={found.verticalThemeColorDark}
                        courseId={course.courseId}
                        version="--no-price-qty"
                        courseDuration={found.numberOfClasses}
                        sessionDuration={found.sessionDuration}
                      />
                    );
                })}
              </div>
              <div className="spark-payment-successful__right--top-email-box">
                <p className="email-info">
                  We will be sending out an email confirmation to <br />
                  <span>{userDetails?.email || ""}</span>
                </p>
                {/* <button>Change email</button> */}
              </div>
              <p className="spark-payment-successful__right--last-liner">
                Our team will get in touch with you with the batch details!
              </p>
            </div>
            <PrimaryButton
              version="version-1"
              buttonText="Return Home"
              linkTo="/"
              onClick={() =>
                moengageEvent("Click_To_Home_Page", clickToHomepageAttributes())
              }
            />
          </div>
        </div>
      </div>
    </NavFooterLayout>
  );
}

export default PaymentSuccessful;
