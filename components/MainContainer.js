import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function MainContainer({children}) {
  return (
    <Page>
      <PageContent>
        <Header />
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
`

const ContentArea = styled.div`
  position: absolute;
  right: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 380px);
`