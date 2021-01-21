import React from "react";
import "./App.css";
import { LoginUi } from "./HONG_ANH/LoginUi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PageNotFound } from "./HONG_ANH/PageNotFound";
import { Dashboard } from "./HONG_ANH/Dashboard";

function App() {
  const isLogined = localStorage.getItem("isLogined");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {isLogined ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LoginUi />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
