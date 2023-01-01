import React from "react"
import styled from "styled-components"

import Layout from "src/components/Author/Layout"



const AdminPage = () => {

    return (<PageWrapper>
              <Layout pageTitle="Compose">
                  <SectionWrapper>
                  </SectionWrapper>
              </Layout>
            </PageWrapper>)
}

export default AdminPage


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
  background: #fff;
`

const SidebarContainer = styled.div`
  background: #000;
  width: 100%;
`
const SidebarNav = styled.nav``

const SidebarList = styled.ul``

const SidebarListItem = styled.li``
