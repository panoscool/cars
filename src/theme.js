import { createMuiTheme } from "@material-ui/core/styles";
import { purple, amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: amber,
    type: "dark"
  },
  typography: {
    fontFamily: "Helvetica Neue, sans-serif"
  }
});

export default theme;
