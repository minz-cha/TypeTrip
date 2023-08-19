import React, { useState } from "react";
import { CssBaseline, Box, Container, TextField, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Preview from "../components/photoPreview";
import BtnPeopleCount from "./BtnPeopleCount";
import "../styles/font.css";
import BtnCalendar from "./BtnCalendar";
import BtnLocation from "./BtnLocation";
import AttributeTag from "./AttributeTag";

function WriteInfoContainer() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleButtonClick = () => {
    const data = { title, content };

    fetch("/api/saveData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data saved:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#c5d5ff",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* 내부 Box */}
          <Box
            sx={{
              bgcolor: "#c5d5ff",
              height: "80%",
              width: "80%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "80ch" },
                position: "relative",
                width: "100%",
                height: "100%",
                marginLeft: "30px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              noValidate
            >
              <Box>
                <BtnLocation />
                <BtnCalendar />
                <BtnPeopleCount />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* 방 만들기 하단 */}
        <Box
          sx={{
            position: "relative",
            bgcolor: "#ffffff",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* 방 만들기 */}
          <Box
            sx={{
              bgcolor: "#fff",
              height: "10%",
              width: "80%",
              position: "relative",
              display: "flex",
              marginTop: "20px",
            }}
          >
            <label
              style={{
                fontSize: "1.5rem",
                fontFamily: "Dovemayo_gothic",
                marginLeft: "30px",
              }}
            >
              방 만들기
            </label>
          </Box>
          {/* 작성Form */}
          <Box
            sx={{
              position: "relative",
              height: "80%",
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "80ch" },
                position: "relative",
                width: "90%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
            >
              <Box>
                <label
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Dovemayo_gothic",
                    color: "#787878",
                    marginLeft: "30px",
                  }}
                >
                  제목
                </label>
                <TextField
                  id="title"
                  multiline
                  rows={1}
                  placeholder="제목을 입력해주세요"
                  variant="outlined"
                />
              </Box>
              <Box>
                <label
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Dovemayo_gothic",
                    color: "#787878",
                    marginLeft: "30px",
                  }}
                >
                  내용
                </label>
                <TextField
                  id="content"
                  multiline
                  rows={10}
                  placeholder="내용을 입력해주세요"
                  // sx={{
                  //   justifyContent: "center",
                  //   flexDirection: "column",
                  // }}
                />
              </Box>
              <Box sx={{ ml: "8%" }}>
                <AttributeTag />
              </Box>
            </Box>
            {/* 사진 첨부 */}
            <Box
              sx={{
                height: "80%",
                width: "80%",
                position: "relative",
                marginLeft: "50px",
              }}
            >
              <Preview />
            </Box>
          </Box>
          <Box
            sx={{
              height: "10%",
              width: "80%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3C4FFF",
                fontFamily: "Dovemayo_gothic",
              }}
              onClick={handleButtonClick}
            >
              등록하기
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
];

export default WriteInfoContainer;
