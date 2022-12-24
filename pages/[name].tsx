import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "../src/components/Header";
import { fetcher } from "../src/hooks/useRequest";
import { CountryProps } from "../src/utils/types";
const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
});

export default function Country() {
    const router = useRouter();
    const { data } = useSWR(`https://restcountries.com/v3.1/alpha/${router.query?.name}`, fetcher);

    return (
        <>
            <Head>
                <title> {data && `- ${data[0].name.common}`}</title>
            </Head>
            <Header />
            <Container sx={{ border: 1 }}>
                <IconButton onClick={() => router.push("/")} sx={{ mb: 5 }}>
                    <ArrowBackIcon />
                </IconButton>

                {data?.map((el: CountryProps) => {
                    const { name, population, cca3, currencies, languages, capital, region, subregion, capitalInfo, tld, borders, area, flags } = el;

                    return (
                        <Stack key={name.common} direction={{ sm: "column", md: "row" }} gap={3}>
                            <Image src={flags.svg} alt={name.common} width={400} height={280} objectFit='cover' />

                            <Stack border={1} direction={{ sm: "column", lg: "row" }} gap={2} flex='1' my='auto'>
                                <Stack flex={1}>
                                    <Typography variant='h6' mb={2}>
                                        {name.common}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Official Name:</span>
                                        {name.official}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Population:</span>

                                        {population.toLocaleString()}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Region:</span>
                                        {region}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Sub Region:</span>
                                        {subregion}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Capital:</span>
                                        {capital}
                                    </Typography>

                                    {borders ? (
                                        <>
                                            <Typography>
                                                <span style={{ fontWeight: 600 }}>Borders:</span>
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
                                        <span style={{ fontWeight: 600 }}>LatLng:</span>
                                        {capitalInfo.latlng[0]} , {capitalInfo.latlng[1]}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Top Level Domain:</span>
                                        {tld[0]}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Languages:</span>
                                        {Object.values(languages).join(", ")}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Currencies:</span>
                                        {Object.values(currencies)[0].name}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>Area:</span>
                                        {area.toLocaleString()}
                                    </Typography>
                                    <Typography>
                                        <span style={{ fontWeight: 600 }}>IOC:</span>
                                        {cca3}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    );
                })}
                <Map latlong={data[0]?.capitalInfo.latlng} area={data[0]?.area} />
            </Container>
        </>
    );
}
