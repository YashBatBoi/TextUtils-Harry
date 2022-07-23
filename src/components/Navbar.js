import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// this is also call a function based component ~function Navbar()~
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "danger" ? "light" : props.mode
      } bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.mode === "danger"
              ? "light"
              : "dark" && props.mode === "dark"
              ? "light"
              : "dark"
          }`}
          to="/home"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link active text-${
                  props.mode === "danger"
                    ? "light"
                    : "dark" && props.mode === "dark"
                    ? "light"
                    : "dark"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link text-${
                  props.mode === "danger"
                    ? "light"
                    : "dark" && props.mode === "dark"
                    ? "light"
                    : "dark"
                }`}
              >
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "dark"
                ? "light"
                : "dark" && props.mode === "danger"
                ? "light"
                : "dark"
            } mx-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleRedMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable RedMode
            </label>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "dark"
                ? "light"
                : "dark" && props.mode === "danger"
                ? "light"
                : "dark"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// This we are making an check that afterwards we can not put the another props value to another form of datatypes

// Here we have to put this "p" small-case and "T" in uppercase like "Navbar.propTypes"
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// Specifies the default values for props:
Navbar.defaultProps = {
  title: "Set title here",
  about: "About-Us",
};
