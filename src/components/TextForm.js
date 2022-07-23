import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  
  const handleLowClick = () => {
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  
  const handleOnClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success")
  };
  
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from the text", "success")
  };
  
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.pitch = 0;
    msg.lang = "gujarati";
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speech talk is enabled", "success")
  };

  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743" && props.mode === "danger" ? "white" : "#042743"}}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            style={{background: props.mode === "dark" ? "grey" : "white" && props.mode === "danger" ? "grey" : "white", 
            color: props.mode === "dark" ? "white" : "#042743" && props.mode === "danger" ? "white" : "#042743"}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-1 my-1"
        >
          Speak
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743" && props.mode === "danger" ? "white" : "#042743"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(' ').filter(function(n) { return n !== '' }).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * parseFloat(text.split(" ").length).toFixed(2)} Minutes read
          {/* {0.008 * text.split(" ").length} Minutes read */}
        </p>
        <h2>Preview</h2>

        {/* Here we are representing that if the text.length is greater than 0 than it should print the text whatever we write in the textbox and if not then the string should be there that is written after the colon */}
        <p>{text.length > 0 ? text : <i>"Enter something in the textbox above to preview it here"</i>}</p>
      </div>
    </>
  );
}
