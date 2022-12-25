// responsiveFontSizes

import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from ".";

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        theme === "light" ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
    }, [theme]);

    return (
        <ThemeProvider theme={responsiveFontSizes(currentTheme)}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MUIThemeProvider;
