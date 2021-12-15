import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import MenuToggle from './MenuToggle'

function MainContainer({children}) {
  const [ mobileHeader, setMobileHeader ] = useState(false)

  const openMenu = () => {
    setMobileHeader(mobileHeader => !mobileHeader)
  }

  const clickMenu = () => {
    setMobileHeader(false)
  }

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    
    if (width < 1024) {
      setMobileHeader(false);
      return
    }
  }

  useEffect(() => {
    const handleResize = () => {
      getWindowDimensions();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Page>
      <PageContent>
        <Header 
          checkOpenMenu={mobileHeader}
          clickMenu={clickMenu}
        />
        <MenuToggle 
          openMenu={openMenu}
          checkOpenMenu={mobileHeader}
        />
        <ContentArea>
          {children}
        </ContentArea>
      </PageContent>
    </Page>
  )
}

export default MainContainer

const Page = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 0 100px;
  overflow: hidden;

  @media (max-width: 1280px) {
    padding-left: 30px;
  }

  @media (max-width: 1024px) {
    padding: 0;
    height: 100vh;
  }
`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  min-height: 80vh;
  margin: 10vh auto;
  padding: 0;
  background-color: #444;
  border-radius: 32px;
  position: relative;

  @media (max-width: 1024px) {
    border-radius: 0;
    min-height: 100%;
    margin: 0;
  }
`

const ContentArea = styled.div`
  position: absolute;
  right: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 380px);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`
