import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <IconButton onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")} color='inherit'>
            {resolvedTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
};

export default ThemeSwitcher;
