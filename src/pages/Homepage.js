import React from "react";
import HomepageBanner from "../components/banners/HomepageBanner";
import HomepageCourses from "../components/HomepageCourses";
import NavFooterLayout from "../containers/NavFooterLayout";

function Homepage() {
  return (
    <NavFooterLayout>
      <div className="spark-homepage">
        <HomepageBanner />
        <HomepageCourses />
      </div>
    </NavFooterLayout>
  );
}

export default Homepage;
