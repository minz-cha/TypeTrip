import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

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
        width: "90%",
        // marginLeft: "30px",
        alignItems: "center",
      }}
    >
      <Typography
        style={{
          width: "15%",
          fontSize: "1.5rem",
          fontFamily: "Dovemayo_gothic",
          marginLeft: "30px",
          fontSize: "20px",
        }}
      >
        모집인원
      </Typography>
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
