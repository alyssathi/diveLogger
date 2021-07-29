import React from "react";
import { Box } from "@material-ui/core";
import { NavBar } from "../navBar";
import { useStyles } from "./layoutCss";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const css = useStyles();
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <body className={css.body}>{children}</body>
      <footer>
        Favicon made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </footer>
    </Box>
  );
}
