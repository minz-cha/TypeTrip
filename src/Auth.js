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
      console.log(res)
    })
  })
  
  return <div>Kakao Login</div>
};

export default Auth;
