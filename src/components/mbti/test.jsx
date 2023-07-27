import React, { useState } from "react";
import testImg from "../../assets/background-test.png";
import testLogo from "../../assets/test-logo.svg";
// import questionImg from "../assets/rectangle-question.png";
import QuestionApp from "../mbti/questionApp";
import "../../styles/test.css";

function Test(props) {
  return (
    <div className="imageContainer">
      <img src={testImg} className="image" />
      <div>
        <div className="test-logo">
          <img src={testLogo} className="test-logo-img" />
        </div>
        <QuestionApp />
      </div>
      {/* <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div> */}
    </div>
  );
}

export default Test;
