import * as React from "react"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import GlobalStyle from '../styles/globalStyles'
import Logo from '../images/esy-logo.jpg'

const IndexPage = () => {
  return (
    <MainSection>
      <GlobalStyle />
      <Helmet>
        <title>Esy</title>
      </Helmet>

      <SectionWrapper>
        {/* <SectionLogo><img alt="logo" src={Logo} /></SectionLogo> */}
        <SectionTitle>Esy DAO</SectionTitle>
        <SectionParagraph>
          Web3 Writing Platform & NFT Marketplace for Authors.
        </SectionParagraph>
      </SectionWrapper>

    </MainSection>
  )
}

export default IndexPage


const MainSection = styled.main`
  display: flex;
  flex: 1;
  margin: 0 auto;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'sans-serif';
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`


const SectionTitle = styled.h1`
  font-size: 36px;
`

const SectionParagraph = styled.p`
  font-size: 23px;

  @media(max-width: 600px) {
    font-size: 18px;
  }
`