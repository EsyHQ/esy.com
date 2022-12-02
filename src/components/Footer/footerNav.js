import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

// const navItems = [
//   { 
//     category: 'Resources',
//     links: [
//       { 
//         title: 'Blog',
//         url: '/blog'
//       },

//       {
//         title: 'Journals',
//         url: '/journals'
//       }

//     ]
//   }
// ]
 


const FooterNav = () => {

    return (<FooterNavContainer>
                    <FooterList>
                        <FooterListItem>
                        <FooterListItemTitle>Resources</FooterListItemTitle>
                        <FooterSubNav>
                            <FooterSubNavList>
                            <FooterSubNavListItem><Link to="/blog">Blog</Link></FooterSubNavListItem>
                            <FooterSubNavListItem><Link to="/edu">Journals</Link></FooterSubNavListItem>
                            {/* <FooterSubNavListItem><Link to="/edu">Edu</Link></FooterSubNavListItem>
                            <FooterSubNavListItem><Link to="/glossary">Glossary</Link></FooterSubNavListItem> */}
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
                            <FooterSubNavListItem><Link to="/about">Privacy</Link></FooterSubNavListItem>
                            <FooterSubNavListItem><Link to="/about">Terms</Link></FooterSubNavListItem>
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

const FooterList = styled.ul `
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
  
  @media(max-width: 1200px) {
    margin-left: 0;
  }
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
    font-family: "Roboto", sans-serif, "Helvetica","Arial" !important;
    display: inline !important;
    font-weight: 400 !important;

    &:hover {
        color: #864ba2;
    }
  }
`
