import React from "react";
import HomepageSectionHeader from "../headers/HomepageSectionHeader";
import arjun from "../../assets/arjun.svg";
function SingleCard({ imageUrl, fullName, position }) {
  return (
    <div className="single-card">
      <img src={imageUrl} alt="" />
      <p className="name">
        {fullName}
        <span>{position}</span>
      </p>
    </div>
  );
}

function TeamGrid() {
  return (
    <div className="team-grid__wrapper">
      <div className="team-grid">
        <HomepageSectionHeader
          headerContent="Meet the rest of the Team"
          linerContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="team-grid__grid">
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />{" "}
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />{" "}
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
          <SingleCard
            imageUrl={arjun}
            fullName="Arjun Sharma"
            position="Design"
          />
        </div>
      </div>
    </div>
  );
}

export default TeamGrid;
