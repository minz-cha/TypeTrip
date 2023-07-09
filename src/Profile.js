import React, { useEffect, useState } from "react";
import qs from "qs";

const Profile = () => {
    const [user_id, setUserId] = useState()
    const [nickName, setNickName] = useState()
    const [profileImage, setProfileImage] = useState()

    const getProfile = async() => {
        try {
            let data = await window.Kakao.API.request({
                url: "/v2/user/me",
                data: qs.stringify({
                    property_keys: ["kakao_account.profile"]
                }),
            })
            console.log(data)
            setUserId(data.id)
            setNickName(data.properties.nickname)
            setProfileImage(data.properties.profile_image)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div>
            <h2>{user_id}</h2>
            <h2>{nickName}</h2>
            <img src={profileImage}></img>
        </div>
    )
}

export default Profile;