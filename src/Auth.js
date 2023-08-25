import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const REST_API_KEY = "548e72cf3393832befd099b4d142ec85";
  const REDIRECT_URI = "http://localhost:8080/account/kakao/callback";
  const CLIENT_SECRET = "92ZjB44BdhmbxFHXTX4GrDro372N0Fhf";

  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      // 비동기적으로 액세스 토큰 받아오는 await, 서버로부터 받은 응답데이터 -> res
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        qs.stringify(payload)
      );
      const accessToken = res.data.access_token;
      localStorage.setItem("AccessToken", accessToken);

      //서버로 보내는 로직을 짜
      const serverResponse = await axios.post(
        "http://spring.jmandu.duckdns.org/member/login",
        { accessToken }
      );

      console.log("Server Response: ", serverResponse.data);

      if (serverResponse.data.message === "존재하지 않는 유저입니다") {
        navigate(`/RegisterModal?token=${res.data.access_token}`, {
          replace: true,
        });
      } else if (serverResponse.data.message === "이미 존재하는 유저입니다") {
        navigate("/", { replace: true }); //홈화면 경로
      } else {
        console.error("알 수 없는 응답");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchSessionData = async () => {
  //   const token = localStorage.getItem("accessToken");

  //   if (!token) {
  //     console.error("AccessToken을 찾을 수 없음");
  //     return;
  //   }

  //   try {
  //     // 토큰을 사용하여 세션 데이터를 가져오는 API 호출
  //     const response = await axios.get("https://example.com/api/session", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     // 세션 데이터 로컬 스토리지에 저장
  //     localStorage.setItem("sessionData", JSON.stringify(response.data));

  //     console.log("세션 데이터 가져오기 성공", response.data);
  //   } catch (error) {
  //     console.error("세션 데이터 가져오기 오류", error);
  //   }
  // };

  useEffect(() => {
    getToken();
    // fetchSessionData();
  }, []);

  return null;
};

export default Auth;
