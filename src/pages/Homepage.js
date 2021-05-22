import React from "react";
import HomepageBanner from "../components/banners/HomepageBanner";
import NavFooterLayout from "../containers/NavFooterLayout";

function Homepage() {
  return (
    <NavFooterLayout>
      <div className="spark-homepage">
        <HomepageBanner />
      </div>
    </NavFooterLayout>
  );
}

export default Homepage;
