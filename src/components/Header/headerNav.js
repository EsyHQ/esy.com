import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import UserIcon from 'src/svg/user-icon.svg'
import AppIcon from 'src/svg/hamburger.svg'

import DropDown from "./dropdown"
import EmailForm from "../Form/emailForm"


const HeaderNav = ({ activeNav }) => { 

  return (<HeaderNavContainer>
              <DesktopNav>
                {/* <NavItem className={activeNav === 1 ? 'active' : ""}><Link to="/blog">Blog</Link></NavItem>  */}
                {/* <NavItem className={activeNav === 2 ? 'active' : ""}><Link to="/journals">Journals</Link></NavItem>  */}
                {/* <NavItem><EmailForm /></NavItem> */}
              </DesktopNav>

              <MobileNav>
                <NavItem><AppIcon /></NavItem>
              </MobileNav>
          </HeaderNavContainer>)
}



export default HeaderNav



const HeaderNavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: #fff;
    align-items: center;
    font-family: 'Spartan',sans-serif;
    font-weight: 500;
    max-width: 490px;
    // max-width: 325px;
`

const DesktopNav = styled.nav`
  display: flex;
  width: 100%;

  @media(max-width: 900px) {
    display: none;
  }
`

const MobileNav = styled.nav`
  display: none;

  @media(max-width: 900px) {
    display: flex;
  }
`

const NavItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  // margin: 0 20px;
  // width: 100%;
  &:last-child {
    width: 100%;
  }

  &.user-icon {
    width: 100%;
  }

  &:not(:last-child) {
    // margin-right: 50px;
  }

  a {
    text-decoration: none;

    &:hover {
      color: #864ba2;
      color: #8b3dff;
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
    background: #8b3dff;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;

    @media(max-width: 576px) {
      bottom: -15px;
    }
  }

  form {
    margin: 0;

  

    >div {
      width: 100%;
      max-width: 285px;
      flex-direction: row-reverse;
      align-self: flex-end;

      div:first-child {
        // margin-right: 20px;
      }
    }
  }
`