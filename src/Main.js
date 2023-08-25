import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const Main = () => {
  const REST_API_KEY = "548e72cf3393832befd099b4d142ec85";
  const REDIRECT_URI = "http://spring.jmandu.duckdns.org/member/login";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=gender,age_range,birthday`;
  const SERVICE_APP_ADMIN_KEY = "93b81bb6caa51bfebe35e51f0d086711";
  const authorization = `KakaoAK ${SERVICE_APP_ADMIN_KEY}`;

  return (
    <div>
      <h1>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </h1>
    </div>
  );
};

// const withdrawal = async () => {
//   try {
//     const res = await axios.get("https://kapi.kakao.com/v1/user/ids", {
//       headers: {
//         Authorization: authorization,
//       },
//     });
//     console.log(res.data.elements);
//     res.data.elements.forEach(async (id) => {
//       console.log(id);
//       const payload = qs.stringify({
//         target_id_type: "user_id",
//         target_id: id,
//         scopes: ["gender", "age_range", "birthday"],
//       });
//       const res = await axios.post(
//         "https://kapi.kakao.com/v2/userM/revoke/scopes",
//         payload,
//         {
//           headers: {
//             Authorization: authorization,
//           },
//         }
//       );
//       console.log(res.data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const agree = async () => {
//   try {
//     const res = await axios.get("https://kapi.kakao.com/v1/user/ids", {
//       headers: {
//         Authorization: authorization,
//       },
//     });
//     console.log(res.data.elements);
//     res.data.elements.forEach(async (id) => {
//       console.log(id);
//       const payload = qs.stringify({
//         target_id_type: "user_id",
//         target_id: id,
//       });
//       const res = await axios.post(
//         "https://kapi.kakao.com/v1/user/service/terms",
//         payload,
//         {
//           headers: {
//             Authorization: authorization,
//           },
//         }
//       );
//       console.log(res.data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export default Main;
