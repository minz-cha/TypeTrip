import React from "react";
import MainHeader from "../components/header";
// import ElevateScroll from "../components/elevateScroll";
import "../styles/main.css";
import MainBackground from "../components/mainBackground";
import Search from "../components/search";
import FreeSolo from "../components/searchTest";
import MiniBoard from "../components/miniBoard";
import OutlinedCard from "../components/card";
import SimpleContainer from "../components/backgroundContainer";
import WriteInfoContainer from "../components/writeInfoContainer";
// import MiniBoard from "../components/miniBoard";

const MainPage = () => {
  return (
    <div>
      {/* <ElevateScroll /> */}
      <MainBackground />
      <MainHeader />
      <Search />
      {/* <SimpleContainer /> */}
      {/* <WriteInfoContainer /> */}
      {/* <MiniBoard /> */}
      {/* <OutlinedCard /> */}
      {/* <MiniBoard /> */}
      {/* <BoardContainer /> */}
    </div>
  );
};

export default MainPage;
