import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import AboutElement from '../components/AboutElement';
import PageTitle from '../components/PageTitle';
import SkillsItem from '../components/SkillsItem';

function AboutMe() {
  const datasAboutMe = [
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

  const skills = ['Javascript', 'React', 'Vue', 'Redux', 'VueX', 'Typescript', 'CSS', 'SASS', 'Git', 'HTML', 'Linux', 'npm', 'yarn', 'ES6']

  return (
    <AboutWrap>
      <PageTitle
        main={true}
        name={'About me'}
      />
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <p>I am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work. I am an excellent team worker and am able to take instructions from all levels and build up good working relationships with all colleagues. I am flexible, reliable and possess excellent time keeping skills.</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div>
              <ul>
                {
                  datasAboutMe.map((data, index) => (
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
      <div style={{paddingBottom: '50px'}}></div>
      <div>
        <PageTitle
          main={false}
          name={'Skills'}
        />
        <ul>
          {
            skills.map((skill, index) => (
              <SkillsItem 
                name={skill}
                key={index}
              />
            ))
          }
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
