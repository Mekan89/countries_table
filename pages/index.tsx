import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/system/Container";
import Stack from "@mui/system/Stack";
import { useAtomValue } from "jotai";
import CountryList from "../src/components/CountryList";
import Header from "../src/components/Header";
import Regions from "../src/components/Regions";
import useRequest from "../src/hooks/useRequest";
import { keywordAtom, regionAtom } from "../src/state";
import { Center } from "../styles";

function Home() {
    const keyword = useAtomValue(keywordAtom);
    const region = useAtomValue(regionAtom);
    const { countries, error } = useRequest("https://restcountries.com/v3.1/all");

    const filterCountry_1 = region !== "all" ? countries?.filter(country => country.region.toLowerCase().includes(region.toLowerCase())) : countries;
    const filterCountry_2 = filterCountry_1?.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <>
            {error ? (
                <Center height='100vh'>
                    <h2>Error Loading data. </h2>
                </Center>
            ) : !countries ? (
                <Center height='100vh'>
                    <CircularProgress size={40} />
                </Center>
            ) : (
                <Container maxWidth='md'>
                    <Header />
                    <Stack justifyContent='center' spacing={3} alignItems='center' mb={10}>
                        <Regions />
                        <CountryList countries={filterCountry_2!} />
                    </Stack>
                </Container>
            )}
        </>
    );
}

export default Home;
