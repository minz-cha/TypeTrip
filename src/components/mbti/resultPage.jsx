import React, { useEffect } from "react";
import resultImg from "../../assets/background-result.png";
import testLogo from "../../assets/test-logo.svg";
import resultObject from "../common/resultObject.json";
import "../../styles/test.css";
import { useParams } from "react-router-dom";

import enfpImage from "../../assets/enfp.png";

const ResultPage = ({ match }) => {
  // 결과에 대한 정보 반환
  const params = useParams();
  const mbtiResult = params.result;
  const resultData = resultObject[mbtiResult];
  const { id, nick, img, description, like, hate } = resultData;

  // id와 nick 값을 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("id", id);
    localStorage.setItem("nick", nick);
  }, [id, nick]);

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
