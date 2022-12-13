import { ClearOutlined, SearchOutlined } from "@mui/icons-material";
import { IconButton, OutlinedInput } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useAtom } from "jotai";
import { keywordAtom } from "../state";

export default function Search() {
    const theme = useTheme();
    const [keyword, setKeyword] = useAtom(keywordAtom);

    return (
        <>
            <Box maxWidth={350} width='100%'>
                <OutlinedInput
                    autoFocus
                    sx={{ background: theme.palette.mode === "light" ? "#fff" : null }}
                    onChange={e => setKeyword(e.target.value.trim())}
                    value={keyword}
                    fullWidth
                    size='small'
                    margin='dense'
                    placeholder='Search...'
                    inputProps={{ "aria-label": "search for countries" }}
                    startAdornment={
                        <IconButton type='button' aria-label='search'>
                            <SearchOutlined />
                        </IconButton>
                    }
                    endAdornment={
                        keyword ? (
                            <IconButton type='button' aria-label='search' onClick={() => setKeyword("")}>
                                <ClearOutlined />
                            </IconButton>
                        ) : null
                    }
                />
            </Box>
        </>
    );
}
