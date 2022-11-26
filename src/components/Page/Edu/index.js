import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import Layout from "src/components/Layout/container"




const WritePage = ({ fetchAccounts, activeAccount, location }) => {

    return (<Layout location={location} hasFooter={false}>
                <Helmet><title>Edu</title></Helmet>
                <SectionWrapper>
                </SectionWrapper>
            </Layout>)
}

export default WritePage


const WritePageContainer = styled.div`
    // display: flex;
    flex: 1;
    margin: 0 auto;
    color: #fff; 
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    font-family: 'sans-serif';
    height: 100%;
    background: #fff;
    flex-direction: column;
    color: #000;
`

const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`

const SectionWrapper = styled.div`
  display: flex;
  // flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  &:first-child {
    // max-width: 95%;
  }
`