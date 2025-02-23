import React from "react";
import "../Style/main.css";
import "../Style/landingPage.css";

function Main() {
  return (
    <div className="container-fluid main-container">
      <div className="row mern-stack">
        <div
          className="col mern-text"
          style={{ backgroundColor: "var( --text-color)" }}
        >
          <h1>MERN</h1>
        </div>
        <div
          className="col mern-text "
          style={{ backgroundColor: "var(   --topic-color)" }}
        >
          <h1>STACK</h1>
        </div>
      </div>

      <div className="row bracket">
        <div className="col bracket-text">{"<"}</div>
        <div className="col bracket-text ">{">"}</div>
      </div>

      <div className="row content-section">
        <div className="col-1 col-sm-2 col-md-3 col-lg-4 btech-section">
          <div className="m-3 ">
            <h1 className="btech-title">BTech.</h1>
            <h3 className="btech-subtitle">ComputerScience</h3>
          </div>
        </div>
        <div className="col image-container">
          <img src="./Image/nitish.webp" alt="Nitish"  loading="lazy" />
        </div>
        <div className="col-1 col-sm-2 col-md-3 col-lg-4 nitish-section">
          <div className="m-3 ">
            <h1 className="nitish-title">NITISH.K</h1>
            <h3 className="nitish-subtitle">Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
