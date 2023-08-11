import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BtnPeopleCount() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      style={{
        width: "70%",
        marginLeft: "30px",
        alignItems: "center",
      }}
    >
      <Button
        onClick={handleDecrement}
        style={{
          height: "55px",
        }}
      >
        -
      </Button>
      <TextField value={count} />
      <Button
        onClick={handleIncrement}
        style={{
          height: "55px",
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
