import React from "react";
import NavFooterLayout from "../containers/NavFooterLayout";

function TeacherFeedback() {
  return (
    <NavFooterLayout>
      <div className="teacher-feedback-page__wrapper">
        <h1 className="teacher-feedback-page__header">
          Another Photography class came to an end!
        </h1>
        <h3 className="teacher-feedback-page__content">
          We hope you have had an amazing time with the bright minds of spark
          studio. Please lend us your 5 minutes by filling this feedback, so
          that we can get make the Spark Studio experience even better for you.
        </h3>
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfBpSlx5dAKAKrQ2HanZXBsGk0gSlKIuQOtLZbe0MHtRMuFgA/viewform?embedded=true"
          width="700"
          height="700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
        <div
          className="typeform-widget"
          data-url="https://form.typeform.com/to/trLquhLj?typeform-medium=embed-snippet"
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </NavFooterLayout>
  );
}

export default TeacherFeedback;
