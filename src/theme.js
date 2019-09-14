import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9575cd",
      main: "#673ab7",
      dark: "#512da8"
    },
    secondary: {
      light: "#ba68c8",
      main: "#9c27b0",
      dark: "#7b1fa2"
    },
    type: "dark"
  },
  typography: {
    fontFamily: "Helvetica Neue, sans-serif"
  }
});

export default theme;
