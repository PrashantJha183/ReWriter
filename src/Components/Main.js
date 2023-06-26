import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Main(props) {
  const [text, setText] = useState("");

  const UpperClick = () => {
    if (text === text.toUpperCase()) {
      props.chetawani("Already in uppercase", "success");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.chetawani("Converted to uppercase", "success");
    }
  };

  const LowerClick = () => {
    if (text === text.toLowerCase()) {
      props.chetawani("Already in lowercase", "success");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.chetawani("Converted to lowercase", "success");
    }
  };

  const Clear = () => {
    let newText = "";
    setText(newText);
    props.chetawani("Textbox got cleared", "success");
  };

  const Copy = () => {
    let newText = document.getElementById("exampleFormControlTextarea1").value;
    navigator.clipboard.writeText(newText);
    props.chetawani("Text got copied", "success");
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  const RemoveExtraSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.chetawani("Extra spaces had been removed", "success");
  };
  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.type}</h1>
        </label>
        <textarea
          className="form-control py-3"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={HandleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "dark" ? "white" : "black",
            resize: "none",
          }}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={UpperClick}
      >
        {props.buttonValue}
      </button>

      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={LowerClick}
      >
        {props.buttonvalue}
      </button>

      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={Clear}
      >
        {props.value}
      </button>

      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={Copy}
      >
        {props.CopyValue}
      </button>

      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-1 my-1"
        onClick={RemoveExtraSpace}
      >
        {props.Space}
      </button>

      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.replace(/\s+/g, "").trim().length} characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

Main.propTypes = {
  type: PropTypes.string.isRequired,
  buttonValue: PropTypes.string.isRequired,
  buttonvalue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  CopyValue: PropTypes.string.isRequired,
  Space: PropTypes.string.isRequired,
};

Main.defaultProps = {
  type: "Kuch nhh kuch likhna padega",
  buttonValue: "Bada",
  buttonvalue: "Chota",
  value: "Saaf hogaya",
  CopyValue: "Chapo",
  Space: "Khali jagah saaf karo",
};
