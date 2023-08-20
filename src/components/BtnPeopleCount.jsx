import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const buttonStyle = {
  width: "8%",
  height: "55px",
  backgroundColor: "#3C4FFF",
  color: "#000000",
  fontSize: "24px",
  fontFamily: "Dovemayo_gothic",
};

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
    <React.Fragment>
      <Box
        position="relative"
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            width: "15%",
            fontFamily: "Dovemayo_gothic",
            marginLeft: "30px",
            fontSize: "20px",
          }}
        >
          모집인원
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <Button onClick={handleDecrement} style={buttonStyle}>
            -
          </Button>
          <TextField
            value={count}
            style={{
              backgroundColor: "#fff",
              fontSize: "18px",
              width: "80%",
              fontFamily: "Dovemayo_gothic",
              textAlign: "center",
              borderRadius: "5px",
            }}
          />
          <Button onClick={handleIncrement} style={buttonStyle}>
            +
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
