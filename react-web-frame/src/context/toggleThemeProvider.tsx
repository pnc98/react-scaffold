import { createTheme } from "@material-ui/core";
import React, { FC, useState } from "react";

export interface ToggleThemeContextType {
  themeColor: any,
  setThemeColor:(theme: any) => void,
};
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00FF00',
      contrastText: '#000',
    },
  },
  typography: {
    fontSize: 16,
  },
  spacing: 4
});

export const ToggleThemeContext = React.createContext<ToggleThemeContextType>({
  themeColor: defaultTheme,
  setThemeColor: () => {},
});

const ToggleThemeProvider: FC = (props: any) => {
  const { children } = props;
  const [themeColorState, setThemeColorState] = useState<string[]>([]);
  const setThemeColor = (themeColor: any) => {
    setThemeColorState(themeColor);
  };
  return (
    <ToggleThemeContext.Provider
      value={{ themeColor: themeColorState, setThemeColor }}
    >
      { children }
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeProvider;