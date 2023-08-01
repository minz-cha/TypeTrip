import React from "react";
import testImg from "../assets/background-result2.png";
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
