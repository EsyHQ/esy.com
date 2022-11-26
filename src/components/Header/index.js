import React, { useState } from "react"
import styled from "styled-components"
import { navigate, Link } from "gatsby"
import { Location } from '@reach/router'

import Logo from '../Logo'
import UserIcon from 'src/svg/user-icon.svg'



const Header = () => {
  const [ activeNav, setActiveNav ] = useState(0)
  console.log(Location, 'location')
  return (<HeaderWrapper>
            <HeaderLogo>
              <Link to="/"><Logo /></Link>
            </HeaderLogo>

            <Location>
              {({ location: { pathname } }) => {
                console.log(pathname, 'path')
                if (pathname === '/') {
                  setActiveNav(0)
                } else if (pathname.includes('edu')) {
                  setActiveNav(1)
                } else if (pathname.includes('journals')) {
                  setActiveNav(2)
                } else if (pathname.includes('write')) {
                  setActiveNav(3)
                } 

                return (
                  <HeaderNav>
                    <NavItem className={activeNav === 1 ? 'active' : ""}><Link to="/edu">Edu</Link></NavItem>
                    <NavItem className={activeNav === 2 ? 'active' : ""}><Link to="/journals">Journals</Link></NavItem>
                    <NavItem className={activeNav === 3 ? 'active' : ""}><a href="/write">Write</a></NavItem>
                    <NavItem><UserIcon /></NavItem>
                  </HeaderNav>
                )
              }}
            </Location>

           
          </HeaderWrapper>)
}

export default Header


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 50px;
  width: 100%;
  background: #000;
  align-items: center;
  border-bottom: 1px solid #272727;

  @media(max-width: 600px) {
    padding: 15px 25px;
  }
`

const HeaderLogo = styled.div``

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: #fff;
  align-items: center;
  font-family: 'Spartan',sans-serif;
  font-weight: 500;
  max-width: 400px;
 
`

const NavItem = styled.div`
  // width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 20px;
  &:last-child {
    width: 100%;
  }
  &:not(:last-child) {
    // margin-right: 50px;
  }

  a {
    text-decoration: none;

    &:hover {
      color: #864ba2;
    }
  }

  svg {
    fill: #fff;
    max-width: 25px;
    height: 100%;
  }

  &.active:after, &:not(:last-child):hover:after {
    content: '';
    height: 5px;
    background: #864ba2;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;

    @media(max-width: 576px) {
      bottom: -15px;
    }
  }
`

const AvatarWrapper = styled.div`
  color: #fff;
  font-size: 21px;
`

