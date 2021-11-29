import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer'
import '../styles/globals.css'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import LoadingScreen from '../components/LoadingScreen';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  })

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Akylbek Dzhusupbekov</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        {loading ? (
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        ) : (
          <LoadingScreen />
        )}
    </CacheProvider>
  )
}

export default MyApp