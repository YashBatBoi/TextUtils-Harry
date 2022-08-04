import React from "react";
import PropTypes from "prop-types";

// this is also call a function based component ~function Navbar()~
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "light" : props.mode
        } bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a
          className={`navbar-brand text-${props.mode === "dark" ? "light" : "dark"
            }`}
          href="#"
        >
          {props.title}
        </a>
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
              <a
                href="#"
                className={`nav-link active text-${props.mode === "dark" ? "light" : "dark"
                  }`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link text-${props.mode === "dark" ? "light" : "dark"
                  }`}
              >
                {props.about}
              </a>
            </li>
          </ul>
          {/* <div
            className={`form-check form-switch text-${props.mode === "dark"
              ? "light"
              : "dark" && props.mode === "danger"
                ? "light"
                : "dark"
              } me-3`}
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
          </div> */}

          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("primary");
              }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("danger");
              }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("success");
              }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("warning");
              }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("light");
              }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("dark");
              }}
            ></div>
          </div>

          {/* <div
            className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"
              }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode(null);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div> */}
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
