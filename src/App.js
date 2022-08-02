import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // This is for making the backgroundColor to Red
  const toggleRedMode = () => {
    if (mode === "light" || mode === "dark") {
      setMode("danger");
      document.body.style.backgroundColor = "#DA1212";
      for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
        document.querySelectorAll(".btn")[i].classList.add("btn-warning");
      }
      showAlert("Red mode has been enabled", "warning");
    } else if (mode === "dark" || mode === "danger") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
        document.querySelectorAll(".btn")[i].classList.remove("btn-warning");
      }
      showAlert("Light mode has been disabled", "success");
    }
  };

  // This is for making the backgroundColor to Black
  const toggleMode = () => {
    if (mode === "light" || mode === "danger") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    } else if (mode === "dark" || mode === "danger") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text below to analyze"
          mode={mode}
        />
        {/* </Route> */}
        {/* <Route exact path="/about">
              <About />
            </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
