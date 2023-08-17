import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    accessToken: "",
    nickname: "",
    mbti: "",
    errormessage: "",
  };

  RegisterHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  RegisterClickHandler = () => {
    const { accessToken, nickname, mbti } = this.state;
    fetch("http://spring.jmandu.duckdns.org/member/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken,
        nickname,
        mbti,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        if (res.status === "SUCCESS") {
          localStorage.setItem("accessToken", res.data.token.accessToken);
          localStorage.setItem("refreshToken", res.data.token.refreshToken);
          console.log("회원가입 성공!");
        } else {
          this.setState({ errorMessage: res.message });
          console.error("회원가입 실패: ", res.message);
        }
      })
      .catch((error) => {
        console.error("회원가입 도중 오류 발생: ", error);
        this.setState({ errorMessage: "회원가입 도중 오류가 발생했습니다." });
      });
  };

  render() {
    const { isOpen, close } = this.props; //카카오 로그인에서 받아오기
    const { nickname, mbti } = this.state;

    return (
      <>
        {isOpen ? (
          <div className="modalOverlay" onClick={close}>
            <div className="modal">
              <div onClick={close}>
                <div className="RegisterModal">
                  <span className="close" onClick={close}>
                    &times;
                  </span>
                  <div className="modalContents" onClick={isOpen}>
                    <h2 className="ModalTitle">추가 정보 입력</h2>
                    <input
                      name="nickname"
                      className="RegisterNickname"
                      type="text"
                      value={nickname}
                      placeholder="닉네임"
                      onChange={this.RegisterHandler}
                    />
                    <select value={mbti} onChange={this.RegisterHandler}>
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
                    <button
                      className="RegisterBtn"
                      onClick={this.RegisterClickHandler}
                    >
                      {" "}
                      회원가입 완료{" "}
                    </button>
                    {errorMessage && <div>{errorMessage}</div>}{" "}
                    <div className="RegisterEnd">
                      <div className="RegisterLine">
                        아직 테스트를 안하셨나요?{" "}
                        <Link to="/signup">여행성향테스트 하러가기</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignIn;
