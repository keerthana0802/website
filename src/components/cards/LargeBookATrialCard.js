import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import moengageEvent from "../../helpers/MoengageEventTracking";
import { buttonClickAttributes } from "../../helpers/MoengageAttributeCreators";
function LargeBookATrialCard() {
  return (
    <section className="large-trial-card">
      <h1 className="large-trial-card__header">Book a Free Trial Class</h1>
      <p className="large-trial-card__content">
        Want to know what your child’s favourite class is going to look like?
        <br />
        What are you waiting for?
      </p>
      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="/book-a-trial"
        shine={true}
        clickHandle={() => {
          moengageEvent(
            "Button_Click",
            buttonClickAttributes(
              12,
              "Book a FREE trial",
              "/book-a-trial",
              1,
              4,
              3,
              "After Activity Section"
            )
          );
        }}
      />
    </section>
  );
}

export default LargeBookATrialCard;
