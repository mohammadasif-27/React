import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState("Enter text here");

  // Convert text to uppercase
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);

    let newText = text.toUpperCase();
    setText(newText);

    if (props.showAlert) {
      props.showAlert("Text converted to uppercase", "Success");
    }
  };

  // Change text when typing
  const handleOnChange = (event) => {
    console.log("On change");

    setText(event.target.value);
  };

  // Convert text to lowercase
  const lowToClick = () => {
    console.log("Lowercase was clicked: " + text);

    let newText = text.toLowerCase();
    setText(newText);

    if (props.showAlert) {
      props.showAlert("Text converted to lowercase", "Success");
    }
  };

  // Count characters
  const strCount = () => {
    console.log("Count number of characters: " + text);
    console.log("Total characters: " + text.length);

    if (props.showAlert) {
      props.showAlert(
        `Total characters: ${text.length}`,
        "Count"
      );
    }
  };

  return (
    <>
      <div className="mb-3">

        <h1>Text Utility</h1>

        <label htmlFor="MyBox" className="form-label">
          Enter your text
        </label>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="3"
        ></textarea>

      </div>

      <button
        className="btn btn-primary mx-1"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>

      <button
        className="btn btn-primary mx-1"
        onClick={lowToClick}
      >
        Convert to Lowercase
      </button>

      <button
        className="btn btn-primary mx-1"
        onClick={strCount}
      >
        Count Characters
      </button>
    </>
  );
}
