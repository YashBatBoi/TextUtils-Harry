import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route } from "react-router-dom";
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
  // const toggleRedMode = () => {
  //   if (mode === "light" || mode === "dark") {
  //     setMode("danger");
  //     document.body.style.backgroundColor = "#DA1212";
  //     for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  //       document.querySelectorAll(".btn")[i].classList.add("btn-warning");
  //     }
  //     showAlert("Red mode has been enabled", "warning");
  //   } else if (mode === "dark" || mode === "danger") {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  //       document.querySelectorAll(".btn")[i].classList.remove("btn-warning");
  //     }
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };

  // So to make the color change and delete the first class of the body we will make a class to remove the body class
  const removeBodyClassess = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };

  // This is for making the backgroundColor to Black
  const toggleMode = (cls) => {
    removeBodyClassess();
    console.log(cls);
    document.body.classList.add(`bg-${cls}`);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Try TextUtils - Word counter, Character counter, Remover extra spaces"
          mode={mode}
        />
        {/* </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
