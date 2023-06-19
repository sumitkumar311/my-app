import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="section" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="section-top"  >
          <h2 className="heading" style={{ color: props.mode === "dark" ? "white" : "black" }}>
             Textassit
          </h2>
          <p className="main-para" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          A well-liked texting software that provide some function of text like changing uppercase.
          </p>
        </div>
        <div className="about-content" >
          <div className="main-content">
            <h3>Get to know Textassist!</h3>
            <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
              I Develop the Front-end of websites and web applications as a{" "}
              <span className="span-para">Frontend Web Developer</span>, which
              contributes to the overall success of the finished product. View a
              selection of my work under Projects. In order to benefit other
              members of the developer community, I also enjoy contributing
              content that is linked to the knowledge I have acquired over the
              years in web development. Please feel free to connect with me or
              follow me
              where I share relevant <span>Web Development</span> and
              Programming stuff.
              <br />
              <br />
              We work with wonderful customers all around the world to create
              thoughtful and functional websites because we love what we do and
              we do what our clients enjoy. <br />
              <br />
              I'm interested in employment possibilities where I can grow,
              learn, and contribute. Please get in touch with me if you have a
              suitable opportunity that matches my qualifications and expertise.
            </p>
          </div>
          <div
            className="container"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <div className="mb-3">
              <label htmlFor="mybox" className="form-label">
                {props.text}
              </label>
              <textarea
                className="form-control"
                id="mybox"
                rows="8"
                value={text}
                onChange={handleOnChange}
              ></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>
              Convert to uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
              Convert to lowercase
            </button>
            <div
              className="container my-3"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <h1>Text summary</h1>
              <p>
                {text.split(" ").length} words and {text.length} characters
              </p>
              <p>
                {(0.008 * text.split(" ").length).toFixed(2)} minutes will take
                to read
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
