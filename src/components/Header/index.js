import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import HeaderMenu from '../Menu/headerMenu'
import Logo from '../Logo'
import Button from 'src/components/Input/Button'

import AccountMenu from "../AccountMenu"

const Header = ({ activeAccount, handleDisconnect, handleConnect }) => {

  return (
    <HeaderWrapper>
      <Logo />
      {/* {activeAccount && !activeAccount.isConnected && <Button isBoxShadow={false} handleButtonClick={handleConnect} ctaText="Connect" />} */}
      <HeaderNav>
        <NavItem><a href="/learn">Explore</a></NavItem>
        <NavItem><a href="/learn">Learn</a></NavItem>
        <NavItem><a href="/blog">Blog</a></NavItem>
        {/* <NavItem><a href="/blog">Write</a></NavItem> */}
        <Button isBoxShadow={true}  ctaText="Write" />
      </HeaderNav>
      {/* {<AccountMenu 
        handleDisconnect={handleDisconnect}
        activeAccount={activeAccount} 
      />} */}
    </HeaderWrapper>
  )
}

export default Header


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
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
`

const NavItem = styled.div`
  margin-right: 50px;

  a {
    text-decoration: none;
  }
`

const AvatarWrapper = styled.div`
  color: #fff;
  font-size: 21px;
`

