import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar as MuiDateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { styled } from "@mui/system";

const StyledDateCalendar = styled(MuiDateCalendar)({
  background: "white",
  heigth: "50%",
  border: "4px solid blue",
});

export default function DataCalendar({ open, handleClose }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDateCalendar open={open} onClose={handleClose} />
    </LocalizationProvider>
  );
}
