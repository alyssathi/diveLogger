import React from "react";
import { Box } from "@material-ui/core";
import { NavBar } from "../navBar";
import { useStyles } from "./layoutCss";
import { Footer } from "./../footer/index";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  const css = useStyles();
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <body className={css.body}>{children}</body>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}
