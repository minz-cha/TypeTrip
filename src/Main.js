import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const REST_API_KEY = "548e72cf3393832befd099b4d142ec85";
  const REDIRECT_URI = "http://spring.jmandu.duckdns.org/member/login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=gender,age_range,birthday,account_email`;

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const serverResponse = await axios.get(KAKAO_AUTH_URL);

      if (serverResponse.data.status === "ERROR") {
        if (serverResponse.data.message === "존재하지 않는 유저입니다.") {
          navigate("/RegisterModal", { replace: true });
        }
      } else if (serverResponse.data.status === "SUCCESS") {
        navigate("/", { replace: true });
      } else {
        console.error("알 수 없는 응답");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  return (
    <div>
      <h1>
        <button onClick={handleLogin}>Kakao Login</button>
      </h1>
    </div>
  );
};

export default Main;
