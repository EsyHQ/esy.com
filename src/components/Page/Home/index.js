import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { navigate } from 'gatsby'
// import GlobalStyle from '../styles/globalStyles'

import Header from 'src/components/Header'

import EditableSection from '../../Editor/editorSection';

import Layout from "../../Layout/container"


const IndexPage = ({ fetchAccounts, activeAccount }) => {

  return (
    <Layout>
      <Helmet><title>Esy</title></Helmet>
      
      {/* <Header 
        fetchAccounts={fetchAccounts}
        activeAccount={activeAccount} 
      /> */}

      <SectionWrapper></SectionWrapper>
    </Layout>
  )
}
 



export default IndexPage





const MainSection = styled.main`
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
  flex-direction: column;
  align-items: center;
  width: 100%;
`

