import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const REST_API_KEY = "548e72cf3393832befd099b4d142ec85"
    const REDIRECT_URI = "http://localhost:8080/account/kakao/callback"
    const CLIENT_SECRET = "92ZjB44BdhmbxFHXTX4GrDro372N0Fhf"

    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate()
    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            REDIRECT_URI: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET, 
        })

        try {
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            )
            window.Kakao.init(REST_API_KEY)
            window.Kakao.Auth.setAccessToken(res.data.access_token)
            console.log("Access Token : ", res.data.access_token)
            
            navigate("/profile", {replace: true})
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getToken()
    }, [])

    return null;
}

export default Auth;