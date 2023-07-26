import React from "react";

function ChooseButton(props) {
  const { onClick, label } = props;

  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
}

export default ChooseButton;
