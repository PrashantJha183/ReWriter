import React, { useState } from "react";

export default function MyForm(props) {
  const [text, SetText] = useState("");

  const handleOnChange = (event) => {
    // console.log("OnChange");
    SetText(event.target.value);
  };

  const handleOnUpClick = () => {
    // console.log("UpperCase was clicked" + " " + text);
    let newText = text.toUpperCase();
    SetText(newText);
  };

  const handleOnDownClick = () => {
    // console.log("UpperCase was clicked" + " " + text);
    let newText = text.toLowerCase();
    SetText(newText);
  };

  const Clear = () => {
    // console.log("UpperCase was clicked" + " " + text);
    let newText = "";
    SetText(newText);
  };

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "5px solid white",
      });

      setBtnText("Enable Light mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  const OnCopy = () => {
    let cpy = document.getElementById("exampleFormControlTextarea1");
    cpy.select();
    navigator.clipboard.writeText(cpy.value);
  };

  return (
    <>
      <div>
        {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div> */}
        <div
          className="containner"
          // style={{
          //   backgroundColor: props.mode === "light" ? "grey" : "white",
          // }}
          style={myStyle}
        >
          <h3>{props.heading}</h3>
          <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label> */}
            <textarea
              className="form-control my-2"
              id="exampleFormControlTextarea1"
              rows="6"
              value={text}
              onChange={handleOnChange}
              style={myStyle}
              // style={{
              //   backgroundColor: props.mode === "light" ? "grey" : "white",
              //   color: props.mode === "grey" ? "white" : "dark",
              // }}
            ></textarea>

            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleOnUpClick}
            >
              Convert to UpperCase
            </button>

            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleOnDownClick}
            >
              Convert to LowerCase
            </button>

            <button className="btn btn-primary my-3 mx-2" onClick={toggleStyle}>
              {btnText}
            </button>

            <button className="btn btn-primary my-3 mx-2" onClick={OnCopy}>
              Copy
            </button>

            <button className="btn btn-primary my-3 mx-2" onClick={Clear}>
              Clear
            </button>
          </div>
        </div>

        <div
          className="container"
          // style={{
          //   backgroundColor: props.mode === "light" ? "grey" : "white",
          // }}
          style={myStyle}
        >
          <h2>Your Text Summary</h2>
          <p>
            {text.split("").length} words and {text.length} characters
          </p>
          <p>Time required to read: {0.008 * text.split("").length} minutes</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
