import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Layout from "../../Layout/container"
import Header from '../../Header'
import Avatar from '../../Avatar'


const ProfilePage = ({ fetchAccounts, activeAccount }) => {

    return (<Layout>
                <Helmet><title>Profile</title></Helmet>
                <SectionWrapper>
                     <SectionTitle>Profile</SectionTitle>

                    {activeAccount.ensName}
                </SectionWrapper>
            </Layout>)
}

export default ProfilePage


const ProfilePageContainer = styled.div``


const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const SectionTitle = styled.h1`
  font-size: 36px;
`
