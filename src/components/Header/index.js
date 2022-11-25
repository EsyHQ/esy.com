import React from "react"
import styled from "styled-components"
import { navigate, Link } from "gatsby"

import HeaderMenu from '../Menu/headerMenu'
import Logo from '../Logo'
import Button from 'src/components/Input/Button'
// import { ReactComponent as UserIcon } from '../../svg/user-icon-svg.svg'
import UserIcon from 'src/svg/user-icon-svg.svg'
import AccountMenu from "../AccountMenu"



const Header = ({ activeAccount, handleDisconnect, handleConnect }) => {

  return (
    <HeaderWrapper>
      <Link to="/"><Logo /></Link>
      {/* {activeAccount && !activeAccount.isConnected && <Button isBoxShadow={false} handleButtonClick={handleConnect} ctaText="Connect" />} */}
      <HeaderNav>
        {/* <NavItem><a href="/learn">Products</a></NavItem> */}
        {/* <NavItem><a href="/learn">Developers</a></NavItem> */}
        {/* <NavItem><a href="/learn">Edu</a></NavItem> */}
        <NavItem><a href="/blog">Blog</a></NavItem>
        <NavItem><a href="/blog">Journals</a></NavItem>
        {/* <NavItem><a href="/blog">Blog</a></NavItem> */}
        {/* <NavItem><Button isBoxShadow={true}  ctaText="Write" /></NavItem> */}
        <NavItem><a href="/write">Write</a></NavItem>

        <NavItem><UserIcon /></NavItem>
        {/* <NavItem><img src={UserIcon} /></NavItem> */}
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

