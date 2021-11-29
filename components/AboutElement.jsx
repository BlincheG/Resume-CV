import React from 'react'
import styled from 'styled-components'

function AboutElement(props) {
  return (
    <AboutElements>
      <AboutTitle>{props.title}</AboutTitle>
      <span>{props.value}</span>
    </AboutElements>
  )
}

export default AboutElement

const AboutElements = styled.li`
  margin-bottom: 10px;
`

const AboutTitle = styled.span`
  color: #04b4e0;
  margin-right: 5px;
  font-weight: 600;
`