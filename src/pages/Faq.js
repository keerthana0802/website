import React, { useState, useEffect } from "react";
import Faqpage from "../components/Faq/Faqpage";
import NavFooterLayout from "../containers/NavFooterLayout";
import courseData from "../store/staticData/HomepageCourseCards.json";
import HomepageCallback from "../components/HomepageComponents/HomepageCallback";
// import "../styles/pagesStyles/faq.scss";
import FaqBanner from "../components/banners/FaqBanner";
import FaqBannerResp from "../components/banners/FaqBannerResp";

function Faq() {
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  // ! initial render state
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setResponsiveMode(true);
    }
  }, [initialRender]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setInitialRender(false);
  }, []);
  return (
    <NavFooterLayout>
      <div className="spark-faq">
        {responsiveMode ? (
          <FaqBannerResp courseData={courseData} />
        ) : (
          <FaqBanner courseData={courseData} />
        )}

        <Faqpage />
        <HomepageCallback />
      </div>
    </NavFooterLayout>
  );
}

export default Faq;
