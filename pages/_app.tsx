import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createEmotionCache from "../utils/createEmotionCache";
import theme from "../theme/theme";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>MUI5 Nextjs</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="keywords" content="Nextjs, Material-UI, Recoil" />
          <meta name="description" content="Boilerplate for Nextjs+Typescript projects" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}
