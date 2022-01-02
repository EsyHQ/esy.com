import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import HeaderMenu from '../Menu/headerMenu'
import Logo from '../Logo'
import Button from "../Input/Button"

import AccountMenu from "../AccountMenu"

const Header = ({ activeAccount, handleDisconnect, handleConnect }) => {

  return (
    <HeaderWrapper>
      <Logo />
      {activeAccount && !activeAccount.isConnected && <Button handleButtonClick={handleConnect} ctaText="Connect" />}

      {activeAccount && activeAccount.isConnected && <AccountMenu 
        handleDisconnect={handleDisconnect}
        activeAccount={activeAccount} 
      />}
    </HeaderWrapper>
  )
}

export default Header


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  background: #000;
  align-items: center;
`

const AvatarWrapper = styled.div`
  color: #fff;
  font-size: 21px;
`

