import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import { FlexBetween } from "../../styles";
import Search from "./Search";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    const { pathname } = useRouter();

    return (
        <AppBar component='nav' position='sticky' sx={{ mb: 5 }}>
            <Toolbar>
                <FlexBetween>
                    <Link href='/' variant='body1' underline='none' fontWeight={700} fontSize={18} color='inherit' sx={{ display: { xs: "none", sm: "block" } }}>
                        World Rank
                    </Link>
                    {pathname !== "/[name]" && <Search />}
                    <ThemeSwitcher />
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}
