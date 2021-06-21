import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

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
      />
    </section>
  );
}

export default LargeBookATrialCard;
