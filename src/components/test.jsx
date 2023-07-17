import React, { useState } from "react";
import testImg from "../assets/background-test.png";
import testLogo from "../assets/test-logo.svg";
import questionImg from "../assets/rectangle-question.png";
import "../styles/test.css";

function Test(props) {
  // 질문 리스트
  const texts = [
    "나는 여행지를 선택할 때 주로",
    "여행 떠날 때 계획은",
    "여행 경비는",
    "숙소를 구할 때",
    "여행지에서 식사할 때",
    "여행지에서 길을 잃었을 때",
    "화려한 건축물을 보며 드는 생각은",
    "아침을 늦잠 잔 친구에게",
    "친구가 쓸데없는 기념품을 살 때",
    "여행을 다녀온 후",
  ];
  const buttons = [
    ["사람이 많은 도시로", "나무가 많은 자연으로"],
    ["내가 걷는 길이 곧 여행코스", "계획은 필수"],
    ["당장 국제거지만 안되면 되지!", "걸어다니는 계산기로 변신"],
    ["저녁에 바베큐 파티를 여는 곳", "조용하고 아늑한 곳"],
    ["유명한 맛집을 작정하고 노리는 맛집헌터", "길걷다가 발견한 길거리 가게"],
    ["왔던 길로 돌아가는 헨젤과 그레텔", "자꾸 걸어나가면 어딘가 길이 있겠지"],
    ["어떤 방법으로 지었을까?", "와 멋있다.."],
    ["여행은 역시 피곤하긴하지", "내일은 시간 지키자"],
    ["그래 너가 행복하다면..", "그거 결국 쓰레기 된다?"],
    ["스윗홈.. 침대로 점프!", "캐리어를 열고 짐을 정리한다"],
  ];

  const [textIndex, setTextIndex] = useState(0);
  const progress = ((textIndex + 1) / texts.length) * 100;

  const handleButtonClick = () => {
    // 버튼 클릭 시 텍스트 변경
    const nextIndex = (textIndex + 1) % texts.length;
    setTextIndex(nextIndex);
  };

  const currentText = texts[textIndex];
  const buttonLabels = buttons[textIndex];

  return (
    <div className="imageContainer">
      <img src={testImg} className="image" />
      <div>
        <div className="test-logo">
          <img src={testLogo} className="test-logo-img" />
        </div>
        <div className="question-text">{currentText}</div>
        <button onClick={handleButtonClick} className="button1">
          {buttonLabels[0]}
        </button>
        <button onClick={handleButtonClick} className="button2">
          {buttonLabels[1]}
        </button>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Test;
