import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer'
import '../styles/globals.css'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import LoadingScreen from '../components/LoadingScreen';
import { motion } from 'framer-motion'

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;
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
            <motion.div
              key={router.route}
              initial="initial"
              animate="animate"
              transition="transitionEnd"
              style={{ width: '100%', height: '100%' }}
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </MainContainer>
        ) : (
          <LoadingScreen />
        )}
    </CacheProvider>
  )
}

export default MyApp