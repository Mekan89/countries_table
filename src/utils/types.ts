export interface FilteredCountryProps {
    name: string;
    area: number;
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
}

export interface CountryProps {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    timezones: string[];
    continents: string[];
    flags: Flags;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Gini {
    "2014": number;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Currencies {
    MRU: Mru;
}

export interface Mru {
    name: string;
    symbol: string;
}

export interface Languages {
    ara: string;
}
