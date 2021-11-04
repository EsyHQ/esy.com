import * as React from "react"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import GlobalStyle from '../styles/globalStyles'


// markup
const IndexPage = () => {
  return (
    <MainSection>
      <GlobalStyle />
      <Helmet>
        <title>Esy DAO</title>
      </Helmet>

      <SectionWrapper>
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

`

const SectionParagraph = styled.p``

