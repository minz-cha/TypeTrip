import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [travelmbti, setMbti] = useState("");

  const handleSignUp = async () => {
    try {
      const userData = {
        nickname: nickname,
        password: password,
        travelmbti: travelmbti,
        accessToken: localStorage.getItem("accessToken"),
      };

      // 서버 엔드포인트 URL
      const serverUrl = "https://example.com/api/signup";

      // 서버로 POST 요청 보내기
      const response = await axios.post(serverUrl, userData);

      // 응답 처리 (예: 회원가입 성공 메시지)
      console.log("회원가입 성공!", response.data);
      // 회원가입 성공 시 로그인 처리 (JWT 토큰 발급 등)
      // 이 부분은 서버로부터 JWT 토큰을 받아와 로컬 스토리지에 저장하는 로직을 추가해야 합니다.

      const loginResponse = await axios.post("https://example.com/api/login", {
        accessToken: response.data.accessToken, // 회원가입 성공 시 발급받은 accessToken 사용
      });

      // 서버로부터 받은 JWT 토큰을 로컬 스토리지에 저장
      localStorage.setItem("accessToken", loginResponse.data.token);

      // 로그인 성공 시 페이지 이동
      navigate("/profile", { replace: true });
    } catch (error) {
      // 오류 처리
      console.error("회원가입 오류!", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={travelmbti} onChange={(e) => setMbti(e.target.value)}>
        <option value="">--여행 성향을 선택해 주세요--</option>
        <option value="성향1">성향1</option>
        <option value="성향2">성향2</option>
        <option value="성향3">성향3</option>
        <option value="성향4">성향4</option>
        <option value="성향5">성향5</option>
        <option value="성향6">성향6</option>
        <option value="성향7">성향7</option>
        <option value="성향8">성향8</option>
      </select>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default SignUpForm;
