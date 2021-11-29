import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Header() {
  const router = useRouter();

  return (
    <HeaderWrap>
      <MainMenu>
        <li>
          <Link href="/">
            <ChangingLink className={router.pathname == '/' ? 'active' : ''}> <HomeIcon/> </ChangingLink>
          </Link>
          <span>Home</span>
        </li>
        <li>
          <Link href="/about">
            <ChangingLink className={router.pathname == '/about' ? 'active' : ''}> <InfoIcon/> </ChangingLink>
          </Link>
          <span>About Me</span>
        </li>
        <li>
          <Link href="/education">
            <ChangingLink className={router.pathname == '/education' ? 'active' : ''}> <SchoolIcon/> </ChangingLink>
          </Link>
          <span>Education</span>
        </li>
        <li>
          <Link href="/">
            <ChangingLink className={router.pathname == '/' ? 'active' : ''}> <WorkIcon/> </ChangingLink>
          </Link>
        </li>
      </MainMenu>
      <HeaderTitle>
        <HeaderPhoto>
          <Avatar />
        </HeaderPhoto>
        <Title>Akylbek Dzhusupbekov</Title>
        <UnderTitle>Web developer</UnderTitle>
        <SocialLinks>
          <ul>
            <li><a href="https://github.com/BlincheG" alt="Github"> <GitHubIcon /> </a></li>
            <li><a href="" alt="Telegram"> <TelegramIcon /> </a></li>
          </ul>
        </SocialLinks>
        <CopyRight>
          © 2021 All rights reserved.
        </CopyRight>
      </HeaderTitle>
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
`

const HeaderTitle = styled.div`
  
`

const Title = styled.h2`
  font-size: 27px;
  font-weight: 600;
  color: #f5f5f5;
  margin: 5px 0 7px;
  line-height: 1.2em;
`

const UnderTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  color: #bbb;
  margin: 5px 0;
  line-height: 1.2em;
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
    width: 20%
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
`

const MainMenu = styled.ul`
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
`

const ChangingLink = styled.a`
  padding: 10px;
  position: relative;
  color: #b5b6b7;
  display: block;
  font-size: 32px;

  &.active {
    color: #04b4e0;
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