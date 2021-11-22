import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';

function AboutMe() {
  return (
    <AboutWrap>
      <PageTitle>
        <h2>About Me</h2>
      </PageTitle>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <p>I am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work. I am an excellent team worker and am able to take instructions from all levels and build up good working relationships with all colleagues. I am flexible, reliable and possess excellent time keeping skills.</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div>
              <ul>
                <AboutElement>
                  <AboutTitle>Date of birth</AboutTitle>
                  <AboutValue>28.08.1994</AboutValue>
                </AboutElement>

                <AboutElement>
                  <AboutTitle>Residence</AboutTitle>
                  <AboutValue>Bishkek, Kyrgyzstan</AboutValue>
                </AboutElement>

                <AboutElement>
                  <AboutTitle>Email</AboutTitle>
                  <AboutValue>blinchegg@gmail.com</AboutValue>
                </AboutElement>

                <AboutElement>
                  <AboutTitle>Phone</AboutTitle>
                  <AboutValue>+996 553 45 02 46</AboutValue>
                </AboutElement>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </AboutWrap>
  )
}

export default AboutMe

const AboutWrap = styled.div`
  background-color: #222;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  padding: 60px;
  overflow: auto;
  transform: translate3d(0,0,0);
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
  background-size: cover;

  h2 {
    position: relative;
    font-size: 32px;
    z-index: 1;
  }
`

const PageTitle = styled.div`
  margin-bottom: 30px;
`

const SectionContent = styled.div`

`

const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const AboutElement = styled.li`
  margin-bottom: 10px;
`

const AboutTitle = styled.span`
  color: #04b4e0;
  margin-right: 5px;
  font-weight: 600;
`

const AboutValue = styled.span`

`