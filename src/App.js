import logo from './logo.svg';
// import React from 'react'
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Main from './Main';
import Auth from "./Auth"
import Profile from './Profile';
import TestPage from "./components/mbti/startApp"
import QuestionPage from "./components/mbti/questionApp";
import ResultPage from './components/mbti/resultPage';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import testImg from "./assets/background-result.png";
import testLogo from "./assets/test-logo.svg";

function App() {
  return (
    // <Router>
    //   <div className="App"> {/* 이 부분이 Router의 하위로 이동되었습니다 */}
    //     <Routes>
    //       <Route path="/" element={<Main />} />
    //       <Route path="/oauth/kakao/callback" element={<Auth />} />
    //       <Route path="/profile" element={<Profile />} />
    //     </Routes>
    //   </div>
    //   <Route path="/" exact component={Test} />
    //   {/* 다른 라우트 정의 */}
    // </Router>
    <div className="image-container">
      <div className="testImg">
        <img src={testImg} />
        <div className="test-logo">
          <img src={testLogo} className="test-logo-img" />
        </div>
        <section>
          <Router>
            <Routes>
              <Route path="/" element={<TestPage />} />
              <Route path="/question" element={<QuestionPage />} />
              <Route path="/result/:result" element={<ResultPage />} />
            </Routes>
          </Router>
        </section>
      </div>
    </div>

  )
}

export default App;
