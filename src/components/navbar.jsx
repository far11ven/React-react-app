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
                {this.props.totalItems ||
                  JSON.parse(localStorage.getItem("state")).totalItems}
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
