import React from 'react';
import styled from 'styled-components';

function SkillsItem(props) {
  return (
    <KnowledgesItems>
      {props.name}
    </KnowledgesItems>
  )
}

export default SkillsItem

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