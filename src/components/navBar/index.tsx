import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@material-ui/core";
import logo from "../../images/logo.png";
import { useStyles } from "./navBarCss";

export function NavBar() {
  const css = useStyles();

  return (
    <AppBar>
      <Toolbar className={css.container}>
        <Box className={css.logo}>
          <img className={css.image} alt="DiveLogger Logo" src={logo} />
          <Typography variant="h4" color="secondary">
            DiveLogger 2.0
          </Typography>
        </Box>
        <Box className={css.buttonBox}>
          <Button
            disableRipple
            disableElevation
            variant="outlined"
            color="secondary"
          >
            Sign Up
          </Button>
          <Button
            disableRipple
            disableElevation
            variant="contained"
            color="secondary"
          >
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
