import logo from './logo.svg';
// import React from 'react'
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Main from './Main';
import Auth from "./Auth"
import Profile from './Profile';
import StartPage from "./pages/MbtiStartPage"
import QuestionPage from "./pages/MbtiQuestionPage";
import ResultPage from './pages/MbtiResultPage';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

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
    <Router>
      <Routes>
        <Route path="/test" element={<StartPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result/:result" element={<ResultPage />} />
        <Route path="/main" element={<StartPage />} />
      </Routes>
    </Router>
  )
}

export default App;
