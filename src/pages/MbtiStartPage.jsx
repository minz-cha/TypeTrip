import React, { useState } from "react";
import testImg from "../assets/background-result.png";
import testLogo from "../assets/test-logo.svg";
import StartApp from "../components/mbti/startApp";
import "../styles/test.css";

const StartPage = () => {
  return (
    <div className="image-container">
      <div className="testImg">
        <img src={testImg} />
        <div className="test-logo">
          <img src={testLogo} className="test-logo-img" />
        </div>
        <section>
          <StartApp />
        </section>
      </div>
    </div>
  );
};

export default StartPage;
