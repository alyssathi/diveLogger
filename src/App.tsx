import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Landing } from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F28F3B",
    },
    secondary: {
      main: "#07485e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
