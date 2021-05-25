import React from "react";
import HomepageBanner from "../components/banners/HomepageBanner";
import HomepageCallback from "../components/HomepageCallback";
import HomepageCourses from "../components/HomepageCourses";
import HomepageExpertsSection from "../components/HomepageExpertsSection";
import HomepageShowcase from "../components/HomepageShowcase";
import HomepageUspSection from "../components/HomepageUspSection";
import TestimonialSlider from "../components/sliders/TestimonialSlider";
import NavFooterLayout from "../containers/NavFooterLayout";

function Homepage() {
  return (
    <NavFooterLayout>
      <div className="spark-homepage">
        <HomepageBanner />
        <HomepageCourses />
        <HomepageShowcase />
        <HomepageUspSection />
        <HomepageExpertsSection />
        <TestimonialSlider />
        <HomepageCallback />
      </div>
    </NavFooterLayout>
  );
}

export default Homepage;
