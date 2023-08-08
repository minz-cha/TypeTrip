import React from "react";
import { Box } from "@mui/system";
import mainImg from "../assets/main-background.png";

function MainBackground() {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${mainImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
  );
}

export default MainBackground;
