import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataCalendar from "./DateCalendar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const buttonStyle = {
  width: "50%",
  height: "55px",
  backgroundColor: "#fff",
  color: "#000000",
  fontSize: "18px",
  fontFamily: "Dovemayo_gothic",
};

export default function BtnCalendar() {
  const [openCalendar1, setOpenCalendar1] = useState(false);
  const [openCalendar2, setOpenCalendar2] = useState(false);

  const handleToggleCalendar1 = () => {
    setOpenCalendar1(!openCalendar1);
  };

  const handleToggleCalendar2 = () => {
    setOpenCalendar2(!openCalendar2);
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
          날짜선택
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <Button onClick={handleToggleCalendar1} style={buttonStyle}>
            <CalendarMonthIcon /> 여행 시작
          </Button>
          <Typography
            style={{
              fontFamily: "Dovemayo_gothic",
              fontSize: "20px",
              marginLeft: "12px",
              marginRight: "12px",
            }}
          >
            ~
          </Typography>
          <Button onClick={handleToggleCalendar2} style={buttonStyle}>
            <CalendarMonthIcon /> 여행 끝
          </Button>
          {openCalendar1 && (
            <Box position="absolute" zIndex="1" top="60px" left="135px">
              <DataCalendar
                open={openCalendar1}
                handleClose={handleToggleCalendar1}
              />
            </Box>
          )}
          {openCalendar2 && (
            <Box position="absolute" zIndex="1" top="60px" left="490px">
              <DataCalendar
                open={openCalendar2}
                handleClose={handleToggleCalendar2}
              />
            </Box>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}
