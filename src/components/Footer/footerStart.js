import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import Logo from 'src/components/Logo'


const FooterStart = () => {
    return (<FooterStartContainer>
                <FooterLeft>
                    <CompanyLogo>
                    <Logo />
                    </CompanyLogo>
            
                    <CompanyDesc>
                    Esy is a digital journaling platform that offers users a suite of analytical tools for writing AI 
                    assisted essays and discovering powerful insights about their personal writing habits.  
                    </CompanyDesc>
                </FooterLeft>
                
                <FooterRight>
                    <FooterNav>
                        <FooterList>
                            <FooterListItem>
                            <FooterListItemTitle>Resources</FooterListItemTitle>
                            <FooterSubNav>
                                <FooterSubNavList>
                                <FooterSubNavListItem><Link to="/edu">Edu</Link></FooterSubNavListItem>
                                <FooterSubNavListItem><Link to="/glossary">Glossary</Link></FooterSubNavListItem>
                                </FooterSubNavList>
                            </FooterSubNav>
                            </FooterListItem>
                            
                            <FooterListItem>
                            <FooterListItemTitle>Developers</FooterListItemTitle>
                            <FooterSubNav>
                                <FooterSubNavList>
                                <FooterSubNavListItem><Link to="/docs">Docs</Link></FooterSubNavListItem>

                                </FooterSubNavList>
                            </FooterSubNav>
                            </FooterListItem>

                            <FooterListItem>
                            <FooterListItemTitle>Organization</FooterListItemTitle>
                            <FooterSubNav>
                                <FooterSubNavList>
                                <FooterSubNavListItem><Link to="/about">About Us</Link></FooterSubNavListItem>
                                <FooterSubNavListItem><Link to="/blog">Blog</Link></FooterSubNavListItem>
                                <FooterSubNavListItem><Link to="/contact">Contact Us</Link></FooterSubNavListItem>
                                </FooterSubNavList>
                            </FooterSubNav>
                            </FooterListItem>
                        </FooterList>
                    </FooterNav>
                </FooterRight>
            </FooterStartContainer>)
}


export default FooterStart


const FooterStartContainer = styled.div`
    color: #fff;
    width: 100%;
    padding: 5px 50px;
    display: flex;
    justify-content: space-between;


    .footer-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {
        display: flex;
        justify-content: center;
        width: 100%;

        li {
            list-style-type: none;

        }
    }
`


const CompanyLogo = styled.div`
  margin-top: 50px;
`

const CompanyDesc = styled.div`
  font-size: 18px;
  color: #fff;
  max-width: 600px;
  margin-top: 50px;
`


const FooterNav = styled.nav``
const FooterList = styled.ul ``
const FooterListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 20px;


`
const FooterListItemTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`


const NavItem = styled.div``


const FooterLeft = styled.div`
  width: 100%;
`
const FooterRight = styled.div`
  width: 100%;
`

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
    font-family: "Roboto","Helvetica","Arial" !important;
    display: inline !important;
    font-weight: 400 !important;

    &:hover {
        color: #864ba2;
    }
  }
`
