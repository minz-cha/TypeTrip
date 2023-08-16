import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Preview from "../components/photoPreview";
import BtnPeopleCount from "./BtnPeopleCount";
import "../styles/font.css";
import BtnCalendar from "./BtnCalendar";
import BtnLocation from "./BtnLocation";

function WriteInfoContainer() {
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
              // border: "2px solid red",
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
                // border: "4px solid blue",
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
              bgcolor: "#fff",
              height: "80%",
              width: "80%",
              position: "relative",
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
                bgcolor: "#ffffff",
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
                />
              </Box>
            </Box>
            {/* 사진 첨부 */}
            <Box
              sx={{
                bgcolor: "#fff",
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
              bgcolor: "#fff",
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
            >
              등록하기
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default WriteInfoContainer;
