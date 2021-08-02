import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Dashboard, Landing } from "./pages";

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
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
