import React from "react";
import resultImg from "../../assets/background-result.png";
import testLogo from "../../assets/test-logo.svg";
import resultObject from "../common/resultObject.json";
import "../../styles/test.css";
import { useParams } from "react-router-dom";

import enfpImage from "../../assets/enfp.png";

const ResultPage = ({ match }) => {
  // match.params.result에서 URL에서 전달된 결과값을 가져옴
  const params = useParams();
  const mbtiResult = params.result;
  // const mbtiResult = match.params.result;

  // `mbtiResult` 값을 사용하여 `resultObject`에서 해당하는 데이터를 가져옵니다
  const resultData = resultObject[mbtiResult];

  // resultData에서 필요한 정보들을 추출합니다
  const { id, nick, img, description, like, hate } = resultData;

  return (
    <div>
      <div className="resultImageContainer">
        <img src={resultImg} className="image" />
      </div>
      <div className="result-container">
        <p style={{ fontSize: "30px" }}>
          [{id}] {nick}
        </p>
        <p style={{ fontSize: "16px" }}>{description}</p>
        <div className="like-hate-container">
          <div className="like-container">
            <h2>LIKE</h2>
            {like.map((item) => (
              <div key={item.img}>
                <img src={item.img} alt={item.sub} />
                <p>{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="hate-container">
            <h2>HATE</h2>
            {hate.map((item) => (
              <div key={item.img}>
                <img src={item.img} alt={item.sub} />
                <p>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
