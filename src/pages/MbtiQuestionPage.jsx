import React, { useState } from "react";
import testImg from "../assets/background-result.png";
import testLogo from "../assets/test-logo.svg";
import "../styles/test.css";
import QuestionApp from "../components/mbti/questionApp";

const QuestionPage = () => {
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
};

export default QuestionPage;
