import PropTypes from "prop-types";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "light" ? "white" : "black",
        }}
      >
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "light" ? "white" : "black",
                }}
              >
                <b>Analyze text</b>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "light" ? "white" : "black",
                }}
              >
                ReWriter gives you a way to analyze your text quickly and
                efficiently. Be it word or characters.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "light" ? "white" : "black",
                }}
              >
                <b>Free to use</b>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "light" ? "white" : "black",
                }}
              >
                ReWriter is a free character count tool that provides instant
                character count & word count statistics for a given text,
                ReWriter reports the number of words and characters. Thus it is
                suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "light" ? "white" : "black",
                }}
              >
                <b>Browser compatible</b>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "light" ? "white" : "black",
                }}
              >
                This word counter software works in any web browser such as
                Chrome, FireFox, Safari, Bing, Opera. It suits to count
                characters in facebook, blog, excel document, pdf document,
                essays, etc.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

About.propTypes = {
  rang: PropTypes.string.isRequired,
};

About.defaultProps = {
  rang: "Kala",
};
