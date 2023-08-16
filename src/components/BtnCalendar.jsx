import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataCalendar from "./DateCalendar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

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
      <Box position="relative">
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          style={{
            width: "90%",
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
            날짜선택
          </Typography>
          <Button
            onClick={handleToggleCalendar1}
            style={{
              width: "50%",
              height: "55px",
              backgroundColor: "#fff",
              color: "#000000",
            }}
          >
            <CalendarMonthIcon /> 날짜 선택
          </Button>
          <p>~</p>
          <Button
            onClick={handleToggleCalendar2}
            style={{
              width: "50%",
              height: "55px",
              backgroundColor: "#fff",
              color: "#000000",
            }}
          >
            <CalendarMonthIcon /> 날짜 선택
          </Button>
        </ButtonGroup>
        {openCalendar1 && (
          <Box position="absolute" zIndex="1" top="60px" left="140px">
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
    </React.Fragment>
  );
}
