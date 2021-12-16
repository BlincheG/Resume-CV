import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Header(props) {
  const router = useRouter();

  return (
    <HeaderWrap className={props.checkOpenMenu ? '' : 'mobile-menu-hide'}>
      <HeaderTitle>
        <HeaderPhoto>
          <Avatar />
        </HeaderPhoto>
        <Title>Akylbek Dzhusupbekov</Title>
        <UnderTitle>Web developer</UnderTitle>
        <SocialLinks>
          <ul>
            <li><a href="https://github.com/BlincheG" alt="Github"> <GitHubIcon /> </a></li>
            <li><a href="https://t.me/blincheg" alt="Telegram"> <TelegramIcon /> </a></li>
          </ul>
        </SocialLinks>
        <CopyRight>
          © 2021 All rights reserved.
        </CopyRight>
      </HeaderTitle>

      <MainMenu>
        <Link href="/" passHref>
          <li onClick={props.clickMenu}>
            <ChangingLink className={router.pathname == '/' ? 'active' : ''}> <HomeIcon/> </ChangingLink>
            <span className={router.pathname == '/' ? 'active' : ''}>Home</span>
          </li>
        </Link>
        <Link href="/about">
          <li onClick={props.clickMenu}>
            <ChangingLink className={router.pathname == '/about' ? 'active' : ''}> <InfoIcon/> </ChangingLink>
            <span className={router.pathname == '/about' ? 'active' : ''}>About Me</span>
          </li>
        </Link>
        <Link href="/education">
          <li onClick={props.clickMenu}>
            <ChangingLink className={router.pathname == '/education' ? 'active' : ''}> <SchoolIcon/> </ChangingLink>
            <span className={router.pathname == '/education' ? 'active' : ''}>Education</span>
          </li>
        </Link>
      </MainMenu>
    </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.div`
  max-width: 380px;
  height: 100%;
  max-height: 80vh;
  min-height: inherit;
  text-align: center;
  padding: 70px 30px 45px;
  overflow: auto;
  background-color: #444;
  border-radius: 32px;
  width: 100%;

  &.mobile-menu-hide {

    @media (max-width: 1024px) {
      width: 0;
      right: 0;
      margin-right: -100%;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    width: 100%;
    max-width: 330px;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #444;
    z-index: 100;
    padding: 30px 30px 10px;
    text-align: center;
    opacity: 1;
    visibility: visible;
    overflow: auto;
    transition: all .25s ease-in-out;
  }
`

const HeaderTitle = styled.div`
  
`

const Title = styled.h2`
  font-size: 27px;
  font-weight: 600;
  color: #f5f5f5;
  margin: 5px 0 7px;
  line-height: 1.2em;

  @media (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`

const UnderTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  color: #bbb;
  margin: 5px 0;
  line-height: 1.2em;

  @media (max-width: 1024px) {
    font-size: 17px;
  }
`

const HeaderPhoto = styled.div`
  width: 180px;
  margin: 0 auto 30px;
  z-index: 1;
`

const Avatar = styled.img`
  background-image: url(../avatar.jpeg);
  background-size: contain;
  max-width: 100%;
  border: 3px solid #fff;
  border-radius: 300px;
  height: 180px;
  width: 180px;
  background-position: center;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  flex: 1;

  ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 20%;

  @media (max-width: 1024px) {
    width: 25%;
  }
  }

  li {
    color: #fff;
    border-radius: 20px;
    font-size: 18px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    opacity: 0.9;

    &:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`

const CopyRight = styled.div`
  color: #bbb;
  width: 380px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 10px 15px;
  line-height: 14px;
  font-size: 12px;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const MainMenu = styled.ul`
  @media (min-width: 1025px) {
    position: absolute;
    padding: 15px 0;
    width: 70px;
    right: -90px;
    background-color: #444;
    border-radius: 35px;
    z-index: 999;
    list-style: none;
    top: 0;
  
    li {
      display: block;
      position: relative;
      transition: all .3s ease-in-out;
  
      &:hover {
        a {
          color: #04b4e0;
        }
        
        span {
          right: 100%;
          visibility: visible;
          opacity: 1;
        }
      }
  
      span {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        color: #fff;
        padding: 2px 10px;
        background-color: #04b4e0;
        white-space: nowrap;
        right: 0;
        top: -50%;
        margin-top: 50%;
        transition: all .3s ease-in-out;
        z-index: 0;
      }
  }

    @media (max-width: 1024px) {
      margin: 30px 0;
    }

  }
`

const ChangingLink = styled.a`
  padding: 10px;
  position: relative;
  color: #b5b6b7;
  display: block;
  font-size: 32px;
  cursor: pointer;

  &.active {
    color: #04b4e0;
  }

    @media (max-width: 1024px) {
      display: none;
    }
`

const LinkText = styled.span`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  color: #fff;
  padding: 2px 10px;
  background-color: $04b4e0;
  white-space: nowrap;
  right: 0;
  top: -50%;
  margin-top: 50%;
  transition: all .3s ease-in-out;
  z-index: 0;

  &:hover {
    right: 100%;
    visibility: visible;
    opacity: 1;
  }
`
