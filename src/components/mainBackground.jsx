import * as React from "react";
import { Box } from "@mui/material";
import mainImg from "../assets/main-background.png";

function MainBackground() {
  return (
    <div>
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
        }}
      />
    </div>
  );
}

export default MainBackground;
