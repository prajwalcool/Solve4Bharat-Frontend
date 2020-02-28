import { grey, red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

export const themesConfig = {
  default1: {
    palette: {
      type: "light",
      grey: grey,
      //   background: "#fff",
      primary: {
        light: "#3b3b3b",
        main: "#0a0b0b",
        dark: "#070707",
        contrastText: "#fff"
      },
      secondary: {
        light: "#39ffd3",
        main: "#08FFC8",
        dark: "#05b28c"
      },
      error: red
    },
    status: {
      danger: "#08FFC8"
    },
    zIndex: {
      appBar: 5
    }
  }
};

export const theme = createMuiTheme(themesConfig.default1);
