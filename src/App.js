import React, { lazy, Suspense } from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// ! Lazy loaded routes
const Homepage = lazy(() => import("./pages/Homepage.js"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <Router>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
