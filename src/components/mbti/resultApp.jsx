import React, { useEffect } from "react";
import sampleImg from "../../assets/test-image.png";
import resultObject from "../common/resultObject.json";
import "../../styles/test.css";
import { useParams, useNavigate } from "react-router-dom";

const ResultApp = ({ match }) => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/main");
  };

  const params = useParams();
  const mbtiResult = params.result;
  const resultData = resultObject[mbtiResult];
  const { id, nick, img, description, like, hate } = resultData;

  useEffect(() => {
    localStorage.setItem("id", id);
    localStorage.setItem("nick", nick);
  }, [id, nick]);

  return (
    <div className="main-container">
      <div className="result-container">
        <div className="result-name">
          <p className="p1" style={{ fontSize: "20px" }}>
            [{id}] {nick}
          </p>
          <img src={sampleImg} className="sample"></img>
          <p className="p2" style={{ fontSize: "16px" }}>
            {description}
          </p>
        </div>
        <div className="like-hate-container">
          <div className="like-container">
            <h3>LIKE</h3>
            {like.map((item) => (
              <div key={item.img}>
                <img src={item.img} alt={item.sub} />
                <p>{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="hate-container">
            <h3>HATE</h3>
            {hate.map((item) => (
              <div key={item.img}>
                <img src={item.img} alt={item.sub} />
                <p>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-box">
          <button onClick={navigateToMain} className="main-btn">
            마음맞는 동행자 찾으러가기➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultApp;
