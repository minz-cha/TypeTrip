// OutlinedCard.js
import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#000000",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

function OutlinedCard() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative", // OutlinedCard를 SimpleContainer와 겹치게 함
          bgcolor: "#fff",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          maxWidth: 300,
          zIndex: 1, // OutlinedCard를 SimpleContainer 위로 올림
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: "#000000",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default OutlinedCard;
