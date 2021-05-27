// import React, { lazy, Suspense } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
// ! Lazy loaded routes
// const Homepage = lazy(() => import("./pages/Homepage.js"));
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
