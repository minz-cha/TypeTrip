import logo from './logo.svg';
import React from 'react'
import './App.css';
import Main from './Main';
import Auth from "./Auth"
import Profile from './Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
