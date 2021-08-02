import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./footerCss";

export function Footer(): JSX.Element {
  const css = useStyles();
  return (
    <Box className={css.container}>
      <Typography className={css.text} variant="body2">
        Favicon & Logo made by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freepik.com"
          title="Freepik"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </Typography>
      <Typography className={css.text} variant="body2">
        Site made by{" "}
        <a target="_blank" rel="noreferrer" href="https://alyssathi.dev">
          Alyssa Thi
        </a>{" "}
        © 2021
      </Typography>
    </Box>
  );
}
