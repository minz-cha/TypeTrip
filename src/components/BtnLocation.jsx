import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import { Popper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

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
          여행지
        </Typography>
        <Box
          sx={{
            // border: "4px solid blue",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Autocomplete
            id="country-select"
            autoHighlight
            // disablePortal
            // getOptionLabel={(option) => option.label}
            // renderOption={(props, option) => (
            //   <Box component="li" {...props}>
            //     {option.label}
            //   </Box>
            // )}
            sx={{ width: "100%" }}
            options={countries}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
                style={{ width: "100%" }}
              />
            )}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}

const countries = [
  { label: "광주" },
  { label: "부산" },
  { label: "여수" },
  { label: "가평" },
];
