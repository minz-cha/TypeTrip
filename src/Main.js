import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const REST_API_KEY = "548e72cf3393832befd099b4d142ec85";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=gender,age_range,birthday,account_email`;

  const openKakaoLogin = () => {
    window.open(KAKAO_AUTH_URL, "_self");
  };

  return (
    <div>
      <h1>
        <button onClick={openKakaoLogin}>Kakao Login</button>
      </h1>
    </div>
  );
};

export default Main;
