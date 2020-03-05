import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import "./App.css";

class PageForm extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="App__Aside">
          <img src="/images/logolog.jpg" alt="" className="Secure"></img>
        </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <Link
              to="/auth/sign-in"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign In
            </Link>
            <Link
              exact
              to="/"
              activeClassName="PageSwitcher__Item--Active"
              className="PageSwitcher__Item"
            >
              Sign Up
            </Link>
          </div>
          <div className="FormTitle">
            <Link
              to="/auth/sign-in"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </Link>{" "}
            or
            <Link
              exact
              to="/auth/sign-up"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </Link>
          </div>
          <Route
            exact
            path={["/auth", "/auth/sign-in"]}
            component={SignInForm}
          ></Route>
          <Route  path="/auth/sign-up" component={SignUpForm}></Route>
        </div>
      </div>
    );
  }
}

export default PageForm;
