import React, { lazy, Suspense } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import AllCourses from "./pages/AllCourses";
// import PaymentPOC from "./pages/PaymentPOC";
// import Checkout from "./pages/Checkout";
// import PaymentSuccessful from "./pages/PaymentSuccessful";
// import Feedback from "./pages/Feedback";
// import LiveClassLogin from "./pages/LiveClassLogin";
// import Meeting from "./pages/Meeting";
// import Faq from "./pages/Faq";
// import SingleCourse from "./pages/SingleCourse";
import Sitemap from "./components/Sitemap";
// ! Lazy loaded routes
const AllCourses = lazy(() => import("./pages/AllCourses.js"));
const PaymentPOC = lazy(() => import("./pages/PaymentPOC.js"));
const Checkout = lazy(() => import("./pages/Checkout.js"));
const PaymentSuccessful = lazy(() => import("./pages/PaymentSuccessful.js"));
const Feedback = lazy(() => import("./pages/Feedback.js"));
const LiveClassLogin = lazy(() => import("./pages/LiveClassLogin.js"));
const Meeting = lazy(() => import("./pages/Meeting.js"));
const Faq = lazy(() => import("./pages/Faq.js"));
const SingleCourse = lazy(() => import("./pages/SingleCourse.js"));
const AboutUs = lazy(() => import("./pages/AboutUs.js"));
const BookTrial = lazy(() => import("./pages/BookTrial.js"));
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/book-a-trial">
            <Suspense fallback={<div></div>}>
              <BookTrial />
            </Suspense>
          </Route>
          <Route path="/about-us">
            <Suspense fallback={<div></div>}>
              <AboutUs />
            </Suspense>
          </Route>
          <Route path="/explore-course/">
            <Suspense fallback={<div></div>}>
              <SingleCourse />
            </Suspense>
          </Route>
          <Route path="/faq">
            <Suspense fallback={<div></div>}>
              <Faq />
            </Suspense>
          </Route>
          <Route exact path="/live-class">
            <Suspense fallback={<div></div>}>
              <LiveClassLogin />
            </Suspense>
          </Route>
          <Route path="/live-class/meeting/">
            <Suspense fallback={<div></div>}>
              <Meeting />
            </Suspense>
          </Route>
          <Route path="/feedback">
            <Suspense fallback={<div></div>}>
              <Feedback />
            </Suspense>
          </Route>
          <Route path="/payment-successful">
            <Suspense fallback={<div></div>}>
              <PaymentSuccessful />
            </Suspense>
          </Route>
          <Route path="/checkout">
            <Suspense fallback={<div></div>}>
              <Checkout />
            </Suspense>
          </Route>
          <Route path="/payment-test">
            <Suspense fallback={<div></div>}>
              <PaymentPOC />
            </Suspense>
          </Route>
          <Route path="/all-courses">
            <Suspense fallback={<div></div>}>
              <AllCourses />
            </Suspense>
          </Route>
          <Route path="/">
            <Sitemap />
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
