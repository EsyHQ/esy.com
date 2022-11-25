import React from 'react'
import styled from 'styled-components'

import Logo from 'src/components/Logo'

import TwitterIcon from 'src/svg/twitter.svg'
import GithubIcon from 'src/svg/github-logo.svg'

const TwitterURL = 'http://www.twitter.com/EsyJournal'
const GithubURL = 'http://www.github.com/EsyJournal'



const Footer = () => {
    return (
        <FooterElement>
            <FooterTop>
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
                          <FooterSubNavListItem>Edu</FooterSubNavListItem>
                          <FooterSubNavListItem>Glossary</FooterSubNavListItem>
                        </FooterSubNavList>
                      </FooterSubNav>
                    </FooterListItem>
                    
                    <FooterListItem>
                      <FooterListItemTitle>Developers</FooterListItemTitle>
                      <FooterSubNav>
                        <FooterSubNavList>
                          <FooterSubNavListItem>Docs</FooterSubNavListItem>

                        </FooterSubNavList>
                      </FooterSubNav>
                    </FooterListItem>

                    <FooterListItem>
                      <FooterListItemTitle>Organization</FooterListItemTitle>
                      <FooterSubNav>
                        <FooterSubNavList>
                          <FooterSubNavListItem>About Us</FooterSubNavListItem>
                          <FooterSubNavListItem>Blog</FooterSubNavListItem>
                          <FooterSubNavListItem>Contact Us</FooterSubNavListItem>
                        </FooterSubNavList>
                      </FooterSubNav>
                    </FooterListItem>
                  </FooterList>
                </FooterNav>
              </FooterRight>
            </FooterTop>

            <FooterBody>
              <Trademark>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                &copy;{''}
                {/* 2022 Esy Research Technologies */}
                2023 Esy Technologies, LLC.
                </a>
              </Trademark>
             
              <SocialIcons>
                  <a href={TwitterURL} target="_blank"><TwitterIcon /></a>
                  <a href={GithubURL} target="_blank"><GithubIcon /></a>
                </SocialIcons>
            </FooterBody>
           
        </FooterElement>)
}


export default Footer


const Trademark = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
`

const CompanyLogo = styled.div`
  margin-top: 50px;
`
const CompanyInfo = styled.div``
const CompanyDesc = styled.div`
  font-size: 18px;
  color: #fff;
  max-width: 600px;
  margin-top: 50px;
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;

  a {
    color: #fff;
    opacity: 1;
  }

  svg {
    width: 100%;
    max-width: 25px;
    height: 100%;
    fill: #fff;

    &:first-child {
      margin-right: 15px;
    }
  }
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

const FooterElement = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #000;

 a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Rokkitt, sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  svg { 
    fill: #fff;
  }
`


const FooterTop = styled.div`
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

const FooterLeft = styled.div`
  width: 100%;
`
const FooterRight = styled.div`
  width: 100%;
`

const FooterBody = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  // border-top: 1px solid #272727;
  background: #000;

  a {
    opacity: 0.5;
  }
`

const FooterSubNav = styled.nav``
const FooterSubNavList = styled.ul`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 0;
  margin-top: 10px;
`
const FooterSubNavListItem = styled.li`
  margin-top: 10px;
`
