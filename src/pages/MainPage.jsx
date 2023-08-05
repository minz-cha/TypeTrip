import React from "react";
import MainHeader from "../components/header";
// import ElevateScroll from "../components/elevateScroll";
import "../styles/main.css";
import MainBackground from "../components/mainBackground";
import Search from "../components/search";

const MainPage = () => {
  return (
    <div>
      {/* <ElevateScroll /> */}
      <MainBackground />
      <MainHeader />
      <Search />
      {/* <BoardContainer /> */}
    </div>
  );
};

export default MainPage;
