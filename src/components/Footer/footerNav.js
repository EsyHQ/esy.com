import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"



const FooterNav = () => {

  return (<FooterNavContainer>
    <FooterList>
    <FooterListItem>
        <FooterListItemTitle>EXPLORE</FooterListItemTitle>
        <FooterSubNav>
          <FooterSubNavList>
            <FooterSubNavListItem><a href="https://www.esy.com/essays">essays</a></FooterSubNavListItem>
          </FooterSubNavList>
        </FooterSubNav>
      </FooterListItem>
      <FooterListItem>
        <FooterListItemTitle>LEARN</FooterListItemTitle>
        <FooterSubNav>
          <FooterSubNavList>
            <FooterSubNavListItem><Link to="/school">school</Link></FooterSubNavListItem>
            <FooterSubNavListItem><Link to="/research">research</Link></FooterSubNavListItem>
          </FooterSubNavList>
        </FooterSubNav>
      </FooterListItem>


      <FooterListItem>
        <FooterListItemTitle>ABOUT</FooterListItemTitle>
        <FooterSubNav>
          <FooterSubNavList>
            {/* <FooterSubNavListItem><Link to="/learn">learn</Link></FooterSubNavListItem> */}
            <FooterSubNavListItem><Link to="/about">about us</Link></FooterSubNavListItem>
            <FooterSubNavListItem><a href="mailto: support@esy.com">contact</a></FooterSubNavListItem>
          </FooterSubNavList>
        </FooterSubNav>
      </FooterListItem>
    </FooterList>
  </FooterNavContainer>)
}


export default FooterNav





const FooterNavContainer = styled.div`
  @media(max-width: 1200px) {
    margin-top: 30px;
  }
`

const FooterList = styled.ul`
  
  @media(max-width: 1200px) {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-start;
  }


`


const FooterListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  font-size: 16px;
  
  :last-child {
    margin-right: 0;
  }

  @media(max-width: 1200px) {
    margin-left: 0;
  }

  @media(max-width: 600px) {
    font-size: 14px;
  }
`
const FooterListItemTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`


const NavItem = styled.div``


const FooterSubNav = styled.nav``
const FooterSubNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 10px;
`
const FooterSubNavListItem = styled.li`
  margin-top: 10px;

  a {
    // font-family: "Roboto", sans-serif, "Helvetica","Arial" !important;
    font-family: "Poppins", sans-serif!important;  
    display: inline !important;
    font-weight: 400 !important;

    &:hover {
        color: #864ba2;
        color: #8b3dff;
    }
  }
`
