import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import Layout from "src/components/Layout/container"
// import Editor from "src/components/Editor"
import TinyEditor from 'src/components/TinyEditor'




const WritePage = ({ fetchAccounts, activeAccount, location }) => {

    return (<Layout location={location}>
                <Helmet><title>Write</title></Helmet>
                <SectionWrapper>
                    {/* {activeAccount.isConnected && <Editor />}  */}
                    <TinyEditor />
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
  flex-direction: column;
  align-items: center;
  width: 100%;
`

