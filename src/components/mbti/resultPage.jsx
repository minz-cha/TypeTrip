import React, { useEffect } from "react";
import testImg from "../../assets/background-result.png";
import testLogo from "../../assets/test-logo.svg";
import resultObject from "../common/resultObject.json";
import "../../styles/test.css";
import { useParams } from "react-router-dom";

const ResultPage = ({ match }) => {
  // 결과에 대한 정보 반환
  const params = useParams();
  const mbtiResult = params.result;
  const resultData = resultObject[mbtiResult];
  const { id, nick, img, description, like, hate } = resultData;

  // id와 nick 값을 로컬 스토리지에 저장z
  useEffect(() => {
    localStorage.setItem("id", id);
    localStorage.setItem("nick", nick);
  }, [id, nick]);

  return (
    <div className="image-container">
      <div className="testImg">
        <img src={testImg} />
        <div className="test-logo">
          <img src={testLogo} className="test-logo-img" />
        </div>
        <div className="result-container">
          <div className="result-name">
            <p style={{ fontSize: "30px" }}>
              [{id}] {nick}
            </p>
            <span style={{ fontSize: "16px" }}>{description}</span>
          </div>
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
    </div>
  );
};

export default ResultPage;
