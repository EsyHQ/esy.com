import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Layout from "../../Layout/container"
import Header from '../../Header'
// import Avatar from '../../Avatar'


const ProfilePage = ({ fetchAccounts, activeAccount }) => {

    return (<Layout>
                <Helmet><title>Profile</title></Helmet>

                <SectionWrapper>
                  <SectionInner>
                    {/* <SectionTitle>Profile</SectionTitle> */}
                    <InnerHeader>
                      <Avatar></Avatar>

                      <AvatarName>Address: {activeAccount.ensName}</AvatarName>
                    </InnerHeader>
                  </SectionInner>

                  <SectionInner>
                    
                  </SectionInner>
                </SectionWrapper>
            </Layout>)
}

export default ProfilePage


const ProfilePageContainer = styled.div``


const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > div {
    border-right: 1px solid #000;
  }
`

const SectionInner = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  height: 100%;
`


const SectionTitle = styled.h1`
  font-size: 36px;
`


const InnerHeader = styled.div`
  // display: flex;
`


const Avatar = styled.div`
  height: 200px;
  width: 200px;
  background: #000;
  margin-bottom: 75px;
`


const AvatarName = styled.div``