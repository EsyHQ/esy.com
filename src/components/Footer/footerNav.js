import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"


const FooterNav = () => {

    return (<FooterNavContainer>
                    <FooterList>
                        <FooterListItem>
                        <FooterListItemTitle>Resources</FooterListItemTitle>
                        <FooterSubNav>
                            <FooterSubNavList>
                            <FooterSubNavListItem><Link to="/blog">Blog</Link></FooterSubNavListItem>

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
                            <FooterSubNavListItem><a href="mailto: support@esy.com">Contact Us</a></FooterSubNavListItem>
                            </FooterSubNavList>
                        </FooterSubNav>
                        </FooterListItem>
                    </FooterList>
             </FooterNavContainer>)
}


export default FooterNav





const FooterNavContainer = styled.div``

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
