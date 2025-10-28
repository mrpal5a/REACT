//in project 8, we had done this work using two files and now all that work is done in this single file
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}