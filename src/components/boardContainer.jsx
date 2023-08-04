import React from "react";
import MiniBoard from "./miniBoard";

function BoardContainer(props) {
  return (
    <div className="board-list-container">
      <div className="mini-board-wrapper">
        <MiniBoard />
      </div>
      <div className="mini-board-wrapper">
        <MiniBoard />
      </div>
      <div className="mini-board-wrapper">
        <MiniBoard />
      </div>
    </div>
  );
}

export default BoardContainer;
