import React, { lazy, Suspense } from "react";
import NavFooterLayout from "../containers/NavFooterLayout";
import HomepageBanner from "../components/banners/HomepageBanner";
import HomepageCourses from "../components/HomepageCourses";

// ! lazy loaded components
const HomepageCallback = lazy(() => import("../components/HomepageCallback"));
const HomepageExpertsSection = lazy(() =>
  import("../components/HomepageExpertsSection")
);
const HomepageShowcase = lazy(() => import("../components/HomepageShowcase"));
const HomepageUspSection = lazy(() =>
  import("../components/HomepageUspSection")
);
const TestimonialSlider = lazy(() =>
  import("../components/sliders/TestimonialSlider")
);

function Homepage() {
  return (
    <NavFooterLayout>
      <div className="spark-homepage">
        <HomepageBanner />
        <HomepageCourses />
        <Suspense fallback={<div></div>}>
          <HomepageShowcase />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <HomepageExpertsSection />
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
