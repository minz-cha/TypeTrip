import React, { createRef, useEffect, useState } from "react";
import testImg from "../assets/background-test.png";
import testLogo from "../assets/test-logo.svg";
import { useNavigate } from "react-router-dom";
import "../styles/test.css";
import questions from "../components/questionObject.json";

const QuestionApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();
  const TOTAL_SLIDES = 10;
  const slideRef = createRef(null);
  const [mbti, setMbti] = useState([]);

  const handleButtonClick = (answerIndex) => {
    const selectedAnswer = questions[currentQuestionIndex].answer[answerIndex];
    setMbti((prevMbti) => prevMbti.concat(selectedAnswer.type));

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(TOTAL_SLIDES + 1);
    }
  };

  const mbtichecker = () => {
    var map = {};
    const mbtiCounts = {};
    var result = {};
    // for (var i = 0; i < mbti.length; i++) {
    //   if (mbti[i] in map) {
    //     map[mbti[i]] += 1;
    //   } else {
    //     map[mbti[i]] = 1;
    //   }
    // }

    if (currentSlide > TOTAL_SLIDES) {
      const examResult = mbti.join("");

      // const countLetters = (str, letter) => str.split(letter).length - 1;

      // const findMostFrequentLetter = (str, letters) => {
      //   const counts = letters.map((letter) => countLetters(str, letter));
      //   const maxCount = Math.max(...counts);
      //   const mostFrequentLetters = letters.filter(
      //     (_, i) => counts[i] === maxCount
      //   );
      //   return mostFrequentLetters;
      // };

      // const EILetters = findMostFrequentLetter(mbti, ["E", "I"]);
      // const SNLetters = findMostFrequentLetter(mbti, ["S", "N"]);
      // const TFLetters = findMostFrequentLetter(mbti, ["T", "F"]);
      // const PJLetters = findMostFrequentLetter(mbti, ["P", "J"]);

      navigate(`/result/${examResult}`);
      console.log("mbti값", mbti);
    }

    // setTimeout(() => {
    //   const examResult = result.join("");
    //   history.push(`/result/${examResult}`);
    // }, 3000);
  };

  useEffect(() => {
    mbtichecker();
  }, [currentSlide, mbti]);

  const currentQuestion = questions[currentQuestionIndex];
  const buttonLabels = currentQuestion.answer.map((ans) => ans.content);

  return (
    <div className="question-container">
      <div>
        <div className="question-text">{currentQuestion.question}</div>
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
