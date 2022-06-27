import { createTheme } from "@material-ui/core";
import { deepOrange, green } from "@material-ui/core/colors";

//blue
const primaryTheme = createTheme({
  palette: {
    primary: {
      main: '#448aff',
      contrastText: "#fff"
    },
    secondary: {
      main: '#448aff',
      contrastText: "#fff"
    },
  },
});

//green
const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#00e676',
      contrastText: "#fff"
    },
    secondary: green,
  },
});

//black
const blackTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: "#fff"
    },
    secondary: {
      main: "#000",
      contrastText: "#fff"
    },
  },
});

//orange
const orangeTheme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: '#ff5722',
      contrastText: "#fff"
    },
  },
});
//light
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#263238",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff",
      contrastText: "#000"
    },
  },
  overrides: {},
});
//dark
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#263238",
      contrastText: "#fff"
    },
    secondary: {
      main: "#263238",
      contrastText: "#fff"
    }
  },
  overrides: {},
});

export {
  primaryTheme,
  greenTheme,
  blackTheme,
  orangeTheme,
  lightTheme,
  darkTheme
};