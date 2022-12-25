import useSWR from "swr";
import { CountryProps, FilteredCountryProps } from "../utils/types";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const useRequest = (url: string) => {
    const { data, error } = useSWR<CountryProps[]>(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    const countries = data?.map((country): FilteredCountryProps => {
        const { name, currencies, languages, cca2, capital, region, subregion, latlng, borders, flags, gini, continents, population, area } = country;
        return {
            name: name.common,
            officialName: name.official,
            currencies,
            languages,
            cca2,
            capital,
            region,
            subregion,
            latlng,
            borders,
            continents,
            population,
            area,
            flags,
            gini: Object.values(gini || 0)[0] || 0,
        };
    });
    return { countries, error };
};

export default useRequest;
