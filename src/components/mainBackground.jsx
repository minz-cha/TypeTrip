import React from "react";
import { Box } from "@mui/system";
import mainImg from "../assets/main-background.png";
import WriteInfoContainer from "../components/writeInfoContainer";

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
          zIndex: 0,
        }}
      />
    </div>
  );
}

export default MainBackground;
