import React, { lazy, Suspense, useEffect, useState } from "react";
import NavFooterLayout from "../containers/NavFooterLayout";
import HomepageBanner from "../components/banners/HomepageBanner";
import HomepageCourses from "../components/HomepageComponents/HomepageCourses";
import { Helmet } from "react-helmet";

// ! lazy loaded components
const HomepageCallback = lazy(() =>
  import("../components/HomepageComponents/HomepageCallback")
);
const HomepageExpertsSection = lazy(() =>
  import("../components/HomepageComponents/HomepageExpertsSection")
);
const HomepageExpertsSectionResp = lazy(() =>
  import("../components/HomepageComponents/HomepageExpertsSectionResp")
);
const HomepageShowcase = lazy(() =>
  import("../components/HomepageComponents/HomepageShowcase")
);
const HomepageUspSection = lazy(() =>
  import("../components/HomepageComponents/HomepageUspSection")
);
const TestimonialSlider = lazy(() =>
  import("../components/sliders/TestimonialSlider")
);

function Homepage() {
  const [responsiveMode, setResponsiveMode] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 992) {
      setResponsiveMode(true);
    }
  }, []);
  return (
    <NavFooterLayout>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <div className="spark-homepage">
        <HomepageBanner />
        <HomepageCourses />
        <Suspense fallback={<div></div>}>
          <HomepageShowcase />
        </Suspense>
        <Suspense fallback={<div></div>}>
          {responsiveMode ? (
            <HomepageExpertsSectionResp />
          ) : (
            <HomepageExpertsSection />
          )}
        </Suspense>
        <Suspense fallback={<div></div>}>
          <HomepageUspSection />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <TestimonialSlider />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <HomepageCallback />
        </Suspense>
      </div>
    </NavFooterLayout>
  );
}

export default Homepage;
