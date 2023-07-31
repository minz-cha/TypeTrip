import React, { useState } from "react";
import testImg from "../assets/background-result2.png";
import testLogo from "../assets/test-logo.svg";
import StartApp from "../components/mbti/startApp";
import "../styles/test.css";
import ResultApp from "../components/mbti/resultApp";

const ResultPage = () => {
  return (
    <div className="image-container">
      <div className="testImg">
        <img src={testImg} />
        <section>
          <ResultApp />
        </section>
      </div>
    </div>
  );
};

export default ResultPage;
