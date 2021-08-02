import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./diveDisplayCss";

export function DiveDisplay(): JSX.Element {
  const css = useStyles();
  return (
    <div className={css.container}>
      <Typography variant="h4">Dive #1</Typography>
    </div>
  );
}
