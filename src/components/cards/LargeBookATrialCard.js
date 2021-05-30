import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

function LargeBookATrialCard() {
  return (
    <section className="large-trial-card">
      <h1 className="large-trial-card__header">Book a Free Trial Class</h1>
      <p className="large-trial-card__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        repellat in ab earum iste voluptatum eaque veniam excepturi voluptatibus
        dolores.
      </p>
      <PrimaryButton
        buttonText="Book a FREE trial"
        version="version-2"
        linkTo="https://book-staging.sparkstudio.co/"
      />
    </section>
  );
}

export default LargeBookATrialCard;
