import React from "react";

//Staetless functional component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="#">
        Total Items :{" "}
        <span className="badge badge-pill badge-primary">
          {" "}
          {props.totalCounters}{" "}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
