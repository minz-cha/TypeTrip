import React, { useState, useEffect } from "react";
import axios from "axios";
import sampleBoard from "../assets/sample-mini-board.png";
import sampleProfile from "../assets/sample-profile.png";
import "../styles/main.css";

function MiniBoard(props) {
  // const [miniDataList, setMiniDataList] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   //서버에서 데이터 받아오는 API
  //   axios
  //     .get("/api/mini-board")
  //     .then((response) => {
  //       setMiniDataList(response.data.result);
  //     })
  //     .catch((error) => {
  //       setError("데이터를 가져오는 데 실패하였습니다.");
  //     });
  // }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (miniDataList.length === 0) {
  //   return <div>Loading..</div>;
  // }

  // return (
  //   <div className="mini-board">
  //     {miniDataList.map((board, index) => (
  //       <div key={index}>
  //     <p>Nickname: {board.nickname}</p>
  //         <p>Gender: {board.gender}</p>
  //         <p>Location: {board.location}</p>
  //         <p>Age: {board.age}</p>
  //     </div>
  //     ))}
  //   </div>
  // );

  var test = "";

  return (
    <div className="mini-board-container">
      <div className="board-image">
        <img src={sampleBoard}></img>
      </div>
      <div className="info-container">
        <div className="line-divide"></div>
        <div className="profile-info">
          <div className="profile-image">
            <img src={sampleProfile}></img>
          </div>
          <div className="profile-nickname">
            <p>도라에몽</p>
          </div>
          <div className="profile-age-gender">
            <p>28세 남</p>
          </div>
          <div className="tag-container">
            <div className="tag-text">#계획적인 미식가</div>
          </div>
        </div>
        <div className="trip-info">
          <div className="date-text">
            <p>6.28-6.30</p>
          </div>
          <div className="duration-text">
            <p>2박 3일</p>
          </div>
          <div className="location-text">
            <p>부산</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBoard;
