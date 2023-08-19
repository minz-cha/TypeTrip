import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import "../styles/font.css";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: "15px",
//   backgroundColor: alpha(theme.palette.common.white, 0.1),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.1),
//   },
//   marginTop: theme.spacing(30),
//   marginButtom: theme.spacing(30),
//   marginRight: theme.spacing(50),
//   width: "calc(100% - 240px)",
//   height: "60px",
//   backdropFilter: "blur(10px)",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(50),
//     width: "auto",
//   },
// }));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "15px",
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  marginTop: theme.spacing(30),
  marginBottom: theme.spacing(30),
  marginRight: theme.spacing(50),
  width: "calc(100% - 240px)",
  height: "60px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
  zIndex: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(50),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "25px",
    fontFamily: "Dovemayo_gothic",
    "&::placeholder": {
      color: "white",
    },
    // 입력사이즈 UI 제한
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
  height: "100%",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
}));

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="나랑 잘 맞는 친구와 여행가자~"
          inputProps={{ "aria-label": "search" }}
        ></StyledInputBase>
      </Search>
    </Box>
  );

  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <Search>
  //       <SearchIconWrapper>
  //         <SearchIcon />
  //       </SearchIconWrapper>
  //       <Autocomplete
  //         options={top100Films}
  //         getOptionLabel={(option) => option.title}
  //         renderInput={(params) => (
  //           <StyledInputBase
  //             {...params}
  //             placeholder="나랑 잘 맞는 친구와 여행가자~"
  //             inputProps={{ ...params.inputProps, "aria-label": "search" }}
  //           />
  //         )}
  //       />
  //     </Search>
  //   </Box>
  // );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
