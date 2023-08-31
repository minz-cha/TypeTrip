import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const REQUEST_ADDRESS = "http://localhost:8080/member/login";
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href)

    const code = url.searchParams.get("code")

    console.log(code)
    
    axios.get(`${REQUEST_ADDRESS}?code=${code}`).then((res) => {
      if (res.data.status === "ERROR") {
        if (res.data.message === "존재하지 않는 유저입니다.") {
          navigate("/RegisterModal", { replace: true });
        }
      } else if (res.data.status === "SUCCESS") {
        navigate("/", { replace: true });
      } else {
        console.error("알 수 없는 응답");
      }
    }).catch((err) => {

    }).then(((v) => {

    }))
  }, [])
  
  return <div>Kakao Login</div>
};

export default Auth;
