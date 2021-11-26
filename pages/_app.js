import React from 'react';
import MainContainer from '../components/MainContainer'
import '../styles/globals.css'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Akylbek Dzhusupbekov</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
    </CacheProvider>
  )
}

export default MyApp