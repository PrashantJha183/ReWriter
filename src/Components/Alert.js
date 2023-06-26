import React from "react";

function Alert(props) {
  const upar = (word) => {
    const akshar = word.toLowerCase();
    return akshar.charAt(0).toUpperCase() + akshar.slice(1);
  };
  return (
    <>
      <div style={{ height: "40px" }}>
        {props.chetawani && (
          <div
            className={`alert alert-${props.chetawani.type} alert-dismissible fade show`}
            role="alert"
          >
            <div className="container">
              <strong>{upar(props.chetawani.type)}</strong>:{" "}
              {props.chetawani.message}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Alert;
