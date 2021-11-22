import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';

function education() {
  return (
    <EducationWrap>
      <PageTitle>
        <h2>Resume</h2>
      </PageTitle>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <BlockTitle>
              <h3>Education</h3>
            </BlockTitle>
            <TimeLineItem>
              <div className="left-part">
                <h5>2011 - 2016</h5>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4>Kyrgyz State Technical University, Bishkek</h4>
                <p>Faculty of Information Technologies</p>
              </div>
            </TimeLineItem>
            <TimeLineItem>
              <div className="left-part">
                <h5>2018</h5>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4>IT-attractor academy</h4>
                <p>Backend development courses for IT professionals</p>
              </div>
            </TimeLineItem>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <BlockTitle>
              <h3>FORMER EMPLOYERS</h3>
            </BlockTitle>
            <TimeLineItem>
              <div className="left-part">
                <h5>2018 - 2019</h5>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4>Muratov partners / Frontend developer</h4>
                <p>Developed and maintained internal software products. Technologies used: wordpress, php5/7, css3, html5, git.</p>
              </div>
            </TimeLineItem>
            <TimeLineItem>
              <div className="left-part">
                <h5>2019 - 2021</h5>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4>Sibers / Frontend developer</h4>
                <p>Worked as a core developer/consultant in one of the biggest software companies in Kyrgyzstan. Given the outsourcing nature of the company types of projects varied greatly from regular CRUD web applications and browser extensions to more specific TV apps and proprietary software video players. Technologies used: javascript ES6, react, vue, angular, linux, git.</p>
              </div>
            </TimeLineItem>
          </Grid>
        </Grid>
      </div>
    </EducationWrap>
  )
}

export default education

const EducationWrap = styled.div`
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
  -ms-overflow-style: none;
  scrollbar-width: none;

  h2 {
    position: relative;
    font-size: 32px;
    z-index: 1;
  }

  h3 {
    font-size: 21px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const PageTitle = styled.div`
  margin-bottom: 30px;
`

const BlockTitle = styled.div`
  margin-bottom: 15px;
`

const TimeLineItem = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-bottom: 15px;

  .left-part {
    width: 30%;
    display: table-cell;
    padding-right: 25px;
    min-height: 100%;
    text-align: center;
    vertical-align: top;
  }

  h5 {
    color: #aaa;
    margin: 3px 0;
    font-size: 14px;
    line-height: 1.4em;
  }

  .divider {
    position: absolute;
    top: 0;
    left: 30%;
    bottom: 0;
    width: 1px;
    background-color: #444;

    &:before {
      content: '';
      display: block;
      margin-top: 4px;
      width: 17px;
      height: 17px;
      position: absolute;
      margin-left: -8px;
      border-radius: 10px;
      background-color: #04b4e0;
      opacity: .25;
      z-index: 0;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      margin-top: 8px;
      width: 9px;
      height: 9px;
      margin-left: -4px;
      background-color: #222;
      border-radius: 5px;
      border: 2px;
      solid #04b4e0;
      z-index: 1;
    }
  }

  .right-part {
    width: 70%;
    display: table-cell;
    padding-left: 25px;
    padding-right: 15px;
    vertical-align: top;

    p {
      font-size: .92em;
      margin-bottom: 10px;
    }
  }
`