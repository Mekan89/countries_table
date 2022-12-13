import { Box, Button, Stack } from "@mui/material";
import { useAtom } from "jotai";
import { regionAtom } from "../state";

export const regions: string[] = ["all", "africa", "americas", "asia", "europe", "oceania"];

export default function Filter() {
    const [region, setRegion] = useAtom(regionAtom);

    return (
        <Box>
            <Stack direction='row' gap={{ xs: 2, md: 4 }} my={2} justifyContent='center' flexWrap='wrap'>
                {regions.map(el => (
                    <Button key={el} variant={region === el ? "contained" : "outlined"} sx={{ borderRadius: 10 }} size='small' onClick={() => setRegion(el)}>
                        {el}
                    </Button>
                ))}
            </Stack>
        </Box>
    );
}
