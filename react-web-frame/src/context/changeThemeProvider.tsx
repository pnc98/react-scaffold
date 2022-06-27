import React, { useState, FC } from "react";
import { primaryTheme, greenTheme, blackTheme, orangeTheme } from "../assets/themeColor";
import { ContextPropType } from "../core/model/contextPropType";

export interface ChangeThemeContextType {
  theme: any,
  setTheme: (theme: any) => void
};
export const ChangeThemeContext = React.createContext<ChangeThemeContextType>({
  theme: greenTheme,
  setTheme: () => {}
});
const ChangeThemeProvider: FC<ContextPropType> = (props: ContextPropType) => {
  const { children } = props;
  const [ value, setValue ] = useState<any>(greenTheme);
  const setTheme = (theme: any) => {
    setValue(theme);
  };
  return (
    <ChangeThemeContext.Provider
      value = {{ theme: value, setTheme }}
    >
      { children }
    </ChangeThemeContext.Provider>
  )
};
export default ChangeThemeProvider;