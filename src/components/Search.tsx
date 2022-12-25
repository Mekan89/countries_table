import ClearOutlined from "@mui/icons-material/ClearOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/system";
import Box from "@mui/system/Box";
import { useAtom } from "jotai";
import { useRef } from "react";
import { keywordAtom } from "../state";

export default function Search() {
    const theme = useTheme();
    const [keyword, setKeyword] = useAtom(keywordAtom);
    const inputRef = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        setKeyword("");
        inputRef.current?.focus();
    };

    return (
        <Box maxWidth={450} width='100%'>
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
                        <IconButton type='button' aria-label='search' onClick={clearInput}>
                            <ClearOutlined />
                        </IconButton>
                    ) : null
                }
            />
        </Box>
    );
}
