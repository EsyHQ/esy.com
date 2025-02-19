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
                {/* <NavItem className={activeNav === 1 ? 'active' : ""}><Link to="/essays">Essays</Link></NavItem>  */}
                {/* <NavItem className={activeNav === 2 ? 'active' : ""}><Link to="/school">School</Link></NavItem>  */}
                <NavItem><a target="_blank" href="https://app.esy.com/signup">Log in</a></NavItem>
              </DesktopNav>
{/*               
              <MobileNav>
                <NavItem><AppIcon /></NavItem>
              </MobileNav> */}
          </HeaderNavContainer>)
}



export default HeaderNav



const HeaderNavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    color: #fff;
    align-items: center;
    font-family: 'OrigamiIncised',sans-serif;
    font-weight: 500;
`

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;

  // @media(max-width: 900px) {
  //   display: none;
  // }
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


  &.user-icon {
    width: 100%;
  }

  &:not(:last-child) {
    // margin-right: 50px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    font-family: 'OrigamiIncised',sans-serif !important;
    letter-spacing: 0.05em;


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
    height: 2px;
    background: rgb(139, 61, 255);
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
      // max-width: 285px;
      flex-direction: row-reverse;
      align-self: flex-end;

      div:first-child {
        // margin-right: 20px;
      }
    }
  }
`