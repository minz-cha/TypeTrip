import React, { createRef, useEffect, useState } from "react";
import testImg from "../assets/background-test.png";
import testLogo from "../assets/test-logo.svg";
import { useHistory } from "react-router-dom";
// import questionImg from "../assets/rectangle-question.png";
import "../styles/test.css";
import questions from "../components/questionObject.json";

const QuestionApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  // const history = useHistory();
  const TOTAL_SLIDES = 10;
  const slideRef = createRef(null);
  const [mbti, setMbti] = useState([]);
  // const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // const nextSlideFir = () => {
  //   setMbti(mbti + questions[num].answers[0].type);
  //   setNum(num + 1);
  //   setCurrentSlide(currentSlide + 1);
  //   slideRef.current.style.transform += "translateX(-100vw)";
  // };
  // const nextSlideSec = () => {
  //   setMbti(mbti + questions[num].answers[1].type);
  //   setNum(num + 1);
  //   setCurrentSlide(currentSlide + 1);
  //   slideRef.current.style.transform += "translateX(-100vw)";
  // };
  const handleButtonClick = (answerIndex) => {
    const selectedAnswer = currentQuestion.answer[answerIndex];
    setMbti(mbti + selectedAnswer.type);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setCurrentSlide(currentSlide + 1);
    // slideRef.current.style.transform += "translateX(-100vw)";
  };

  const mbtichecker = () => {
    var map = {};
    var result = {};
    for (var i = 0; i < mbti.length; i++) {
      if (mbti[i] in map) {
        map[mbti[i]] += 1;
      } else {
        map[mbti[i]] = 1;
      }
    }
    console.log(mbti);
    // setTimeout(() => {
    //   const examResult = result.join("");
    //   history.push(`/result/${examResult}`);
    // }, 3000);
  };

  useEffect(() => {
    currentSlide > TOTAL_SLIDES && mbtichecker();
  }, [currentSlide]);

  const currentQuestion = questions[currentQuestionIndex];
  const buttonLabels = currentQuestion.answer.map((ans) => ans.content);

  return (
    <div className="question-container">
      {/* 이미지와 로고 등의 요소 */}
      <div>
        <div className="question-text">{currentQuestion.question}</div>
        {/* <button onClick={nextSlideFir} className="button1">
          {buttonLabels[0]}
        </button>
        <button onClick={nextSlideSec} className="button2">
          {buttonLabels[1]}
        </button> */}
        <button onClick={() => handleButtonClick(0)} className="button1">
          {buttonLabels[0]}
        </button>
        <button onClick={() => handleButtonClick(1)} className="button2">
          {buttonLabels[1]}
        </button>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${(currentSlide / TOTAL_SLIDES) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuestionApp;
