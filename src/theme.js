import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import Notifier from "./Notifier";
import { teal, amber, brown } from "@material-ui/core/colors";

function ThemeWrapper({ children }) {
  const { type } = useSelector(state => state.themeReducer);

  const muiTheme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: type === "light" ? brown : amber,
      type: type
    },
    typography: {
      fontFamily: "Helvetica Neue, sans-serif"
    }
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <Notifier />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
