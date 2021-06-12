import React, { useState, useEffect, useRef } from "react";
import DetailsForm from "../components/bookAFreeTrialComponents/DetailsForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoursesForm from "../components/bookAFreeTrialComponents/CoursesForm";
import SlotsForm from "../components/bookAFreeTrialComponents/SlotsForm";
import bg from "../assets/bg.webp";
import ISTTooltip from "../components/bookAFreeTrialComponents/ISTTooltip";
import NavFooterLayout from "../containers/NavFooterLayout";
function BookTrial() {
  // ! Ref for the progress bar
  const progressBarRef = useRef(null);
  const [progressBarWidth, setProgressBarWidth] = useState("0%");
  // ! Header and subheader states
  const [header, setHeader] = useState("Book a free trial");
  const [subHeader, setSubHeader] = useState("Limited spots left!");
  // ! Nav states for the tabs
  const [detailsClass, setDetailsClass] = useState(
    window.localStorage.detailsForm ? "done" : "current"
  );
  const [coursesClass, setCoursesClass] = useState(
    window.localStorage.coursesForm ? "done" : "pending"
  );
  const [slotClass, setSlotClass] = useState("pending");
  // ! State to manage the route
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  // ! Function to handle changes on route change
  const handleRoute = (route) => {
    setCurrentRoute(route);
  };

  // ! useEffect to maintain the status of a certain route
  useEffect(() => {
    if (window.localStorage.detailsForm) {
      setDetailsClass("done");
      setProgressBarWidth("31%");
    }
    if (window.localStorage.coursesForm) {
      setCoursesClass("done");
      setProgressBarWidth("66%");
    }
  }, []);

  // ! useEffect to update on every route change
  useEffect(() => {
    switch (window.location.pathname) {
      case "/book-a-trial":
        setHeader("Book a free trial");
        setSubHeader("Limited spots left!");
        if (detailsClass !== "done") setDetailsClass("current");
        if (coursesClass !== "done") setCoursesClass("pending");
        if (slotClass !== "done") setSlotClass("pending");
        // progressBarRef.current.style.width = "31%";
        break;
      case "/book-a-trial/courses-selection":
        let childName = JSON.parse(window.localStorage.detailsForm).childName;
        setHeader("Course Selection");
        if (childName.toLowerCase()[childName.length - 1] === "s") {
          setSubHeader(`Recommended courses for ${childName}' age!`);
        } else {
          setSubHeader(`Recommended courses for ${childName}'s age!`);
        }
        if (coursesClass !== "done") setCoursesClass("current");
        if (detailsClass !== "done") setDetailsClass("pending");
        if (slotClass !== "done") setSlotClass("pending");
        // progressBarRef.current.style.width = "65%";
        break;
      case "/book-a-trial/slot-selection":
        setHeader("Your preferred slots");
        setSubHeader(
          `${window.localStorage.courseBookingCount} slots booked for ${
            JSON.parse(window.localStorage.coursesForm).selectedCourses[0]
          } today!`
        );
        if (slotClass !== "done") setSlotClass("current");
        if (detailsClass !== "done") setDetailsClass("pending");
        if (coursesClass !== "done") setCoursesClass("pending");
        // progressBarRef.current.style.width = "97%";
        break;
      default:
        break;
    }
    progressBarRef.current.style.width = progressBarWidth;
  }, [currentRoute, progressBarWidth]);

  // ! Function to update route from a child
  const changeRouteFromChild = (route) => {
    setCurrentRoute(route);
  };

  // ! Function to handle status of the tabs
  const tabsStatus = (source) => {
    switch (source) {
      case "/book-a-trial":
        if (detailsClass !== "done") {
          setDetailsClass("done");
          setProgressBarWidth("31%");
        }
        break;
      case "/book-a-trial/courses-selection":
        if (coursesClass !== "done") {
          setCoursesClass("done");
          setProgressBarWidth("66%");
        }
        break;
      case "/book-a-trial/slot-selection":
        if (slotClass !== "done") {
          setSlotClass("done");
          setProgressBarWidth("97%");
        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      <NavFooterLayout>
        <Router>
          <div className="book-a-trial-wrapper">
            <div className="book-a-trial">
              <div className="book-a-trial__left">
                <nav className="booking-nav">
                  <div className="progress" ref={progressBarRef}></div>
                  <ul>
                    <li>
                      <Link
                        to="/book-a-trial"
                        onClick={() => handleRoute("/book-a-trial")}
                      >
                        <span className={detailsClass}>1</span> Your details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          window.localStorage.detailsForm
                            ? "/book-a-trial/courses-selection"
                            : "#"
                        }
                        onClick={() =>
                          handleRoute("/book-a-trial/courses-selection")
                        }
                      >
                        <span className={coursesClass}>2</span> Course
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          window.localStorage.coursesForm
                            ? "/book-a-trial/slot-selection"
                            : "#"
                        }
                        onClick={() =>
                          handleRoute("/book-a-trial/slot-selection")
                        }
                      >
                        <span className={slotClass}>3</span> Book
                      </Link>
                    </li>
                  </ul>
                </nav>
                <h1 className="booking-form__header" style={{}}>
                  {header}
                  {currentRoute === "/book-a-trial/slot-selection" ? (
                    <ISTTooltip />
                  ) : null}
                </h1>
                <p className="booking-form__sub-header">{subHeader}</p>
                <Switch>
                  <Route path="/book-a-trial/courses-selection">
                    <CoursesForm
                      switchRoute={changeRouteFromChild}
                      tabsStatus={tabsStatus}
                    />
                  </Route>
                  <Route path="/book-a-trial/slot-selection">
                    <SlotsForm
                      switchRoute={changeRouteFromChild}
                      tabsStatus={tabsStatus}
                    />
                  </Route>
                  <Route path="/book-a-trial">
                    <DetailsForm
                      switchRoute={changeRouteFromChild}
                      tabsStatus={tabsStatus}
                    />
                  </Route>
                </Switch>
              </div>
              <div className="book-a-trial__right">
                <img src={bg} alt="imageart" />
              </div>
            </div>
          </div>
        </Router>
      </NavFooterLayout>
    </>
  );
}

export default BookTrial;
