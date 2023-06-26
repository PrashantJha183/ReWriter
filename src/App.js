import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("dark");
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

  const enableDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("light");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setBtnText("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  // const Toggle = () => {
  //   setExpanded(expanded ? false : "expanded");
  // };
  return (
    <>
      <BrowserRouter>
        <Navbar
          name="ReWriter"
          nav="Home"
          nav2="About"
          nav3="Help"
          type="Search"
          mode={mode}
          enableDarkMode={enableDarkMode}
          btnText={btnText}
        />
        <Alert chetawani={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  type="Try ReWriter - Word counter, Character counter, Remove extra spaces"
                  buttonValue="Convert to UpperCase"
                  buttonvalue="Convert to LowerCase"
                  value="Clear"
                  CopyValue="Copy"
                  Space="RemoveExtraSpace"
                  mode={mode}
                  chetawani={showAlert}
                />
              }
            ></Route>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
