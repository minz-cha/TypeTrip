import React from "react";

const ResultPage = ({ match }) => {
  // match.params.result에서 URL에서 전달된 결과값을 가져옴
  const result = match.params.result;

  return (
    <div>
      <h1>당신의 MBTI 결과는 다음과 같습니다:</h1>
      <p>{result}</p>
    </div>
  );
};

export default ResultPage;
