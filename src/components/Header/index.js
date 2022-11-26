import React from "react"
import styled from "styled-components"
import { navigate, Link } from "gatsby"

import Logo from '../Logo'
import UserIcon from 'src/svg/user-icon-svg.svg'



const Header = () => {

  return (<HeaderWrapper>
            <Link to="/"><Logo /></Link>
            <HeaderNav>
              <NavItem><Link to="/blog">Blog</Link></NavItem>
              <NavItem><Link to="/journals">Journals</Link></NavItem>
              <NavItem><a href="/write">Write</a></NavItem>
              <NavItem><UserIcon /></NavItem>
            </HeaderNav>
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
`

const AvatarWrapper = styled.div`
  color: #fff;
  font-size: 21px;
`

