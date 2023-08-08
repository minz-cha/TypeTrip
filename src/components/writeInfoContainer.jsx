import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function WriteInfoContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#787878",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* 내부 Box */}
          <Box
            sx={{
              bgcolor: "#fff",
              height: "80%",
              width: "80%",
              border: "4px solid red",
              position: "relative",
              display: "flex", // Flexbox 설정
              alignItems: "center", // 수직 가운데 정렬
              justifyContent: "center", // 수평 가운데 정렬
            }}
          >
            <Button variant="contained" color="primary">
              Click Me!
            </Button>
          </Box>
        </Box>
        {/* 방 만들기 하단 - 글 작성부분 */}
        <Box
          sx={{
            position: "relative",
            bgcolor: "#ffffff",
            height: "100vh",
            border: "4px solid blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* 제목 */}
          <Box
            sx={{
              bgcolor: "#fff",
              height: "10%",
              width: "80%",
              border: "4px solid red",
              position: "relative",
              display: "flex",
            }}
          >
            <label style={{ fontSize: "1.5rem" }}>방 만들기</label>
          </Box>
          {/* 작성Form */}
          <Box
            sx={{
              bgcolor: "#fff",
              height: "80%",
              width: "80%",
              border: "4px solid red",
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
                border: "4px solid blue",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
            >
              <Box>
                <label style={{ fontSize: "1.5rem" }}>제목</label>
                <TextField
                  id="title"
                  multiline
                  rows={1}
                  defaultValue="제목을 입력해주세요"
                  variant="outlined"
                />
              </Box>
              <Box>
                <label style={{ fontSize: "1.5rem" }}>내용</label>
                <TextField
                  id="content"
                  multiline
                  rows={10}
                  defaultValue="내용을 입력해주세요"
                />
              </Box>
            </Box>
            {/* 사진 첨부 */}
            <Box
              sx={{
                bgcolor: "#fff",
                height: "80%",
                width: "80%",
                border: "4px solid red",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default WriteInfoContainer;
