import React from 'react'
import styled from 'styled-components'

import TwitterIcon from 'src/svg/twitter.svg'
import GithubIcon from 'src/svg/github-logo.svg'

const TwitterURL = 'http://www.twitter.com/EsyJournal'
const GithubURL = 'http://www.github.com/EsyJournal'

const CookiePolicy = "https://app.termly.io/document/cookie-policy/2c678f2d-a639-46a1-861f-b74b34e8fb23"
const PrivacyPolicy = "https://app.termly.io/document/privacy-policy/a5285fdd-a501-4dbd-89d2-b1112dc4ee86"
const TermPolicy = "https://app.termly.io/document/terms-of-use-for-saas/1cfc74df-69a4-4df1-ba18-8153199c1ac3"



const FooterEnd = () => {
    return (<FooterEndContainer>
                    <Trademark>
                        <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &copy;{' '}
                        {/* 2022 Esy Research Technologies */}
                        {/* 2023 Esy Technologies, LLC. */}
                        {/* 2023 Esy Technologies */}
                        2023  esy
                        </a>
                    </Trademark>

                    <FooterEndRight>
                      <LegalLinks>
                        <a target="_blank" href={PrivacyPolicy}>Privacy</a>
                        <a target="_blank" href={TermPolicy}>Terms</a>
                        <a target="_blank" href={CookiePolicy}>Cookies</a>
                      </LegalLinks>
                      {/* <SocialIcons>
                          <a href={TwitterURL} target="_blank"><TwitterIcon /></a>
                          <a href={GithubURL} target="_blank"><GithubIcon /></a>
                      </SocialIcons> */}
                    </FooterEndRight>
            </FooterEndContainer>)
}

export default FooterEnd


const FooterEndContainer = styled.div`

    display: flex;
    align-items: center;
    // justify-content: space-between;
    width: 100%;
    padding: 25px 50px;
    background: #000;

    a {
        opacity: 0.5;
        font-size: 14px !important;
    }

    @media(max-width: 600px) {
      padding: 25px;
    }
`



const Trademark = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
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


const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-right: 50px;

  a {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`
const LegalLink = styled.div`


`

const FooterEndRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;


`