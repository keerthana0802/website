// import React, { lazy, Suspense } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllCourses from "./pages/AllCourses";
import PaymentPOC from "./pages/PaymentPOC";
import Checkout from "./pages/Checkout";
import PaymentSuccessful from "./pages/PaymentSuccessful";
// ! Lazy loaded routes
// const Homepage = lazy(() => import("./pages/Homepage.js"));
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/payment-successful">
            <PaymentSuccessful />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment-test">
            <PaymentPOC />
          </Route>
          <Route path="/all-courses">
            <AllCourses />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
