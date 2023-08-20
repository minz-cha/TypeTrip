import * as React from "react";
import { Box, ThemeProvider } from "@mui/system";

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#000000",
          },
        },
      }}
    >
      <Box
        sx={{
          height: "100vh",
          bgcolor: "primary.main",
          //   "&:hover": {
          //     backgroundColor: "primary.dark",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
        }}
      />
    </ThemeProvider>
  );
}
