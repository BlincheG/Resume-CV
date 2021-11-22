import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <HomeSection>
      <HomeWrap>
        <ContentCentered>
          <Row>
            <TitleBlock>Akylbek Dzhusupbekov</TitleBlock>
            <Paragraph>Frontend Developer</Paragraph>
          </Row>
        </ContentCentered>
      </HomeWrap>
    </HomeSection>
  )
}

export default Home

const HomeSection = styled.div`
  position: relative;
  height: 100%;
  z-index: 99;
`

const HomeWrap = styled.section`
  position: absolute;
  background-color: #222;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  padding: 60px;
  opacity: 1;
  overflow: auto;
  transform: translate3d(0,0,0);
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
  background-size: cover;
`

const ContentCentered = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-content: stretch;
  text-align: center;
  align-items: center;
  vertical-align: middle;
`
const Row = styled.div`
  width: 100%;
`

const TitleBlock = styled.h2`
  color: #f5f5f5;
  font-size: 50px;
  line-height: 74px;
  margin: 0;
  text-align: center;
`

const Paragraph = styled.p`
  color: #aaa;
  font-size: 18px;
  font-weight: 300;
  margin: 5px 0;
  text-align: center;
`