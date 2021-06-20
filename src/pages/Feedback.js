import React, { useState, useEffect } from "react";
import NavFooterLayout from "../containers/NavFooterLayout";
function Feedback() {
  return (
    <NavFooterLayout>
      <div className="feedback-page__wrapper">
        <div className="feedback-page__left">
          {/* <img src={purple} alt="" /> */}
          <h1 className="feedback-page__header">
            Another Photography class came to an end!
          </h1>
          <h3 className="feedback-page__content">
            We hope you have had an amazing time with the bright minds of spark
            studio. Please lend us your 5 minutes by filling this feedback, so
            that we can get make the Spark Studio experience even better for
            you.
          </h3>
        </div>
        <div className="feedback-page__right">
          <iframe
            title="Feedback form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfBpSlx5dAKAKrQ2HanZXBsGk0gSlKIuQOtLZbe0MHtRMuFgA/viewform?embedded=true&entry.989961362=ABCD123+/+ABCD123-02-09"
            width="100%"
            height="700"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </NavFooterLayout>
  );
}

export default Feedback;
