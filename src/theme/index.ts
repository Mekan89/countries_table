import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: teal[800], contrastText: "#fff" },

        // secondary: { main: "#2a48f3" },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: teal[800] },

        // primary: { main: "#ffffff" },
        // secondary: { main: "#2a48f3" },
    },
});
