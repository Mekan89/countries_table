import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";
import createEmotionCache from "../src/theme/createEmotionCache";
import MUIThemeProvider from "../src/theme/MuiThemeProvider";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return (
        <ThemeProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title> World Countries</title>
                    <meta name='viewport' content='initial-scale=1, width=device-width' />
                </Head>
                <MUIThemeProvider>
                    <Component {...pageProps} />
                </MUIThemeProvider>
            </CacheProvider>
        </ThemeProvider>
    );
}
