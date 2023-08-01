import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/test.css";

function StartApp(props) {
  const navigate = useNavigate();

  const navigateToTest = () => {
    navigate("/question");
  };

  return (
    <div className="main-container">
      <div className="start-box">
        <p></p>
        <div className="start-name">
          <p className="start-p1" style={{ fontSize: "30px" }}>
            나의 '여행 MBTI'는?
          </p>
          <p className="start-p2" style={{ fontSize: "16px" }}>
            여행가기 전 알아보는 나의 여행 성향!
          </p>
        </div>
      </div>
      <div className="bottom-box">
        <button onClick={navigateToTest}>시작하기</button>
      </div>
    </div>
  );
}

export default StartApp;