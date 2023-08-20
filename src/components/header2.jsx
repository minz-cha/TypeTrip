import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SampleImg from "../assets/sample-profile.png";
import Logo from "../assets/main-logo.svg";

const authTrueSettings = ["마이페이지", "Logout"];
const authFalseSettings = ["Login"];

function SideHeader(props) {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "#fff", height: "100px" }}
      >
        <Toolbar
          sx={{
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Link to="/main" style={{ textDecoration: "none", flexGrow: 1 }}>
            <img
              src={Logo}
              alt="TypeTrip"
              style={{ height: "28px", color: "#3C4FFF" }}
            />
          </Link>
          <Button
            color="inherit"
            sx={{
              backgroundColor: "#3C4FFF",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
            onClick={() => {
              navigate(`/write`);
            }}
          >
            방만들기
          </Button>
          {/* 로그인된 상태 */}
          {auth && (
            <div>
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="primary"
                >
                  <Avatar
                    sx={{
                      fontSize: 50,
                      color: "#000000",
                    }}
                    alt="User"
                    src={SampleImg}
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  slotProps={{
                    paper: {
                      sx: {
                        marginTop: "10px",
                      },
                    },
                  }}
                >
                  {authTrueSettings.map((authTrueSettings, index) => (
                    <MenuItem
                      key={authTrueSettings}
                      onClick={() => {
                        handleCloseUserMenu();
                        if (index === 0) {
                          navigate(`/test`);
                        } else if (index === 1) {
                          setAuth(false);
                          navigate(`/main`);
                        }
                      }}
                    >
                      <Typography textAlign="center">
                        {authTrueSettings}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          )}
          {/* 로그아웃된 상태 */}
          {!auth && (
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="primary"
              >
                <AccountCircle
                  sx={{
                    fontSize: 50,
                    color: "#000000",
                  }}
                />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                slotProps={{
                  paper: {
                    sx: {
                      marginTop: "10px",
                    },
                  },
                }}
              >
                {authFalseSettings.map((authFalseSettings) => (
                  <MenuItem
                    key={authFalseSettings}
                    onClick={() => {
                      handleCloseUserMenu();
                      setAuth(true);
                      navigate(`/main`);
                    }}
                  >
                    <Typography textAlign="center">
                      {authFalseSettings}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SideHeader;
