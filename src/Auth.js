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

  //사용자 정보 서버에 전달 -> DB에 존재하는지 여부
  const createUserOrGetExisting = async (response) => {
    try {
      const email = response.data;
      const dataToSend = {
        email: email,
      };
      const userResponse = await axios.post(
        "https://example.com/api/users",
        dataToSend
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //카카오 로그인 성공 시, 사용자 정보 요청
  const getUserInfo = async () => {
    try {
      const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${window.Kakao.Auth.getAccessToken()}`,
        },
      });
      console.log(response.data);

      // 서버에 사용자 정보 전달
      createUserOrGetExisting(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
        payload
      );
      window.Kakao.init(REST_API_KEY);
      //액세스토큰 저장
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      localStorage.setItem("AccessToken", res.data.access_token);
      console.log("Access Token : ", res.data.access_token);

      // Get user info after successful login
      getUserInfo();

      navigate("/signup", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSessionData = async () => {
    try {
      // 토큰을 사용하여 세션 데이터를 가져오는 API 호출
      const response = await axios.get("https://example.com/api/session", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      // 세션 데이터 로컬 스토리지에 저장
      localStorage.setItem("sessionData", JSON.stringify(response.data));

      console.log("세션 데이터 가져오기 성공!", response.data);
    } catch (error) {
      console.error("세션 데이터 가져오기 오류!", error);
    }
  };

  //로그인 성공 후 호출
  fetchSessionData();

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default Auth;
