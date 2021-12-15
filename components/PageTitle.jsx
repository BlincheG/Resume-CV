import React from 'react';
import styled from 'styled-components';

function PageTitle(props) {
  return (
    <Title>
      {props.main ? <h2>{props.name}</h2> : <BlockTitle>{props.name}</BlockTitle>}
    </Title>
  )
}

export default PageTitle

const Title = styled.div`
  margin-bottom: 30px;
`

const BlockTitle = styled.h3`
  margin-bottom: 15px;
`