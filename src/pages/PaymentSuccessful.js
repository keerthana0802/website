import React from "react";
import successful from "../assets/paymentSuccessful.svg";
import NavFooterLayout from "../containers/NavFooterLayout";
import { useSelector } from "react-redux";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CartCard from "../components/cards/CartCard";
import coursesData from "../store/staticData/HomepageCourseCards.json";
import check from "../assets/paidCheck.svg";
import mail from "../assets/email.svg";
function PaymentSuccessful() {
  const paid = useSelector((state) => state.paid);
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
                Order ID:{window.localStorage.payment_id}
              </h1>
              <div className="spark-payment-successful__right--top-status">
                <span>Status: Payment successful</span>
                <span>Date: April 12th, 2021, 14:42</span>
              </div>
              <div className="spark-payment-successful__right--top-email-box">
                <p className="email-info">
                  We will be sending out an email confirmation to <br />
                  <span>shobha@sparkstudio.co</span>
                </p>
                <img src={mail} alt="" />
                <button>Change email</button>
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
            </div>
            <PrimaryButton
              version="version-1"
              buttonText="Return Home"
              linkTo="/"
            />
          </div>
        </div>
      </div>
    </NavFooterLayout>
  );
}

export default PaymentSuccessful;
