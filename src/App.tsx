import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#5e35b1' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Kryslin Rass
          </Typography>
          <Button color="inherit" component={Link} to="/">Avaleht</Button>
          <Button color="inherit" component={Link} to="/form">Login</Button>
          <Button color="inherit" component={Link} to="/about">Minust</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default App;
