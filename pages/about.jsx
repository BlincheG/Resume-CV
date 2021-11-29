import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import AboutElement from '../components/AboutElement';

function AboutMe() {
  const datas = [
    {
      title: 'Date of birth',
      value: '28.08.1994'
    },
    {
      title: 'Residence',
      value: 'Bishkek, Kyrgyzstan'
    },
    {
      title: 'Email',
      value: 'blinchegg@gmail.com'
    },
    {
      title: 'Phone',
      value: '+996 553 45 02 46'
    },
  ]

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
            <div style={{marginBottom: "100px"}}>
              <ul>
                {
                  datas.map((data, index) => (
                    <AboutElement 
                      title={ data.title }
                      value={ data.value }
                      key={index}
                    />
                  ))
                }
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <BlockTitle>Skills</BlockTitle>
        <ul>
          <KnowledgesItems>Javascript</KnowledgesItems>
          <KnowledgesItems>React</KnowledgesItems>
          <KnowledgesItems>Vue</KnowledgesItems>
          <KnowledgesItems>Redux</KnowledgesItems>
          <KnowledgesItems>Typescript</KnowledgesItems>
          <KnowledgesItems>CSS</KnowledgesItems>
          <KnowledgesItems>SASS</KnowledgesItems>
          <KnowledgesItems>Styled Component</KnowledgesItems>
          <KnowledgesItems>GIT</KnowledgesItems>
          <KnowledgesItems>HTML</KnowledgesItems>
          <KnowledgesItems>Firebase</KnowledgesItems>
          <KnowledgesItems>Linux</KnowledgesItems>
          <KnowledgesItems>Npm</KnowledgesItems>
          <KnowledgesItems>Yarn</KnowledgesItems>
        </ul>
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

  @media (max-width: 1024px) {
    border-radius: 0px;
  }
`

const PageTitle = styled.div`
  margin-bottom: 30px;
`

const BlockTitle = styled.h3`
  margin-bottom: 15px;
`
const KnowledgesItems = styled.li`
  display: inline-block;
  background-color: #04b4e0;
  border-radius: 3px;
  color: #fff;
  padding: 1px 10px;
  margin: 3px 2px;
  font-size: 13px;
  cursor: pointer;
`