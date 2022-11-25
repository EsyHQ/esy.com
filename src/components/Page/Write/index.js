import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"

import Layout from "src/components/Layout/container"
// import Editor from "src/components/Editor"
import TinyEditor from 'src/components/TinyEditor'




const WritePage = ({ fetchAccounts, activeAccount, location }) => {

    return (<Layout location={location} hasFooter={false}>
                <Helmet><title>Write</title></Helmet>
                <SectionWrapper>
                    <TinyEditor />
                    {/* <SidebarContainer>
                      <SidebarNav>
                        <SidebarList>
                          <SidebarListItem>

                          </SidebarListItem>
                        </SidebarList>
                      </SidebarNav>
                    </SidebarContainer> */}
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

const SidebarContainer = styled.div`
  background: #000;
  width: 100%;
`
const SidebarNav = styled.nav``

const SidebarList = styled.ul``

const SidebarListItem = styled.li``
