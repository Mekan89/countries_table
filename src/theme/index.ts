import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        // primary: { main: teal[700], dark: teal[900], light: teal[300], contrastText: "#fff" },
        primary: { main: teal[800] },
        secondary: { main: "#606060" },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: teal[800] },
        secondary: { main: "#aaaaaa" },
    },
});

// export const darkTheme = {
//     soft:"#373737"
//   }
//   export const lightTheme = {
//     soft:"#f5f5f5"
//   }
