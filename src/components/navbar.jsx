import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Staetless functional component

class NavBar extends Component {
  navigateToCart = {
    pathname: "/cart",
    param1: "Par1"
  };

  render() {
    let totalItemsCount;

    if (JSON.parse(localStorage.getItem("state")) !== null) {
      console.log("Inside localstorage");
      totalItemsCount = JSON.parse(localStorage.getItem("state")).totalItems;
    } else if (this.props.totalItems !== null) {
      console.log("Inside props", this.props.totalItems);
      totalItemsCount = this.props.totalItems;
    } else {
      console.log("Inside 0");
      totalItemsCount = 0;
    }

    return (
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-link">
            <Link to="/items">Products</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Link className="nav-link" to="/cart">
            <h5>
              Total Items :
              <span className="badge badge-pill badge-primary">
                {totalItemsCount}
              </span>
            </h5>
          </Link>
        </form>
      </nav>
    );
  }
}

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired
};

export default NavBar;
