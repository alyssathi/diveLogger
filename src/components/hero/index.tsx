import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useStyles } from "./heroCss";

export function Hero(): JSX.Element {
  const css = useStyles();
  return (
    <Container className={css.container}>
      <Box className={css.box}>
        <Typography variant="h1">Welcome All Divers!</Typography>
      </Box>
      <Box className={css.box}>
        <Typography variant="h2">
          Logging dives has never been easier
        </Typography>
      </Box>
    </Container>
  );
}
