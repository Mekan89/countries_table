import { Container, Stack } from "@mui/system";
import { useAtomValue } from "jotai";
import useSWR from "swr";
import Filter from "../src/components/Filter";
import Header from "../src/components/Header";
import Results from "../src/components/Results";
import { keywordAtom, regionAtom } from "../src/state";
import { CountryProps, FilteredCountryProps } from "../src/utils/types";

export const fetcher = (args: string) => fetch(args).then(res => res.json());

function Home() {
    const keyword = useAtomValue(keywordAtom);
    const region = useAtomValue(regionAtom);
    const url = "https://restcountries.com/v3.1/all";

    const { data, error } = useSWR<CountryProps[]>(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const dataFiltering = data?.map((country): FilteredCountryProps => {
        const { name, cca2, capital, region, subregion, latlng, borders, flags, gini, continents, population, area } = country;
        return { name: name.common, cca2, capital, region, subregion, latlng, borders, continents, population, area, flags, gini: Object.values(gini || 0)[0] || 0 };
    });

    const searchCountries =
        region !== "all"
            ? dataFiltering?.filter(country => country.region.toLowerCase().includes(region.toLowerCase()) && country.name.toLowerCase().includes(keyword.toLowerCase()))
            : dataFiltering?.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <>
            <Header />
            <Container maxWidth='md'>
                <Stack justifyContent='center' spacing={3} alignItems='center'>
                    <Filter />
                    <Results countries={searchCountries} />
                </Stack>
            </Container>
        </>
    );
}

export default Home;
