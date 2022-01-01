import React from "react"
import styled from "styled-components"


const Header = ({ handleConnect }) => {
  return (
    <HeaderWrapper>
      <LogoContainer>Esy</LogoContainer>
      <MenuContainer>
        <ButtonWrapper onClick={handleConnect}>Connect</ButtonWrapper>
      </MenuContainer>
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
`

const LogoContainer = styled.div`
  font-size: 32px;
  color: #fff;
`

const MenuContainer = styled.nav``


const ButtonWrapper = styled.div`
  font-size: 14px;
  width: 120px;
  color: #fff;
  height: 40px;
  border-radius: 4px;
  background: ${({ isDisabled }) => (isDisabled ? "#cccccc" : "gold")};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  background-image: linear-gradient(to right bottom, #e8962e, #e45131) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`