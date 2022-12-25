export interface FilteredCountryProps {
    name: string;
    officialName: string;
    cca2: string;
    capital: string[];
    region: String;
    subregion: String;
    latlng: number[];
    borders: string[];
    flags: Flags;
    gini: number;
    continents: string[];
    population: number;
    area: number;
    currencies: Currency;
    languages: Languages;
}

export interface CountryProps {
    name: Name;
    tld: string[];
    cca2: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currency;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    flag: string;
    maps: Maps;
    population: number;
    gini: number;
    fifa: string;
    timezones: string[];
    continents: string[];
    flags: Flags;
    startOfWeek: string;
}

interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

interface Name {
    common: string;
    official: string;
}

interface Flags {
    png: string;
    svg: string;
}

interface Eng {
    f: string;
    m: string;
}

export interface Currencies {
    code: Currency;
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface Languages {
    name: string;
    nativeName: string;
}
