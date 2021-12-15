import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function MenuToggle(props) {
  return (
    <HamburgerIconMenu onClick={props.openMenu}>
      { !props.checkOpenMenu ? 
        <MenuIcon sx={{ fontSize: 30 }}/> :
        <MenuOpenIcon sx={{fontSize: 30}} />
      }
    </HamburgerIconMenu>
  )
}

export default MenuToggle

const HamburgerIconMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    position: absolute;
    display: flex;
    width: 48px;
    height: 48px;
    background-color: #04b4e0;
    right: 10px;
    flex-wrap: wrap;
    align-items: center;
    top: 10px;
    border-radius: 30px;
    z-index: 105;
    cursor: pointer;
    justify-content: center;
    color: white;
  }
`