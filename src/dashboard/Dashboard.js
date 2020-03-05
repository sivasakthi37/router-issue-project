import React from "react";
// import {Link} from "react-router";
import { Link } from "react-router-dom";

export const Dashboard = props => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-dashboard">
          <ul className="nav navbar-nav">
            <li>
              <Link to={"/home"} activeStyle={{ color: "red" }}>
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} activeClassName={"active"}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
