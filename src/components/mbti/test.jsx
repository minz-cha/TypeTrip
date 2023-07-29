import React, { useState } from "react";
import testImg from "../../assets/background-result.png";
import testLogo from "../../assets/test-logo.svg";
import QuestionApp from "../mbti/questionApp";
import "../../styles/test.css";

function Test(props) {
  return (
    <div className="image-container">
      <div className="testImg">
        <img src={testImg} />
        <div className="test-logo">
          <img src={testLogo} className="test-logo-img" />
        </div>
        <section>
          <QuestionApp />
        </section>
      </div>
    </div>
  );
}

export default Test;
