import { AppBar, Box, Link, styled, Toolbar } from "@mui/material";
import Search from "./Search";
// import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
});

export default function Header() {
    return (
        <AppBar component='nav' position='sticky' sx={{ mb: 5, maxWidth: "md", mx: "auto" }}>
            <Toolbar>
                <FlexBetween>
                    <Link href='/' variant='body1' underline='none' fontWeight={700} fontSize={18} color='inherit' sx={{ display: { xs: "none", sm: "block" } }}>
                        World Rank
                    </Link>
                    <Search />
                    <ThemeSwitcher />
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}
