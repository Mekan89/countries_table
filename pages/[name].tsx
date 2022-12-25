import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "../src/components/Header";
import { CountryProps } from "../src/utils/types";

const Map = dynamic(() => import("../src/components/MyMap"), {
    ssr: false,
});

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Country() {
    const router = useRouter();
    const { data } = useSWR(`https://restcountries.com/v3.1/alpha/${router?.query?.name}`, fetcher);

    return (
        <>
            <Head>
                <title> {data && `- ${data[0].name.common}`}</title>
            </Head>
            <Header />
            <Container>
                <IconButton onClick={() => router.push("/")} sx={{ mb: 5 }}>
                    <ArrowBackIcon />
                    <Typography ml={1} variant='button'>
                        Back
                    </Typography>
                </IconButton>

                {data?.map((el: CountryProps) => {
                    const { name, population, currencies, latlng, languages, capital, cca2, region, subregion, tld, borders, area, flags } = el;

                    return (
                        <Box key={name.common}>
                            <Stack direction={{ sm: "column", md: "row" }} gap={3}>
                                <Image src={flags.svg} alt={name.common} width={500} height={380} objectFit='cover' loading='lazy' />

                                <Stack direction={{ sm: "column", lg: "row" }} gap={2} flex='1' my='auto'>
                                    <Stack flex={1}>
                                        <Typography variant='h6' mb={2}>
                                            {name.common}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Official Name: </span>
                                            {name.official}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Population: </span>

                                            {population.toLocaleString()}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Region: </span>
                                            {region}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Sub Region: </span>
                                            {subregion}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Capital: </span>
                                            {capital}
                                        </Typography>

                                        {borders ? (
                                            <>
                                                <Typography fontWeight={600} mb={1}>
                                                    Borders:
                                                </Typography>
                                                <Stack direction='row' gap={1}>
                                                    {borders.map((c: string) => (
                                                        <Chip key={c} label={c} />
                                                    ))}
                                                </Stack>
                                            </>
                                        ) : null}
                                    </Stack>
                                    <Stack flex={1}>
                                        <Typography mt={{ lg: 5 }}>
                                            <span style={{ fontWeight: 600 }}>LatLng: </span>
                                            {latlng[0]} , {latlng[1]}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Top Level Domain: </span>
                                            {tld[0]}
                                        </Typography>
                                        {languages && (
                                            <Typography>
                                                <span style={{ fontWeight: 600 }}>Languages: </span>
                                                {Object.values(languages).join(", ")}
                                            </Typography>
                                        )}
                                        {currencies && (
                                            <Typography>
                                                <span style={{ fontWeight: 600 }}>Currencies: </span>
                                                {Object.values(currencies)[0].name}
                                            </Typography>
                                        )}

                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>Area: </span>
                                            {area.toLocaleString()}
                                        </Typography>
                                        <Typography>
                                            <span style={{ fontWeight: 600 }}>IOC: </span>
                                            {cca2}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Map latlong={latlng} />
                        </Box>
                    );
                })}
            </Container>
        </>
    );
}
