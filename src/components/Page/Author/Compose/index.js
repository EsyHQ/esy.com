import React, { useEffect } from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"
import LexicalEditor from 'src/components/LexicalEditor'
import initialEditorState from 'src/components/LexicalEditor/initialEditorState'



const ComposePage = ({ location }) => {

  const fetchLocalStorage = (key) => {
    return window && window.localStorage.getItem(key)
  }

    return (<PageWrapper>
              <Layout pageTitle="Compose">
                  <SectionWrapper>
                    <LexicalEditor 
                      initialEditorState={initialEditorState}
                    />
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default ComposePage



const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  main {
    padding-top: 0;
  }
`

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
  align-items: center;
  width: 100%;
  height: 100%;
`

const SidebarContainer = styled.div`
  background: #000;
  width: 100%;
`
const SidebarNav = styled.nav``

const SidebarList = styled.ul``

const SidebarListItem = styled.li``
