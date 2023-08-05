import React, { useState } from "react";
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
import Logo from "../assets/test-logo.svg";

const authTrueSettings = ["마이페이지", "Logout"];
const authFalseSettings = ["Login"];

function ButtonAppBar(props) {
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
        sx={{ background: "transparent", height: "100px" }}
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
          >
            방만들기
          </Button>
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
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
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
                  {authTrueSettings.map((authTrueSettings) => (
                    <MenuItem
                      key={authTrueSettings}
                      onClick={handleCloseUserMenu}
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
                    onClick={handleCloseUserMenu}
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

export default ButtonAppBar;
