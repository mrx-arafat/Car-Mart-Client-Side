import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();

  const styles = {
    button: { margin: 15 },
    appBarBackground: { background: "#2E3B55" },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={styles.appBarBackground}>
        <Toolbar>
          <NavLink to="/home" style={{ color: "white" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </NavLink>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cars Mart
          </Typography>

          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              padding: "6px 8px",
            }}
            to="/carcollection"
          >
            Cars Collection
          </NavLink>
          {user?.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>

              <Button onClick={logout} color="inherit">
                LogOut
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
