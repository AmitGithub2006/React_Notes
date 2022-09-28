import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  // const handleUpClick = () => {
  //     let newText = text.toUpperCase();
  //     setText(newText)
  // }

  // const handleLoClick = () => {
  //     let newText = text.toLowerCase();
  //     setText(newText)
  // }

  // const handleClearClick = () => {
  //     let newText = "";
  //     setText(newText)
  // }

  // const handleOnChange = (event) => {
  //     setText(event.target.value);
  // }

  // const[text, setText] = useState("Enter Text Here");

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    // <div className="main">
    // <h2>{props.heading}</h2>
    // <textarea value={text} onChange={handleOnChange} cols="80" rows="10"></textarea>
    // <button onClick={handleUpClick}>Convert to Uppercase</button>
    // <button onClick={handleLoClick}>Convert to Lowercase</button>
    // <button onClick={handleClearClick}>Clear Text</button>
    // <h3>Your Text Summary</h3>
    // <p>{text.split(" ").length} words and {text.length} characters</p>
    // <p>{0.0076 * text.split(" ").length} minutes required to read</p>
    // <h3>Preview</h3>
    // <p>{text}</p>
    // </div>
  );
}

// We can set the type of props.
TextForm.propTypes = {
  title: PropTypes.string.isRequired,
};

// If we do not pass props in index.js, then we need to pass them here in the form of default props.
TextForm.defaultProps = {
  title: "TextUtils",
};
