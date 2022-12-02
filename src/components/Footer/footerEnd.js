import React from 'react'
import styled from 'styled-components'

import TwitterIcon from 'src/svg/twitter.svg'
import GithubIcon from 'src/svg/github-logo.svg'

const TwitterURL = 'http://www.twitter.com/EsyJournal'
const GithubURL = 'http://www.github.com/EsyJournal'


const FooterEnd = () => {
    return (<FooterEndContainer>
                    <Trademark>
                        <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &copy;{''}
                        {/* 2022 Esy Research Technologies */}
                        {/* 2023 Esy Technologies, LLC. */}
                        2023 Esy
                        </a>
                    </Trademark>

                    <FooterEndRight>
                      <LegalLinks>
                        <a href="/privacy">Privacy</a>
                        <a href="/privacy">Terms</a>
                      </LegalLinks>
                      <SocialIcons>
                          <a href={TwitterURL} target="_blank"><TwitterIcon /></a>
                          <a href={GithubURL} target="_blank"><GithubIcon /></a>
                      </SocialIcons>
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
`



const Trademark = styled.div`
  width: 100%;
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
  margin-right: 50px;

  a {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`
const LegalLink = styled.div`


`

const FooterEndRight = styled.div``